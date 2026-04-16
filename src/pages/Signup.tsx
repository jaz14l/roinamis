import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";

const Signup = () => {
  return (
    <main className="relative min-h-screen flex flex-col">
      <GrainBackground />
      <Navigation />
      <div className="flex-1 flex items-center justify-center pt-16">
        <SignUpForm />
      </div>
      <Footer />
    </main>
  );
};

export default Signup;
