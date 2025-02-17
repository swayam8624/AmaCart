import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const userExists = await User.findOne({ email }); 
        if(userExists) {
            return res.status(400).json({
                error: "Email is taken"
            });
        }
        const user = await User.create({ name, email, password });
    
        res.status(201).json({
            user, 
            message: "Signup success! Please signin"
        });
    }
    catch(err) {
        return res.status(500).json({
            error: "Something went wrong"
        });
    }
}

export const login = async (req, res) => {
    res.send("login Route called");
}

export const logout = async (req, res) => {
    res.send("logout Route called");
}