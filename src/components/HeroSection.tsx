import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/SbChero.jpg";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Fashion Collection"
          className="
            w-full h-full object-cover
            mobile-scroll
          "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="hero-headline text-white mb-6 hero-text-animate">
          Luxury
          <span className="block text-primary">Redefined</span>
        </h1>

        <p className="body-elegant text-white/90 mb-8 max-w-2xl mx-auto hero-text-animate">
          Discover our curated collection of premium fashion pieces, crafted
          with uncompromising attention to detail and timeless elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-button-animate">
          <Link to="/women">
            <Button size="lg" className="btn-luxury w-full sm:w-auto">
              Shop Women
            </Button>
          </Link>

          <Link to="/men">
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-luxury w-full sm:w-auto"
            >
              Shop Men
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
