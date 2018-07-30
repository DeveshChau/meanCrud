import mongoose from 'mongoose'

const Schema = mongoose.Schema

let issues = new Schema({
    title: {
        type: String
    },
    responsible:{
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'open'
    }
})

export default mongoose.model('Issues',issues)
