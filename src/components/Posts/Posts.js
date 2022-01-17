import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();


    //ternary operator below is to show spinning loading image before anything is posted. Basically saying if there is no posts.length return circularprogress and if there is show the grid.
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='strech' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}> 
                        <Post post={posts} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
                
            </Grid>
         )
    )
}

export default Posts
