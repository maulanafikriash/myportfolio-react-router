import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import type { JSX } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maulana Fikri Ash-Shidiq - Portfolio" },
    {
      name: "description",
      content:
        "Personal portfolio of Maulana Fikri Ash-Shidiq, Front-End Web Developer.",
    },
    // Open Graph
    {
      property: "og:title",
      content: "Maulana Fikri Ash-Shidiq - Portofolio",
    },
    {
      property: "og:description",
      content:
        "Hai! Selamat datang di Website Portofolio Maulana Fikri Ash-Shidiq. Yuk kenalan, lihat hasil karya di Portfolio, dan jangan ragu untuk reach out lewat Contact.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://maulanafikriash.vercel.app/",
    },
    {
      property: "og:image",
      content: "https://maulanafikriash.vercel.app/assets/img/share-image.png",
    },
  ];
}

// Link tags
export function links() {
  return [
    {
      rel: "apple-touch-icon",
      sizes: "192x192",
      href: "/assets/logo/portfolio-192x192.png",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ];
}

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
