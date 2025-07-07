import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String, required: true },
    email: {type: String, required: true},
    password : {type: String, required: true},
    age : {type : Number},
    gender: {type : String}
    
}, {
    timestamps: true
})

export const User = mongoose.model('users', userSchema)