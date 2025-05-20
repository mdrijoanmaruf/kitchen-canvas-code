
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-recipe-accent/30 flex items-center justify-center py-12 px-4">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
