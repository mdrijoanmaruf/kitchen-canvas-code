
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-recipe-accent/30 flex items-center justify-center py-12 px-4">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
