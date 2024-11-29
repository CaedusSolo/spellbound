import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    id: String,
    house: String
})

const User = mongoose.model('User', userSchema)

export default User