import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({email});
}

export const findUserByEmailAndPassword = async (email) => {
    return await User.findOne({email}).select("+password"); 
    //password was being sent form the BE, so we aaded "select: false" in user model, so here we are searching with and selecting password too
}

export const findUserById = async (id) => {
    return await User.findById(id);
}

export const createUser = async (name, email, password) => {
    const newUser = new User({name, email, password});
    await newUser.save();
    return newUser;
}