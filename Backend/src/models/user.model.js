import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        //add gravatar as default
        default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
    },   

    //we will not be doing this as user can create a lot of links and those links will be stored inside a document, and space is limited of a document (16 mb)
    // links: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "ShortUrl"
    //     }
    // ]
});

const User = mongoose.model("User", userSchema);
export default User;