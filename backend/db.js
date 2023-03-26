const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoUri = 'mongodb+srv://divyansh:1234@cluster0.ttgzj0r.mongodb.net/mernyoutube?retryWrites=true&w=majority';
const mongoDB = async() =>{
    await mongoose.connect(mongoUri,{useNewUrlParser: true},async(err,result)=>{
        if(err){
            console.log("---",err)

        }
        else{
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("mernstack");
           
        }
    

    })
}

module.exports = mongoDB;