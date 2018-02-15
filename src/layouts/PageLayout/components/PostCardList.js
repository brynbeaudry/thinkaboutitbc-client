import React from 'react'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import PostCard from './PostCard'
import { connect } from 'react-redux'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 'auto',
    width: 'auto',
    padding : '2em',
    margin : '0 auto',
    textAlign : ''
  },
})

const PostCardList = (props) => {
  return (
    <Grid item xs={12} sm={10} md={10} lg={8} xl={6}>
      <Grid container style={styles.root} justify='center' spacing={0}>
        {[0, 1, 2, 3].map(value => (
          <Grid key={value} item xs={11}>
            {/* IN container 1 */}
            <PostCard></PostCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = {
  loginWithEmail
}


const mapStateToProps = (state) => ({
})

PostCardList.propTypes = {
  // children: PropTypes.node,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCardList)
