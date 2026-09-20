ALTER TABLE public.email_signups
  ADD COLUMN IF NOT EXISTS email_opt_in boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS sms_opt_in boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS source text,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now();

UPDATE public.email_signups SET email = lower(btrim(email)) WHERE email <> lower(btrim(email));

CREATE OR REPLACE FUNCTION public.normalize_email_signup()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.email := lower(btrim(NEW.email));
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS normalize_email_signup_trg ON public.email_signups;
CREATE TRIGGER normalize_email_signup_trg
BEFORE INSERT OR UPDATE ON public.email_signups
FOR EACH ROW EXECUTE FUNCTION public.normalize_email_signup();

GRANT SELECT, UPDATE, DELETE ON public.email_signups TO authenticated;
GRANT INSERT ON public.email_signups TO anon, authenticated;
GRANT ALL ON public.email_signups TO service_role;

DROP POLICY IF EXISTS "Admins can update signups" ON public.email_signups;
CREATE POLICY "Admins can update signups"
ON public.email_signups FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete signups" ON public.email_signups;
CREATE POLICY "Admins can delete signups"
ON public.email_signups FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));