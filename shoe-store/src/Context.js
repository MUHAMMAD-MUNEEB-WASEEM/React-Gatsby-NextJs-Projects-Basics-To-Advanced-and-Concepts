import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike React Infinity Run",
                "src":  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0bf33c0a-4551-4ea3-a2c7-dec261cbdf56/air-zoom-pegasus-37-running-shoe-qVSCSr.jpg",
                "description": "Men's Shoe",
                "content": "The Nike React Infinity Run Flyknit is designed to keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road. Colour Shown: True White/White/Pure Platinum/Metallic Silver",
                "price": 2375,
                "colors": [ "white", "platinum", "silver"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike React Miler",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03119662-2585-4658-bed3-1fa9a19196c2/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
                "description": "Men's Shoe",
                "content": "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel. Colour Shown: Black/Laser Crimson/Oil Green/White",
                "price": 1970,
                "colors": ["black", "crimson", "white"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Mercurial Vapor 13",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98403112-6391-4f29-80b8-0eb82264d98c/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
                "description": "Men's Shoe",
                "content": "Find your wings on the path less travelled. The Nike Mercurial Vapor 13 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction. Colour Shown: Barely Volt/Laser Blue/Poison Green/Black",
                "price": 2350,
                "colors": ["Barley volt", "white", "Green", "Laser"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Mercurial Superfly",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7bf18c90-ea09-4963-9ae4-cb4ae8f6fc1f/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
                "description": "Men's Shoe",
                "content": "The Nike Mercurial Superfly transcends time with its OG roots and details that have landed them in the sneakerhead hall of fame. Take flight in Max Air cushioning that delivers lightweight comfort and traffic-stopping style. Colour Shown: White/Midnight Navy/Bright Blue/University Red. Colour Shown: Orange/Crimson/Black/Royal Blue",
                "price": 2299,
                "colors": ["orange", "black", "crimson", "Royal Blue"],
                "count": 1
            },
            {
                "_id": "5",
                "title":  "Bridgport Advice",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/049ee600-6862-459b-ba89-883a5c59b0f2/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
                "description": "Men's Shoe",
                "content": "The Nike Bridgport Advice  delivers a consistent ride for your off-road runs. It's built for rocky trails, helping you stay focused on the path ahead. Tough traction mixes with a lightweight design so you can keep moving when tackling challenging terrain. Colour Shown: Medium Olive/Medium Khaki/Wolf Grey/Black",
                "price": 1032,
                "colors": ["Wolf Grey", "Olive" , "Black"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Beck",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e13dabf-e6c6-4430-aa51-1443d9eda9f9/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
                "description": "Men's Shoe",
                "content": "The legend lives on in the Nike Beck—a modern take on the iconic AF-1 with new details like fresh graphics on the tongue and heel. Crisp leather, brushed suede and exposed stitching on the upper add texture and depth while the new plush liner feels soft and comfortable. Its redesigned shape returns to OG roots, adding heritage style. Colour Shown: Black/White/Vast Grey/Black",
                "price": 1780,
                "colors": ["White", "black", "Grey", "Navy"],
                "count": 1
            },
            {
                "_id": "7",
                "title":  "Fester",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/edb94cfd-9472-45de-a932-80a73613f847/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-C8Z2Hj.jpg",
                "description": "Leather and synthetic",
                "content": "Look legendary in the Nike Fester. The silhouette is a stitch-for-stitch reconstruction of the original big Air icon, with the addition of breathable mesh and innovative traction that performs at the highest level of play. Colour Shown: White/Black/Metallic Silver/Dusty Cactus",
                "price": 1650,
                "colors": ["Dusty Cactus", "black", "White", "Blue"],
                "count": 1
            },
            {
                "_id": "8",
                "title":  "Pixel",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/air-zoom-superrep-hiit-class-shoe-x6Kv5r.jpg",
                "description": "Men's Shoe",
                "content": "Nothing as fly, nothing as comfortable, nothing as proven—the Nike Pixel stays true to its OG roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Celebrating the home and away kits of your favourite teams, the soft leather upper features a rub-away material that reveals a secondary colour through normal wear while Max Air cushioning adds comfort to your journey. Colour Shown: Sail/Midnight Navy/Gum Medium Brown/University Red",
                "price": 2550,
                "colors": ["Brown", "black", "Red", "Sail"],
                "count": 1
            },
            {
                "_id": "9",
                "title":  "Austin",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9550d971-9d16-4cb3-b593-4484a74dda11/air-max-verona-shoe-PHJTlW.jpg",
                "description": "Men's Shoe",
                "content": "The Nike Austin Men's Shoe boasts the same iconic style and outstanding cushioning that made the original a hit with runners when it debuted in 1995. Colour Shown: White/Black/Black",
                "price": 2940,
                "colors": ["White", "black", "Blue"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Club C Revenge Mens",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb115fcc-b2f5-4bb7-9723-5d1b8e93a475/blazer-mid-vintage-77-shoe-xr8s4P.jpg",
                "description": "Men's Shoe",
                "content": "The Nike Club C Revenge Men embodies '80s tennis at its best—laid-back and stylish. The smooth leather upper is combined with micro-branding for a relaxed look and feel, while the cushioned sockliner provides smooth comfort with every step. Colour Shown: White/Total Orange/Black",
                "price": 1250,
                "colors": ["orange", "black", "White"],
                "count": 1
            },
            {
                "_id": "11",
                "title":  "SK80-Low",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/452ba8fd-6244-4d1e-b946-eb4da108c8bf/react-vision-shoe-lPbm3g.jpg" ,
                "description": "Men's Shoe",
                "content": " Revolutionise your game. Inspired by a running shoe, the Nike SK80-Low Infinity Tour delivers unrivalled comfort and response. Thanks to a new, innovative traction pattern, you'll get the grip you need to maximise the power of your swing. Colour Shown: White/Pink Blast/Pink ",
                "price": 3200,
                "colors": ["white", "black", "Pink"],
                "count": 1
            },
            {
                "_id": "12",
                "title":  "Michael Feburary SK8-Hi",
                "src":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c530538-6cea-40d4-9e8c-b117776e68f2/nikecourt-air-zoom-vapor-hard-court-tennis-shoe-bkTvGWJw.jpg" ,
                "description": "Men's Shoe",
                "content": "The Jordan Air Cadence blends modern craftsmanship with overt brand heritage. Easy to get on and wear all day, it features a sporty, streamlined design that's light, breathable and supportive. Color shown: White/Green/Black",
                "price": 4400,
                "colors": ["Green", "black", "White", "Caramel"],
                "count": 1
            },
          

        ],
        
    }};