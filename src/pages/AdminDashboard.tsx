import React from 'react';
import { Package, Users, ShoppingCart, TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { mockOrders, mockCustomers } from '@/data/orders';

export const AdminDashboard: React.FC = () => {
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);
  const totalCustomers = mockCustomers.length;
  const totalProducts = products.length;
  const totalOrders = mockOrders.length;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="section-title mb-4">Admin Dashboard</h1>
          <p className="body-elegant">
            Manage your luxury fashion store from this comprehensive admin panel.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="luxury-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-primary">
                  ${totalRevenue.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="luxury-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold text-primary">{totalOrders}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="luxury-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold text-primary">{totalCustomers}</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="luxury-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold text-primary">{totalProducts}</p>
              </div>
              <Package className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="discounts">Discounts</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="luxury-card">
              <div className="p-6 border-b border-border">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-xl">Products</h2>
                  <Button className="btn-luxury">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-medium">Product</th>
                      <th className="text-left p-4 font-medium">Category</th>
                      <th className="text-left p-4 font-medium">Price</th>
                      <th className="text-left p-4 font-medium">Stock</th>
                      <th className="text-left p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(0, 5).map((product) => (
                      <tr key={product.id} className="border-b border-border">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-muted-foreground">{product.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 capitalize">{product.category}</td>
                        <td className="p-4 font-medium">${product.price.toLocaleString()}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.inStock 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <div className="luxury-card">
              <div className="p-6 border-b border-border">
                <h2 className="font-semibold text-xl">Recent Orders</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-medium">Order ID</th>
                      <th className="text-left p-4 font-medium">Date</th>
                      <th className="text-left p-4 font-medium">Customer</th>
                      <th className="text-left p-4 font-medium">Total</th>
                      <th className="text-left p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-b border-border">
                        <td className="p-4 font-medium">{order.id}</td>
                        <td className="p-4">{order.date}</td>
                        <td className="p-4">{order.shipping.address.split(',')[0]}</td>
                        <td className="p-4 font-medium">${order.total.toLocaleString()}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customers">
            <div className="luxury-card">
              <div className="p-6 border-b border-border">
                <h2 className="font-semibold text-xl">Customers</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-medium">Customer</th>
                      <th className="text-left p-4 font-medium">Email</th>
                      <th className="text-left p-4 font-medium">Orders</th>
                      <th className="text-left p-4 font-medium">Total Spent</th>
                      <th className="text-left p-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockCustomers.map((customer) => (
                      <tr key={customer.id} className="border-b border-border">
                        <td className="p-4 font-medium">{customer.name}</td>
                        <td className="p-4">{customer.email}</td>
                        <td className="p-4">{customer.orders}</td>
                        <td className="p-4 font-medium">${customer.totalSpent.toLocaleString()}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            customer.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="discounts">
            <div className="luxury-card p-8 text-center">
              <h3 className="font-semibold text-lg mb-4">Discount Management</h3>
              <p className="text-muted-foreground mb-6">
                Create and manage discount codes and promotional offers.
              </p>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Create Discount
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="collections">
            <div className="luxury-card p-8 text-center">
              <h3 className="font-semibold text-lg mb-4">Collection Management</h3>
              <p className="text-muted-foreground mb-6">
                Organize products into curated collections for better discovery.
              </p>
              <Button className="btn-luxury">
                <Plus className="h-4 w-4 mr-2" />
                Create Collection
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};