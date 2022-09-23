const Products = require("../../model/ProductModel");
const asynchandler = require("express-async-handler");

const CreateProducts = asynchandler(async (req, res) => {
  await Products.insertMany([
    {
      id: 1,
      description: "Samsung S21 black in color",
      price: 25000,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
    {
      id: 2,
      description: "Samsung M21 white in color",
      price: 23000,
      img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
    {
      id: 3,
      description: "Redmi 9 black in color",
      price: 35000,
      img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
      quantity: 0,
    },
    {
      id: 4,
      description: "Iphone 12 Best mobile ever",
      price: 190500,
      img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
      quantity: 0,
    },
    {
      id: 5,
      description: "Samsung S21 black in color",
      price: 25000,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
    {
      id: 6,
      description: "Redmi 9 black in color",
      price: 35000,
      img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
      quantity: 0,
    },
    {
      id: 7,
      description: "Samsung S21 black in color",
      price: 25000,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
    {
      id: 8,
      description: "Iphone 12 Best mobile ever",
      price: 190500,
      img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
      quantity: 0,
    },

    {
      id: 9,
      description: "Samsung S21 black in color",
      price: 25000,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
  ]);
  res.send("Your Products has been added successfully");
});
const GetProducts = asynchandler(async (req, res) => {
  const GetMyProducts = await Products.find();
  res.status(200).send(GetMyProducts);
});
module.exports = { CreateProducts, GetProducts };
