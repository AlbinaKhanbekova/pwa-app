import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: '100%',
    // maxWidth: 345,
    margin: 5,
    [theme.breakpoints.up('sm')]: {
      width: '45%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '24%',
    },
  },
  media: {
    height: 140,
  },
});

const NewsCard = ({ classes, data }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={data.urlToImage}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography component="p">
          {data.content}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" href={data.url}>
        Open
      </Button>
    </CardActions>
  </Card>
)

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);