const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors=require('cors');

const Restaurant = require("./model/Restaurants");
const Product = require("./model/Product");

const urlEncodedParser = bodyParser.urlencoded({ extended: true });
app.use(cors());
app.use(bodyParser.json(), urlEncodedParser);


mongoose
  .connect("mongodb://127.0.0.1:27017/zomato")
  .then((res) => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/restaurants", (req, res) => {

  const Restaurantdb = new Restaurant({
    name: req.body.name,
    city: req.body.city,
    image: req.body.image
  });

  Restaurantdb.save();
  res.send("Restaurant added.");
});


app.get("/restaurants",(req, res)=>{
Restaurant.find()
.populate("products")
.then((p)=>{
  // console.log(p)
  res.send(p)
}).catch(error=>console.log(error));
})


app.get("/products", (req, res)=>{
Product.find({})
.populate("restaurant")
.then((p)=>{
  // console.log(p)
  res.send(p)
}).catch(error=>console.log(error));
})


app.post("/restaurants/:id/products", (req, res) => {
  const restaurantsId = req.params.id;
  Restaurant.findById(restaurantsId).then((restaurantsData) => {
    if (!restaurantsData) {
      res.status(400).json({ err: "Restaurant not found." });
    }
    const newProducts = new Product({
      ...req.body,
      restaurant:restaurantsData._id
    });

    if(!restaurantsData.products){
        restaurantsData.products=[];
    }

    restaurantsData.products.push(newProducts);

    return Promise.all([newProducts.save(), restaurantsData.save()])
      .then(([product, restaurantData]) => {
        res.json(product);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});


// The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.
app.get('/restaurants/search',async(req,res)=>{

  const {q,item} =req.query;
  let listofRestro=[];



  const allRest=await Restaurant.find({
    $and: [
      { name: { $regex: `${item}`, $options: 'i' } },
      { city: { $regex: `${q}`, $options: 'i' } },
    ]
  })
  .populate('products')

  allRest.map((data)=>{
    listofRestro.push(data);
  })

  const rest=await Product.find({
    $and: [
      { name: { $regex: `${item}`, $options: 'i' } },
    ]
  })
  .populate('restaurant')
  
  rest.map((data)=>{
    listofRestro.push(data);
  })
  res.send(listofRestro);



  // await Restaurant.find({
  //   city: { $regex: `${q}`, $options: 'i' } 
  // })
  // .populate({
  //   path: 'products',
  //   match: { name: { $regex: `${item}`, $options: 'i' } } 
  // })
  // .then((data)=>{
  //   listofRestro=data;
  //   res.send(listofRestro)
  // })


  


  // const {q}=req.query;
  // Restaurant.find({
  //   city : {$regex :`${q}`,$options:"i"}}).populate("products").then((data)=>{
  //   console.log(data);
  //   res.send("working");
  // }).catch((error)=>{
  //   console.log(error);
  // })



  // normal code to check if q is equal to name or city then return 
  // const {q}=req.query;
  // Restaurant.find({

  //   $or:[{name : {$regex :`${q}`,$options:"i"}},
  //   {city : {$regex :`${q}`,$options:"i"}},
  // ]}).populate("products").then((data)=>{
  //   console.log(data);
  //   res.send(data);
  // }).catch((error)=>{
  //   console.log(error);
  // })


  // const { q, c } = req.query;
  // Restaurant.find({
  //   // Use the AND operator to match both name and city
  //   name: { $regex: `${q}`, $options: "i" },
  //   city: { $regex: `${c}`, $options: "i" }
  // }).populate("products").then((data) => {
  //   console.log(data);
  //   res.send(data);
  // }).catch((error) => {
  //   console.log(error);
  // });


  // const { q, c } = req.query;
  // Restaurant.populate("products").find({
  //   city: { $regex: `${c}`, $options: "i" },
  //   $or:[{name:{ $regex:`${q}`, $options:"i"}},
  //   {products: {
  //     $elemMatch: {
  //       name: { $regex: `${q}`, $options: "i" }
  //     }
  //   }}]
  // })
  
  // .then((data) => {
  //   console.log(data);
  //   res.send(data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });


})

// app.get('/products/search', (req,res)=>{
//   const {q}=req.query;
//   Product.find({
//     $or:[{name : {$regex :`${q}`,$options:"i"}},
//     {desc : {$regex :`${q}`,$options:"i"}}
//   ]})
//   .populate("restaurant")
//   .then((data)=>{
//     console.log(data);
//     res.send(data);
//   }).catch((error)=>{
//     console.log(error);
//   })
// })


app.get('/products/search',async (req, res) => {
  const { q,item } = req.query; // Get the search query from the URL query string

  // Find all products that match the search query
  let listofRestro =[];
  await Restaurant.find({
    $and: [
      { name: { $regex: `${item}`, $options: 'i' } },
      { city: { $regex: `${q}`, $options: 'i' } }, // Search for products by name
     // Search for products by description
    ]
  })
  .populate("products") // Populate the 'restaurant' field with related documents
  .then((data)=>{
    listofRestro=data;
    // res.send(listofRestro)
  })

  const neededList = listofRestro.reduce((ans,idx) => {
    const newns =  idx.products.filter((e) =>{
     return e.name === item
      })
    return [...ans,...newns]

  },[])
  console.log("------>>> ",neededList)
  // console.log('neededList ',neededList)
  res.json(neededList)
});




// --->>>>

app.get("/:city/allRestaurants", (req, res) => {
  const city =req.params.city;
  Restaurant.find({ city }).populate("products").then((restaurants)=>{
    res.send(restaurants);
  }).catch((error)=>{
    res.status(404).send("Not found")
  })
});

app.get("/restaurant/:id", async (req, res) => {
  const id = req.params.id;
  await Restaurant.findById(id)
    .then((restaurantData) => {
      console.log("Restaurant found.");
      res.send(restaurantData.products);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/restaurant/:id", (req, res) => {
  const id = req.params.id;
  Restaurant.deleteOne({ _id: id })
    .then((ress) => {
      console.log("Restauranted deleted..");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/product/:id", (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((data) => {
      // Restaurant.findById(data.restaurant).then((nextData) => {
      //   nextData.products = nextData.products.filter((item) => item !== id);
      //   // Restaurant.save();
      //   console.log("done..")
      // });
      console.log("this is id of restaurant -> ",data)
    })
    .catch((error) => {
      console.log(error);
    });

  // Product.deleteOne({ _id: id })
  //   .then((ress) => {
  //     console.log("Product deleted..");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});


app.get("/products", (req,res)=>{
  Product.find({}).then((data)=>{
    console.log(data)
    res.send(data);
  });
})


app.listen(2000, () => {
  console.log("Listen to port 2000...");
});

