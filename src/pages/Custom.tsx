import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const customizationSteps = [
  {
    title: "Choose Your Style",
    description:
      "Select from our curated collection of base designs or work with our team to create something entirely unique.",
    features: [
      "Premium fabrics",
      "Classic silhouettes",
      "Modern cuts",
      "Timeless designs",
    ],
    image: "/custom/style.jpg", // place your image in public/images/custom/
  },
  {
    title: "Select Materials",
    description:
      "Choose from the finest fabrics sourced from renowned mills around the world.",
    features: ["Italian wool", "Silk blends", "Cashmere", "Premium cotton"],
    image: "/custom/materials.jpg",
  },
  {
    title: "Perfect Fit",
    description:
      "Our master tailors ensure every piece is crafted to your exact measurements.",
    features: [
      "Virtual consultation",
      "In-store fitting",
      "Detailed measurements",
      "Multiple fittings",
    ],
    image: "/custom/fitting.jpg",
  },
  {
    title: "Final Creation",
    description:
      "Your bespoke piece is handcrafted by our artisans with uncompromising attention to detail.",
    features: [
      "Hand-stitched details",
      "Quality assurance",
      "Personal monogram",
      "Luxury packaging",
    ],
    image: "/custom/final.jpg",
  },
];

export const Custom: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-headline text-secondary-foreground mb-6">
            Bespoke Tailoring
          </h1>
          <p className="body-elegant max-w-2xl mx-auto">
            Experience the ultimate in personalized luxury with our bespoke
            tailoring service. Every piece is crafted exclusively for you.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">The Bespoke Process</h2>
            <p className="body-elegant max-w-2xl mx-auto">
              From initial consultation to final fitting, we guide you through
              every step of creating your perfect piece.
            </p>
          </div>

          <div className="space-y-16">
            {customizationSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold">
                      {step.title}
                    </h3>
                  </div>

                  <p className="body-elegant mb-8">{step.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visualization Image */}
                <div className="flex-1">
                  <div className="luxury-card p-8 bg-muted/30">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">
            Ready to Begin Your Bespoke Journey?
          </h2>
          <p className="body-elegant mb-8">
            Schedule a consultation with our master tailors and experience the
            luxury of completely personalized fashion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="luxury-card p-6">
              <h3 className="font-semibold text-lg mb-2">Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Initial design and measurement session
              </p>
              <p className="text-2xl font-bold text-primary">Complimentary</p>
            </div>

            <div className="luxury-card p-6">
              <h3 className="font-semibold text-lg mb-2">Bespoke Suit</h3>
              <p className="text-muted-foreground mb-4">
                Complete suit with multiple fittings
              </p>
              <p className="text-2xl font-bold text-primary">From $3,500</p>
            </div>

            <div className="luxury-card p-6">
              <h3 className="font-semibold text-lg mb-2">Individual Pieces</h3>
              <p className="text-muted-foreground mb-4">
                Shirts, trousers, or jackets
              </p>
              <p className="text-2xl font-bold text-primary">From $800</p>
            </div>
          </div>

          <Button className="btn-luxury" size="lg">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};
