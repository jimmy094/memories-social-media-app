import React, { useEffect } from 'react'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import useStyles from './styles'

const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch])


    return (
        
        <Container maxwidth ="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI" alt="memories" height="460" />
            </AppBar>
            <Grow in>
              <Container>
                <Grid container justify="space-between" align-items="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                      <Posts />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                      <Form />
                  </Grid>

                </Grid>
              </Container>
            </Grow>
        </Container>
    )
}

export default App