const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const User = require('./model/User')

const cors = require('cors');
const mongoDB= require('./db')
mongoDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello Wo!')
})

app.get('/:id', async(req, res) => {
  let avg=0,n=0
 let s=0.00;
   try {
    const user= await User.find({"name":req.params.id})

    user.forEach((e)=>{
          avg+=parseInt(e.rating);
          n++;
         })
          s= avg/n;
         s= s.toFixed(2)
         res.json(s)

  //   user.forEach((e)=>{
           
  //     console.log(e.rating)
  //         })

  //  res.json({id:req.params.id})
    
    // const user= await User.find({})
    //    user.forEach((e)=>{
    //     avg+=parseInt(e.rating);
    //     n++;
    //    })
    //     s= avg/n;
    //    s= s.toFixed(2)
      
    // res.json(s)
   } catch (error) {
    console.log(error)
    res.json({success: false});
   }
})


app.post('/star', async(req,res)=>{
        
  try {
    const user=  await User.create(req.body)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.json({success: false});
  }
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
