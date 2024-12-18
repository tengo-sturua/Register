const User = require('../models/data'); // Import the User model

// Register a new user
const signUp = async (req, res) => {
    try {
        const newUser = await User.create(req.body); // Use the User model
        console.log(req.body);

        res.status(200).json(newUser);
        console.log(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Registration error', error: error.message });
    }
};

// User login
const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;        
        const user = await User.findOne({ username, password }); // Find user by username
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all users (for testing only)
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// const updateUser = async(req, res) => {
//     // Your code Here 
// }

// const createPostByUser = async(req, res) => {
//     // Your code here

//     // So create functionality (Another endpoint) where you can create new post with the fields
//     // post_id
//     // title
//     // description
//     // user_id (User who created post)
// }

// const getUserPosts = async(req, res) => {
//     // Fetch posts by user id
// }

// const updatePostById = async(req, res) => {
//     // Update post by id 
// }



module.exports = { getUsers, signUp, signIn };
