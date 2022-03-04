const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({

    name: String,
  
    rating: Number,
  
    review: String
  
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const apple = new Fruit ({

    name: "Apple",
  
    rating: 8,
  
    review: "an apple a day..."
  
  });
  const kiwi = new Fruit ({

    name: "Kiwi",
  
    rating: 8,
  
    review: "Sweet & sour"
  
  });
  const berry = new Fruit ({

    name: "Berry",
  
    rating: 8,
  
    review: "Not as good as raspberry"
  
  });

//   Fruit.insertMany([apple,kiwi,berry],function(err){

//     if (err) {
//       console.log(error);
//     }
//     else console.log("fruits are added to DB");
    
//     mongoose.connection.close();
// });

Fruit.find(function (err, fruits) {
  if (err){
      console.log(err);
  }
  else{
    mongoose.connection.close();
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }
});


