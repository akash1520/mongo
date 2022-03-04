const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name me bohot kuchh rakha hain"]
    },
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

const watermelon = new Fruit({
    rating:4,
    review:"good af"
})

Fruit.create(watermelon,function(err,fruit){
    mongoose.connection.close();
    if(err){
        console.log(err)
    }
    else{
        console.log("added successfully")
        console.log(fruit)
    }
})