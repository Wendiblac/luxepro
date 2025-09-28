import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export const NewIn: React.FC = () => {
  const newProducts = products.filter(p => p.isNew);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-headline text-secondary-foreground mb-6">
            New Arrivals
          </h1>
          <p className="body-elegant max-w-2xl mx-auto">
            Be among the first to discover our latest luxury pieces, crafted with exceptional attention to detail.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {newProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="font-semibold text-xl mb-4">No new arrivals at the moment</h3>
              <p className="text-muted-foreground">
                Check back soon for our latest luxury pieces.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};