import { describe } from "node:test";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from "react-icons/fa";

export const Categories = [
  {
    img: "  https://images.unsplash.com/photo-1584940120743-8981ca35b012?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Casual Wear",
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGZvcm1hbCUyMHdlYXJ8ZW58MHx8fHwxNjAxMzIxODUy&ixlib=rb-1.2.1&q=80&w=400",
    type: "Formal Wear",
  },
  {
    img: "https://images.unsplash.com/photo-1534126511673-b6899657816a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG5pZ2h0JTIwd2VhcnxlbnwwfHx8fDE2MDEzMjE4NTI&ixlib=rb-1.2.1&q=80&w=400",
    type: "Night Wear",
  },
  {
    img: "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Sportswear",
  },
  {
    img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHN0cmVldHdlYXJ8ZW58MHx8fHwxNjAxMzIxODUy&ixlib=rb-1.2.1&q=80&w=400",
    type: "Streetwear",
  }
];


export const bestSellerItems = [
  {
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
    title: "Beoplay M5 Bluetooth Speaker",
    price: "$99.00",
    labels: ["New"],
  },
  {
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
    title: "Wireless Noise Cancelling Headphones",
    price: "$120.00",
    labels: ["New"],
  },
  {
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
    title: "Smart Home Speaker",
    price: "$150.00",
    labels: ["Sale"],
  },
  {
    img: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
    title: "Portable Bluetooth Speaker",
    price: "$75.00",
    labels: [],
  },
  {
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wireless Earbuds",
    price: "$50.00",
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Noise Cancelling Earphones",
    price: "$89.00",
    labels: [],
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Smart Watch",
    price: "$150.00",
    labels: ["New"],
  },
  {
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fitness Tracker",
    price: "$60.00",
    labels: ["Sale"],
  },
];

export const testmonial = [
  {
    img: "https://images.unsplash.com/photo-1534126511673-b6899657816a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG5pZ2h0JTIwd2VhcnxlbnwwfHx8fDE2MDEzMjE4NTI&ixlib=rb-1.2.1&q=80&w=400",
    name: "John Doe",
    designation: "CEO",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    img: "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Doe",
    designation: "CTO",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHN0cmVldHdlYXJ8ZW58MHx8fHwxNjAxMzIxODUy&ixlib=rb-1.2.1&q=80&w=400",
    name: "Alice",
    designation: "CEO",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    ,
  }
]

export const socialpost = [
  {
    img: "https://images.unsplash.com/photo-1534126511673-b6899657816a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG5pZ2h0JTIwd2VhcnxlbnwwfHx8fDE2MDEzMjE4NTI&ixlib=rb-1.2.1&q=80&w=400",
    icon: FaFacebook,
    url: "https://www.facebook.com/",
  },
  {
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhY2V8ZW58MHx8fHwxNjAyMzE1MTQw&ixlib=rb-1.2.1&q=80&w=400",
    icon: FaInstagram,
    url: "https://www.instagram.com/",
  },
  {
    img: "https://images.unsplash.com/photo-1581391528803-54be77ce23e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaTwitter,
    url: "https://x.com/",
  },
  {
    img: "https://images.unsplash.com/photo-1669475535925-a011d7c31d45?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: FaLinkedin,
    url: "https://linkedin.com/",
  },
];

export const features = [
  {
    icon: FaShippingFast,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50"
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Round the clock customer service"
  },
  {
    icon: FaShieldAlt,
    title: "Secure Payment",
    description: "100% secure payment methods"
  },
  {
    icon: FaUndo,
    title: "Easy Returns",
    description: "30-day return policy"
  }
];

export const sampleProducts = [
  {
    id: 1,
    name: "Iphone 6S",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 400,
    quantity: 1,
    size: "M"

  },
  {
    id: 2,
    name: "Xiaomi Mi 20000mAh",
    brand: "Xiaomi",
    imageUrl: "https://images.unsplash.com/photo-1517765371796-5bd3a7d30a29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40,
    quantity: 1,
    size: "M"
  },
  {
    id: 3,
    name: "Airpods",
    brand: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1525825691042-e14d9042fc70?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 150,
    quantity: 1,
    size: "M"

  },
];


export const orders = [
  {
    id: "INV001",
    product: "Wireless Mouse",
    email: "john.doe@example.com",
    amount: 25.99,
    status: "Delivered",
    date: "2025-05-01",
  },
  {
    id: "INV002",
    product: "Bluetooth Speaker",
    email: "jane.smith@example.com",
    amount: 49.99,
    status: "Pending",
    date: "2025-05-02",
  },
  {
    id: "INV003",
    product: "Smartwatch",
    email: "michael.lee@example.com",
    amount: 149.0,
    status: "Cancelled",
    date: "2025-04-30",
  },
  {
    id: "INV004",
    product: "Gaming Keyboard",
    email: "sarah.connor@example.com",
    amount: 89.95,
    status: "Delivered",
    date: "2025-05-03",
  },
  {
    id: "INV005",
    product: "LED Monitor",
    email: "tony.stark@example.com",
    amount: 299.99,
    status: "Pending",
    date: "2025-04-29",
  },
  {
    id: "INV006",
    product: "USB-C Docking Station",
    email: "bruce.wayne@example.com",
    amount: 79.0,
    status: "Delivered",
    date: "2025-05-04",
  },
];

export const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 109 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 456 },
  { month: "August", desktop: 235 },
  { month: "September", desktop: 202 },
  { month: "October", desktop: 125 },
  { month: "November", desktop: 368 },
  { month: "December", desktop: 198 },
]

export const year = new Date().getFullYear();
