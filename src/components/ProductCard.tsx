import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [isWished, setIsWished] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.sizes[0], // Default to first size
      color: product.colors[0], // Default to first color
      image: product.images[0]
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWished(!isWished);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group">
      <div className="product-card group">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image w-full h-full object-cover transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground">New</Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleWishlist}
          >
            <Heart 
              className={`h-4 w-4 ${isWished ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>

          {/* Quick Add Button */}
          <Button
            size="sm"
            className="absolute bottom-4 left-4 right-4 bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              
              {product.collection && (
                <p className="text-sm text-muted-foreground mt-1">
                  {product.collection}
                </p>
              )}
              
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-bold text-primary">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i < Math.floor(product.reviews.rating) 
                          ? 'text-primary' 
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews.count})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};