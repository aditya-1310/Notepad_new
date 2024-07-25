const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt,async function(err, hash) {
        const newUser = await User.create({
          username,
          email,
          password: hash,
        });
          
      });
  });
    let token = jwt.sign({ email: email }, "aditya");
    res.cookie('token', token );
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'api/register area catch' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
    let user = await User.findOne({ email:req.body.email });

    if (!user) {
      // return res.status(401).json({ message: "Username or password is wrong" });
      res.send("Username or password is wrong")
      console.log("Username or password is wrong");
    }

   bcrypt.compare(password, user.password,(err,result)=>{
    if(result){
      let token = jwt.sign({email:email},"aditya");
      res.cookie("token",token);
      res.send("Login successful");

    }
    else{
      res.send("Username or password is wrong")
      console.log("Username or password is wrong");
    }
  });
});

app.post('/api/logout', (req, res) => {
  res.cookie('token', '');
  res.status(200).json({ message: 'Logout successful' });
});

app.get('/', (req, res) => {
  res.send("Welcome");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

