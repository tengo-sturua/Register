const mongoose = require('mongoose')


const connectDB = async () => {
    try{
      await mongoose.connect("mongodb+srv://123:123@firstproject.9nfys.mongodb.net/?retryWrites=true&w=majority&appName=firstproject")
      console.log("Database conected succsessfuly!!");
      
    }catch(error){
        console.log("Database is not connected ");
        
    }

    }



module.exports =  connectDB