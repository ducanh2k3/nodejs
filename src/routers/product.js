import express from "express";
import { createProduct, getProduct } from "../controller/product.js";
const router = express.Router();


// middle ware
router.use((req,res,next)=>{
    console.log(req.url);
    next();
})
router.get('/products',getProduct)

// get product by id
router.get('/products/:id',(req,res)=>{
  const id = req.params.id;
  const product = data.find(product => product.id == id);
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: 'Product not found'});
  }
})


// create product
router.post('/products',createProduct)

//update product
router.put('/products/:id',(req,res)=>{
  const id = req.params.id;
  const product = data.find(product => product.id == id);
  if(product){
    product.name = req.body.name;
    product.price = req.body.price;
    res.send(product);
  }else{
    res.status(404).send({message: 'Product not found'});
  }
})

//delete product
router.delete('/products/:id',(req,res)=>{
  const id = req.params.id;
  const product = data.find(product => product.id == id);
  if(product){
    const index = data.indexOf(product);
    data.splice(index,1);
    res.send(product);
  }else{
    res.status(404).send({message: 'Product not found'});
  }
})



// module.exports =router

export default router