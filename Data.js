import cartImage1 from "./images/cart-item-1.png";
import cartImage2 from "./images/cart-item-2.png";
import cartImage3 from "./images/cart-item-3.png";
import cartImage4 from "./images/cart-item-4.png";
import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu5.jpg";
import menu4 from "./images/menu6.jpg";
import menu5 from "./images/menu4.webp";
import menu6 from "./images/menu3.png";
import re1 from "./images/pic-1.png";
import re2 from "./images/pic-2.png";
import re3 from "./images/pic-3.png";

const cart = [
    {img: cartImage1},{img: cartImage2},{img: cartImage3},{img: cartImage4}
];

const menu = [
    {id:1,img: menu1,price: 250.00,title:'Pasta',amount:1},
    {id:2,img: menu2,price: 180.00, title:'Dosa',amount:1},
    {id:3,img: menu3,price: 200.00, title:'Pastry',amount:1},
    {id:4,img: menu4,price: 150.00,title:'Dahi Poori',amount:1},
    {id:5,img: menu5,price: 200.00,title:'Biryani',amount:1},
    {id:6,img: menu6,price: 120.00,title:'expresso',amount:1}
]; 

const review = [
    {img: re1},{img: re2},{img: re3}
]
export {cart,menu , review};