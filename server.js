const express = require('express'); 
const app = express(); 
const bodyparser = require('body-parser'); 
const db = require('mongoose');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

db.connect('mongodb://127.0.0.1:27017/GFWeedShopDB', () => { 
    console.log('db is on');
});

app.use(express.static('pages')); 

//------------------------------------------------------------------



app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/pages/signin.html')
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/pages/signup.html')
});

app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/pages/menu.html')
});

//---------------------------------------------------------------------



let userChema = db.Schema({ 
    firstName: String,  
    lastName: String,  
    email: String,  
    password: String,   
   
});
const userList = db.model('user', userChema);

//-------------------------------------------------------------------------



app.post('/signup', (req, res) => { 
    let user = {  
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.userEmail, 
        password: req.body.Pass,
       
    };


    const addUserToDb = async (user) => { 
        await userList.insertMany(user);
    };

    addUserToDb(user);
    console.log('user has been added');
    res.sendFile(__dirname + '/pages/signin.html')

});

// ----------------------------------------------------------------



app.post('/signin', (req, res) => {
 const findUserFromDb = async () => {
     let resUser = await userList.findOne({email:req.body.email, password:req.body.password})
        if (resUser == null) {
            res.send('user not found')
        }
        else{
            res.send(resUser)
        }
    };

    findUserFromDb();
    res.sendFile(__dirname + '/pages/menu.html')

});

//-------------------------------------------------------------------







app.listen(3010, () => {
    console.log('server is on');
})