const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema({
    name:String,
    rating: {
        type:Number,
        min:1,
        max:5
    },
    review:String
})

const Fruit = mongoose.model("Fruit",fruitSchema);

const apple = new Fruit({
    name:"Apple",
    rating:4,
    review:"good af"
})

Fruit.create(apple,function(err,fruit){
    mongoose.connection.close();
    if(err){
        console.log(err)
    }
    else{
        console.log("added successfully")
        console.log(fruit)
    }
})