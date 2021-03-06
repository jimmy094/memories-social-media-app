import React, { useState } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '', 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: '', 
    })

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }

    const clear = () => {

    }
    //...postData will persist all the data already inside of state obj and only change the specified
    //key/value which in this case is the "creator" keys value.

    //div with base64 used for "choose file" section on form which contains an onDone property which uses the spread operator for postData to persist everything and only update the "selected file" value to "base64"
    
    return (
        <Paper className={classes.paper}>

            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography variant="h6">Creating a Memory</Typography>

                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="Tags (comma seperated)" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} />

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>


            </form>
        </Paper>
    )
}

export default Form

                




