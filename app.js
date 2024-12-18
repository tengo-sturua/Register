const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path')
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Replace with your frontend's URL
    optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

const connectDB = require('./config/db.config')
connectDB()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); 



const authRoutes = require('./routes/auth.route')

app.use('/api/auth', authRoutes)

app.listen(8080, () => {
    console.log("Server running on port 8080");
    
})