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