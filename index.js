const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000;

app.use(express.json());
app.use(cors())

const data = [
    {
        "id": 1,
        "title": "Blank Bamboo Wicker",
        "originalPrice": "€350.00",
        "category": "Rocking chair",
        "discountedPrice": "€299.00",
        "discount": "30%",
        "description": "Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1682484703057-a197869384df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 2,
        "title": "Classic Rocking Chair",
        "originalPrice": "€400.00",
        "category": "Rocking chair",
        "discountedPrice": "€320.00",
        "discount": "20%",
        "description": "Classic design with a modern twist, perfect for relaxing indoors or outdoors.",
        "imageUrl": "https://images.unsplash.com/photo-1658510734512-eb49094ffa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 3,
        "title": "Rustic Lounge Chair",
        "originalPrice": "€550.00",
        "category": "Lounge chair",
        "discountedPrice": "€450.00",
        "discount": "15%",
        "description": "Beautiful rustic lounge chair perfect for cozy indoor spaces.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1661964304872-7b715cf38cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExvdW5nZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 4,
        "title": "Elegant Side Chair",
        "originalPrice": "€200.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "25%",
        "description": "Minimalistic side chair with a sleek design, ideal for office or dining rooms.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1676893375612-d9ecbbc64071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lkZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 5,
        "title": "Modern Lounge Chair",
        "originalPrice": "€600.00",
        "category": "Lounge chair",
        "discountedPrice": "€510.00",
        "discount": "15%",
        "description": "Modern lounge chair with sleek lines and comfort.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664110690525-1fe1da8375a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExvdW5nZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 6,
        "title": "Cozy Rocker",
        "originalPrice": "€300.00",
        "category": "Rocking chair",
        "discountedPrice": "€270.00",
        "discount": "10%",
        "description": "A cozy and comfortable rocking chair perfect for lazy afternoons.",
        "imageUrl": "https://images.unsplash.com/photo-1668380916481-e9a79580ed2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 7,
        "title": "Vintage Side Chair",
        "originalPrice": "€220.00",
        "category": "Side chair",
        "discountedPrice": "€180.00",
        "discount": "18%",
        "description": "Vintage design side chair with a blend of modern aesthetics.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1705169700491-c4eeea140f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lkZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 8,
        "title": "Contemporary Lounge Chair",
        "originalPrice": "€580.00",
        "category": "Lounge chair",
        "discountedPrice": "€520.00",
        "discount": "10%",
        "description": "Perfect for relaxing in a contemporary living space.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1685133855717-2a71a5d51d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 9,
        "title": "Ergonomic Side Chair",
        "originalPrice": "€260.00",
        "category": "Side chair",
        "discountedPrice": "€200.00",
        "discount": "23%",
        "description": "An ergonomic side chair designed for long sitting sessions.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1666990809668-1d3e257d8c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 10,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 11,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 12,
        "title": "Comfortable Side Chair",
        "originalPrice": "€180.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "16%",
        "description": "Side chair perfect for both office and home decor.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 13,
        "title": "Blank Bamboo Wicker",
        "originalPrice": "€350.00",
        "category": "Rocking chair",
        "discountedPrice": "€299.00",
        "discount": "30%",
        "description": "Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1682484703057-a197869384df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 14,
        "title": "Classic Rocking Chair",
        "originalPrice": "€400.00",
        "category": "Rocking chair",
        "discountedPrice": "€320.00",
        "discount": "20%",
        "description": "Classic design with a modern twist, perfect for relaxing indoors or outdoors.",
        "imageUrl": "https://images.unsplash.com/photo-1658510734512-eb49094ffa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 15,
        "title": "Rustic Lounge Chair",
        "originalPrice": "€550.00",
        "category": "Lounge chair",
        "discountedPrice": "€450.00",
        "discount": "15%",
        "description": "Beautiful rustic lounge chair perfect for cozy indoor spaces.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1661964304872-7b715cf38cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExvdW5nZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 16,
        "title": "Elegant Side Chair",
        "originalPrice": "€200.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "25%",
        "description": "Minimalistic side chair with a sleek design, ideal for office or dining rooms.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1676893375612-d9ecbbc64071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lkZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 17,
        "title": "Modern Lounge Chair",
        "originalPrice": "€600.00",
        "category": "Lounge chair",
        "discountedPrice": "€510.00",
        "discount": "15%",
        "description": "Modern lounge chair with sleek lines and comfort.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664110690525-1fe1da8375a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExvdW5nZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 18,
        "title": "Cozy Rocker",
        "originalPrice": "€300.00",
        "category": "Rocking chair",
        "discountedPrice": "€270.00",
        "discount": "10%",
        "description": "A cozy and comfortable rocking chair perfect for lazy afternoons.",
        "imageUrl": "https://images.unsplash.com/photo-1668380916481-e9a79580ed2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 19,
        "title": "Vintage Side Chair",
        "originalPrice": "€220.00",
        "category": "Side chair",
        "discountedPrice": "€180.00",
        "discount": "18%",
        "description": "Vintage design side chair with a blend of modern aesthetics.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1705169700491-c4eeea140f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lkZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 20,
        "title": "Contemporary Lounge Chair",
        "originalPrice": "€580.00",
        "category": "Lounge chair",
        "discountedPrice": "€520.00",
        "discount": "10%",
        "description": "Perfect for relaxing in a contemporary living space.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1685133855717-2a71a5d51d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 21,
        "title": "Ergonomic Side Chair",
        "originalPrice": "€260.00",
        "category": "Side chair",
        "discountedPrice": "€200.00",
        "discount": "23%",
        "description": "An ergonomic side chair designed for long sitting sessions.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1666990809668-1d3e257d8c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 22,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 23,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 24,
        "title": "Comfortable Side Chair",
        "originalPrice": "€180.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "16%",
        "description": "Side chair perfect for both office and home decor.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 25,
        "title": "Blank Bamboo Wicker",
        "originalPrice": "€350.00",
        "category": "Rocking chair",
        "discountedPrice": "€299.00",
        "discount": "30%",
        "description": "Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1682484703057-a197869384df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 26,
        "title": "Classic Rocking Chair",
        "originalPrice": "€400.00",
        "category": "Rocking chair",
        "discountedPrice": "€320.00",
        "discount": "20%",
        "description": "Classic design with a modern twist, perfect for relaxing indoors or outdoors.",
        "imageUrl": "https://images.unsplash.com/photo-1658510734512-eb49094ffa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 27,
        "title": "Rustic Lounge Chair",
        "originalPrice": "€550.00",
        "category": "Lounge chair",
        "discountedPrice": "€450.00",
        "discount": "15%",
        "description": "Beautiful rustic lounge chair perfect for cozy indoor spaces.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1661964304872-7b715cf38cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExvdW5nZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 28,
        "title": "Elegant Side Chair",
        "originalPrice": "€200.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "25%",
        "description": "Minimalistic side chair with a sleek design, ideal for office or dining rooms.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1676893375612-d9ecbbc64071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lkZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 29,
        "title": "Modern Lounge Chair",
        "originalPrice": "€600.00",
        "category": "Lounge chair",
        "discountedPrice": "€510.00",
        "discount": "15%",
        "description": "Modern lounge chair with sleek lines and comfort.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664110690525-1fe1da8375a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExvdW5nZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 30,
        "title": "Cozy Rocker",
        "originalPrice": "€300.00",
        "category": "Rocking chair",
        "discountedPrice": "€270.00",
        "discount": "10%",
        "description": "A cozy and comfortable rocking chair perfect for lazy afternoons.",
        "imageUrl": "https://images.unsplash.com/photo-1668380916481-e9a79580ed2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 31,
        "title": "Vintage Side Chair",
        "originalPrice": "€220.00",
        "category": "Side chair",
        "discountedPrice": "€180.00",
        "discount": "18%",
        "description": "Vintage design side chair with a blend of modern aesthetics.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1705169700491-c4eeea140f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2lkZSUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 32,
        "title": "Contemporary Lounge Chair",
        "originalPrice": "€580.00",
        "category": "Lounge chair",
        "discountedPrice": "€520.00",
        "discount": "10%",
        "description": "Perfect for relaxing in a contemporary living space.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1685133855717-2a71a5d51d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 33,
        "title": "Ergonomic Side Chair",
        "originalPrice": "€260.00",
        "category": "Side chair",
        "discountedPrice": "€200.00",
        "discount": "23%",
        "description": "An ergonomic side chair designed for long sitting sessions.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1666990809668-1d3e257d8c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 34,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 35,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 36,
        "title": "Comfortable Side Chair",
        "originalPrice": "€180.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "16%",
        "description": "Side chair perfect for both office and home decor.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 37,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 38,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 39,
        "title": "Comfortable Side Chair",
        "originalPrice": "€180.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "16%",
        "description": "Side chair perfect for both office and home decor.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 40,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 41,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 42,
        "title": "Comfortable Side Chair",
        "originalPrice": "€180.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "16%",
        "description": "Side chair perfect for both office and home decor.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 43,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 44,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 45,
        "title": "Comfortable Side Chair",
        "originalPrice": "€180.00",
        "category": "Side chair",
        "discountedPrice": "€150.00",
        "discount": "16%",
        "description": "Side chair perfect for both office and home decor.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1664391899883-59de759c56a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNpZGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "id": 46,
        "title": "Minimalist Rocking Chair",
        "originalPrice": "€320.00",
        "category": "Rocking chair",
        "discountedPrice": "€290.00",
        "discount": "9%",
        "description": "A minimalist rocking chair that combines comfort with simplicity.",
        "imageUrl": "https://images.unsplash.com/photo-1585072820698-fe6f41dba127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja2luZyUyMGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        "id": 47,
        "title": "Outdoor Lounge Chair",
        "originalPrice": "€400.00",
        "category": "Lounge chair",
        "discountedPrice": "€370.00",
        "discount": "8%",
        "description": "Durable lounge chair for outdoor settings.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1675970835714-61dff580cd6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG91bmdlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },

]


app.get('/chairs', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})