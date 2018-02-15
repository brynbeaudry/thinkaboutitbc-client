import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  root: {
    backgroundSize: 'contain'
  },
  card: {
    maxWidth: '100%',
    maxHeight: 'auto',
  },
  media: {
    width: '100%',
    height : '50rem',
    backgroundPosition : 'top',
    position : 'relative'
  },
  text : {
    color : 'white',
    textShadow: '2px 2px 8px #000000',
    marginLeft: '1rem'
  },
  subDiv : {
    position : 'absolute',
    bottom : 0
  }
})

const bannerStyle = {
  width: '100%',
  textAlign: 'center',
}

const subtexts = [
  'Rising cost of living',
  'Empowering our First Nations',
  'Preserving our natural resources',
  'Together, we can make it happen'
]

const ImageJumbotron = (props) => {
  const { classes, image } = props
  console.log(image)
  return (
    <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image='http://localhost:5000/static/images/bc3.jpg' title='Contemplative Reptile'>
            <Typography paragraph className={classes.text} type="display4" color='primary'>
              Think about IT
            </Typography>
            <div className={classes.subDiv}>
              {subtexts.map(x =>
                <Typography paragraph className={classes.text} type="display2" color="primary">
                  {x}
                </Typography>
              )}
            </div>
          </CardMedia>
        </Card>
      {/* <img style={bannerStyle} src='http://localhost:5000/static/images/bc3_1920.png' /> */}
    </Grid>
  )
}
ImageJumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
  image : PropTypes.string.isRequired
}
export default withStyles(styles)(ImageJumbotron)