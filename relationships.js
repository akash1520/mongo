const mongoose = require('mongoose')
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

const kiwi = new Fruit({
    name:"kiwi",
    rating:3,
    review:"AKJSLDJAS"
})
// .save(function(err,res){
//     if(err)console.log(err)
//     else console.log(res);
// })

const personSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    profession:String,
    age:{
        type:Number,
        required:true
    },
    favouriteFruit:fruitSchema
})

const Person = mongoose.model('Person',personSchema);

// const akash = new Person({   ////adding new person
//     name:"akash",
//     profession:"it's complicated",
//     age:19,
//     favouriteFruit:pinapple

// }).save(function(err,res){
//     mongoose.connection.close();
//     if(err)console.log(err)
//     else console.log(res);
// })

Person.updateOne({name:"viz"},{favouriteFruit:kiwi},function(err,res){
    mongoose.connection.close()
    if(err)console.log(err)
    else console.log(res);
})


