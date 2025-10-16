import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
        required: true,
        select: false
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

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.set('toJSON', {
    transform: function(doc, ret){
        delete ret.password;
        delete ret.__v;
        return ret;
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model("User", userSchema);
export default User;