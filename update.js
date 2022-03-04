const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    review:String
})

const Fruit = mongoose.model("Fruit",fruitSchema);

Fruit.updateOne({_id:"6221ea3fb619dbb9ccff643f"},{name:"peach"},function(err,fruits){
    mongoose.connection.close()
    if(err){
        console.log(err);
    }
    else{
        console.log("attempt succesfull");
        console.log(fruits)
    }
})