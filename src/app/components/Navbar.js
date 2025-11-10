"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 500) {
        navbar.classList.add("scrolled");
        navbar.classList.add("shadow");
      } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("shadow");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="navbar fade-bg fixed-top z-3">
      <div className="container d-flex justify-content-center align-items-center">
        <Image
          src="/images/logo.png"
          alt="logo-zeus-viaggi"
          className="logo-img"
          width={935}
          height={308} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </nav>
  );
}
