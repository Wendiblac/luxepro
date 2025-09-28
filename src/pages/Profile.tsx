import React from 'react';
import { User, Package, Heart, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockOrders } from '@/data/orders';

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('profile');

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="section-title mb-4">My Account</h1>
          <p className="body-elegant">
            Manage your profile, orders, and preferences.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="measurements" className="flex items-center gap-2">
              <Ruler className="h-4 w-4" />
              Measurements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            <div className="luxury-card p-8">
              <h2 className="font-semibold text-xl mb-6">Account Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
              </div>

              <Button className="btn-luxury mt-6">
                Save Changes
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            {mockOrders.map((order) => (
              <div key={order.id} className="luxury-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Order {order.id}</h3>
                    <p className="text-muted-foreground">Placed on {order.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>

                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                        </p>
                        <p className="font-semibold text-primary">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total: ${order.total.toLocaleString()}</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <div className="luxury-card p-8 text-center">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Your Wishlist is Empty</h3>
              <p className="text-muted-foreground mb-6">
                Save items you love to your wishlist for easy shopping later.
              </p>
              <Button className="btn-luxury">
                Continue Shopping
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="measurements" className="space-y-6">
            <div className="luxury-card p-8">
              <h2 className="font-semibold text-xl mb-6">Saved Measurements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Chest</label>
                  <input
                    type="text"
                    placeholder="42 inches"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Waist</label>
                  <input
                    type="text"
                    placeholder="34 inches"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Hip</label>
                  <input
                    type="text"
                    placeholder="38 inches"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Shoulder</label>
                  <input
                    type="text"
                    placeholder="18 inches"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Sleeve Length</label>
                  <input
                    type="text"
                    placeholder="25 inches"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Inseam</label>
                  <input
                    type="text"
                    placeholder="32 inches"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
              </div>

              <Button className="btn-luxury mt-6">
                Save Measurements
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};