import  mongoose  from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage;

//schema gives db uniformity/structure so that we know how to later use functions to find one of the keys above. to edit, delete, update our db etc.