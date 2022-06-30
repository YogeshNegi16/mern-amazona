import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Yogesh',
      email: 'yogesh@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Yogi',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 19,
      description: 'high quality product',
    },
    {
      //_id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 150,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 11,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 65,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 11,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 75,
      countInStock: 9,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 27,
      description: 'high quality product',
    },
  ],
};
export default data;
