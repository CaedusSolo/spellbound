import mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
})

module.exports = mongoose.model('User', UserSchema)