import mongoose from 'mongoose'
import PostMessage from'../models/PostMessage.js'
//imported PostMessages model/schema to be able to write functions to use crud on db items.

// always use a try and catch for async functions, try is what to do if it works and catch ios what to do if there is an error.


export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find()

        console.log(postMessages)

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//controller functions sending info back to routes. Functions kept in controller file to keep route folder neat and organized.


//createPosts function will implement logic for creating a post, also use try and catch
export const createPosts = async (req, res) => {
    const post = req.body;

    // create a new post variable thats equal to new instance of PostMessage that will be passed a post aka -> the post the user created in the front end. 
    const newPost = new PostMessage(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

// id will come from request. reference the routes/posts router.patch where we have '/:id'
//_id will need to be checked to see if it is a valid mongoose object, will use line 45 to do so.
//call model PostMessage, call method 'findbyidandupdate' with the first paramter being _id which we get from req.body,
// second paramter is going to be the post and then {new:true} in ordser to see upddted value of that post
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body
    if(!mongoose.Types.ObjectId.isvalid(_id)) return res.status(404).send('No post with that id')

    const updatesPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost)
}
