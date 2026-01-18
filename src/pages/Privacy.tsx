import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
            <section>
              <h2 className="text-foreground font-medium mb-3">Information We Collect</h2>
              <p>
                When you sign up for our mailing list, we collect your email address and optionally 
                your phone number. This information is used solely to send you updates about roinamis, 
                including early access to drops and brand news.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-medium mb-3">How We Use Your Information</h2>
              <p>
                Your email and phone number are used exclusively to communicate with you about roinamis. 
                We do not sell, rent, or share your personal information with third parties for 
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-medium mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-medium mb-3">Your Rights</h2>
              <p>
                You may unsubscribe from our communications at any time by clicking the unsubscribe 
                link in any email we send. You may also contact us to request deletion of your 
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-medium mb-3">Contact</h2>
              <p>
                For any questions regarding this privacy policy, please reach out to us through 
                our official channels.
              </p>
            </section>

            <p className="text-xs text-muted-foreground/60 pt-6">
              Last updated: January 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
