-- Create table for email signups
CREATE TABLE public.email_signups (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can insert email signups"
ON public.email_signups
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins could read signups (for future admin panel)
CREATE POLICY "Authenticated users can view signups"
ON public.email_signups
FOR SELECT
TO authenticated
USING (true);