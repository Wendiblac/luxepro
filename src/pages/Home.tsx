import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import womenImage from '@/assets/women-collection.jpg';
import menImage from '@/assets/men-collection.jpg';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(4, 8);
  const newProducts = products.filter(p => p.isNew);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Discover Your Style</h2>
            <p className="body-elegant max-w-2xl mx-auto">
              Explore our curated collections designed for the modern individual who appreciates luxury and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Women's Collection */}
            <div className="relative group luxury-card overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img
                  src={womenImage}
                  alt="Women's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="font-playfair text-3xl font-semibold mb-3">
                    Women's Collection
                  </h3>
                  <p className="text-white/90 mb-6">
                    Elegant pieces that embody feminine sophistication and timeless style.
                  </p>
                  <Link to="/women">
                    <Button className="btn-luxury">
                      Shop Women
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Men's Collection */}
            <div className="relative group luxury-card overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img
                  src={menImage}
                  alt="Men's Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="font-playfair text-3xl font-semibold mb-3">
                    Men's Collection
                  </h3>
                  <p className="text-white/90 mb-6">
                    Refined menswear that speaks to the modern gentleman's discerning taste.
                  </p>
                  <Link to="/men">
                    <Button className="btn-luxury">
                      Shop Men
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Featured Pieces</h2>
            <p className="body-elegant max-w-2xl mx-auto">
              Handpicked selections that represent the pinnacle of luxury fashion and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collections">
              <Button size="lg" variant="outline" className="btn-outline-luxury">
                View All Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">New Arrivals</h2>
              <p className="body-elegant max-w-2xl mx-auto">
                The latest additions to our exclusive collection. Be among the first to own these exceptional pieces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/newin">
                <Button size="lg" className="btn-luxury">
                  Shop New In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">Experience Luxury Like Never Before</h2>
          <p className="body-elegant mb-8">
            Join our exclusive clientele and discover personalized service, 
            premium quality, and timeless elegance in every piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom">
              <Button size="lg" className="btn-luxury">
                Custom Tailoring
              </Button>
            </Link>
            <Link to="/collections">
              <Button size="lg" variant="outline" className="btn-outline-luxury">
                Explore Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};