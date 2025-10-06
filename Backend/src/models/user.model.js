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
        default: function(){
            return getGravatarUrl(this.email);
        },
    },   

    //we will not be doing this as user can create a lot of links andthose links will be stored inside a document, and space is limited of a document (16 mb)
    // links: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "ShortUrl"
    //     }
    // ]
});

function getGravatarUrl(email){
    const hash = require('crypto').createHash('md5').update(email.trim().toLowerCase()).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

const User = mongoose.model("User", userSchema);
export default User;