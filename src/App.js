import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as config from './config.json'

import { withStyles, Typography, LinearProgress, Paper } from '@material-ui/core'

import NewsCard from './NewsCard'

const styles = theme => ({
  root: {
    padding: 10,
  },
  news: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: theme.spacing.unit,
    position: 'relative',
  }
})

class App extends Component {
  state = {
    data: [],
    isLoading: true,
  }
  async componentDidMount() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=ru&' +
          `apiKey=${config.api}`;

    let response = await fetch(url);
  // only proceed once promise is resolved
    let data = await response.json();
    this.setState({ data: data.articles, isLoading: false, })
  }
  render() {
    const { classes } = this.props
    const { data, isLoading } = this.state

    return (
      <Paper className={classes.root}>
        <Typography variant="h1" color="primary">News</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <button className="js-push-btn">Subscribe</button>
        {isLoading && (
          <LinearProgress />
        )}
        {!isLoading && (
          <div className={classes.news}>
            {data.map(news => (
              <NewsCard
                key={news.title}
                data={news}
              />
            ))}
          </div>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
