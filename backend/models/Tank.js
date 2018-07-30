import mongoose from 'mongoose'

const Schema = mongoose.Schema

let test = new Schema({
    title: {
        type: String
    }
})

export default mongoose.model('Tank',test)