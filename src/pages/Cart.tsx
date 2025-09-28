import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

export const Cart: React.FC = () => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h2 className="section-title mb-4">Your cart is empty</h2>
          <p className="body-elegant mb-8">
            Discover our exclusive collections and add luxury pieces to your cart.
          </p>
          <Link to="/">
            <Button className="btn-luxury">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shippingCost = total > 500 ? 0 : 25;
  const tax = total * 0.08;
  const finalTotal = total + shippingCost + tax;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="luxury-card p-6"
                >
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <div className="text-sm text-muted-foreground mb-4 space-y-1">
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-bold text-lg text-primary">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id, item.size, item.color)}
                            className="h-8 w-8 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              
              <Link to="/">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="luxury-card p-6 sticky top-24">
              <h3 className="font-semibold text-xl mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? 'text-green-600' : ''}>
                    {shippingCost === 0 ? 'Free' : `$${shippingCost}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {total < 500 && (
                  <div className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">
                    Add ${(500 - total).toLocaleString()} more for free shipping
                  </div>
                )}
                
                <hr className="border-border" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button className="btn-luxury w-full mt-6" size="lg">
                Proceed to Checkout
              </Button>

              <div className="mt-6 text-sm text-muted-foreground space-y-2">
                <p>• Free returns within 30 days</p>
                <p>• Complimentary gift wrapping</p>
                <p>• Secure payment processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};