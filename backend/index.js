// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5000
// const User = require('./model/User')

// const cors = require('cors');
// const mongoDB= require('./db')
// mongoDB();

// app.use(cors({ origin: true, credentials: true }));
// app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Hello Wo!')
// })

// app.get('/:id', async(req, res) => {
//   let avg=0,n=0
//  let s=0.00;
//    try {
//     const user= await User.find({"name":req.params.id})

//     user.forEach((e)=>{
//           avg+=parseInt(e.rating);
//           n++;
//          })
//           s= avg/n;
//          s= s.toFixed(2)
//      res.json({"data":s,"data1":n})

//   //   user.forEach((e)=>{
           
//   //     console.log(e.rating)
//   //         })

//   //  res.json({id:req.params.id})
    
//     // const user= await User.find({})
//     //    user.forEach((e)=>{
//     //     avg+=parseInt(e.rating);
//     //     n++;
//     //    })
//     //     s= avg/n;
//     //    s= s.toFixed(2)
      
//     // res.json(s)
//    } catch (error) {
//     console.log(error)
//     res.json({success: false});
//    }
// })


// app.post('/star', async(req,res)=>{
        
//   try {
//     const user=  await User.create(req.body)
//     res.json(user)
//   } catch (error) {
//     console.log(error)
//     res.json({success: false});
//   }
   
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const app = express()
const port = 5000
const User = require('./model/User')
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');
app.set('view engine', 'ejs');

app.use(cookieSession({
	name: 'google-auth-session',
	keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
	

const cors = require('cors');
const mongoDB= require('./db')
mongoDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Hello Wo!')
// })

app.get('/', (req, res) => {
	res.render("<button><a href='/auth'>Login With Google</a></button>")
});

app.get('/auth' , passport.authenticate('google', { scope:
	[ 'email', 'profile' ]
}));

// Auth Callback
app.get( '/auth/callback',
	passport.authenticate( 'google', {
		successRedirect: '/auth/callback/success',
		failureRedirect: '/auth/callback/failure'
}));

// Success
app.get('/auth/callback/success' , (req , res) => {
  
	if(!req.user)
		res.redirect('/auth/callback/failure');
	// res.send(
  //   `<div style="display:flex;background:yellow; justify-content:center; align-items:center;height:100vh;flex-direction:column">
  //     <div style="font-family:verdana">
  //     <h1 > 
  //     Welcome ${req.user.displayName} </h1>
  //     </div>
  //     <div>
  //     <button style="font-family:verdana; background:black; color:black;border-radius: 12px;font-size: 18px"><a style="color:white" href='http://localhost:3000/home'>exlpore</a></button>;

  //     </div>
  //   </div>`)
    // res.sendFile(__dirname+'/index.html')
    if(!req.user)
res.redirect('/auth/callback/failure');
    res.render("index",{name:req.user.displayName})
});

// failure
app.get('/auth/callback/failure' , (req , res) => {
	res.send("Error");
})



app.get('/logout', function(req, res) {
  console.log("logged out!");
  req.logout();
  res.redirect('https://lucky-cheesecake-7d3711.netlify.app')
});

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
         res.json({"data":s,"data1" :n})

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
