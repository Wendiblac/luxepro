import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collections } from '@/data/products';

export const Collections: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-headline text-secondary-foreground mb-6">
            Our Collections
          </h1>
          <p className="body-elegant max-w-2xl mx-auto">
            Curated collections that tell a story of craftsmanship, luxury, and timeless elegance.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`luxury-card overflow-hidden group ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative ${
                  index === 0 ? 'aspect-[2/1]' : 'aspect-[4/5]'
                }`}>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="font-playfair text-3xl lg:text-4xl font-semibold mb-4">
                      {collection.name}
                    </h3>
                    <p className="text-white/90 mb-4 max-w-2xl">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">
                        {collection.productCount} pieces
                      </span>
                      <Button className="btn-luxury">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">Can't Find What You're Looking For?</h2>
          <p className="body-elegant mb-8">
            Our personal styling team is here to help you discover the perfect pieces for your wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom">
              <Button className="btn-luxury">
                Personal Styling
              </Button>
            </Link>
            <Button variant="outline" className="btn-outline-luxury">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};