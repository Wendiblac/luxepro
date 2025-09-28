export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    productId: string;
    name: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  shipping: {
    address: string;
    method: string;
    cost: number;
  };
}

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 1599,
    items: [
      {
        productId: '1',
        name: 'Luxury Silk Blazer',
        size: 'M',
        color: 'Black',
        quantity: 1,
        price: 1299,
        image: '/api/placeholder/150/200'
      }
    ],
    shipping: {
      address: '123 Fashion Ave, New York, NY 10001',
      method: 'Express Delivery',
      cost: 25
    }
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    total: 3524,
    items: [
      {
        productId: '4',
        name: 'Bespoke Wool Suit',
        size: '42',
        color: 'Navy',
        quantity: 1,
        price: 3499,
        image: '/api/placeholder/150/200'
      }
    ],
    shipping: {
      address: '456 Style St, Los Angeles, CA 90210',
      method: 'Standard Delivery',
      cost: 25
    }
  }
];

export interface Customer {
  id: string;
  name: string;
  email: string;
  orders: number;
  totalSpent: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

export const mockCustomers: Customer[] = [
  {
    id: 'CUST-001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    orders: 12,
    totalSpent: 15240,
    joinDate: '2023-06-15',
    status: 'active'
  },
  {
    id: 'CUST-002',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    orders: 8,
    totalSpent: 9850,
    joinDate: '2023-08-22',
    status: 'active'
  },
  {
    id: 'CUST-003',
    name: 'Emma Wilson',
    email: 'emma.wilson@email.com',
    orders: 15,
    totalSpent: 22100,
    joinDate: '2023-03-10',
    status: 'active'
  }
];