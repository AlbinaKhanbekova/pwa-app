import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as config from './config.json'

import { withStyles, Typography } from '@material-ui/core'

import NewsCard from './NewsCard'

const styles = theme => ({
  root: {
  },
  news: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: theme.spacing.unit,
    position: 'relative',   
    justifyContent: 'space-between', 
  }
})

class App extends Component {
  state = {
    data: [],
  }
  async componentDidMount() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=ru&' +
          `apiKey=${config.api}`;

    let response = await fetch(url);
  // only proceed once promise is resolved
    let data = await response.json();
    this.setState({ data: data.articles })
  }
  render() {
    const { classes } = this.props
    const { data } = this.state
    // if (data.)
    return (
      <div className={classes.root}>
        <Typography variant="h2">News</Typography>
        <div className={classes.news}>
          {data.map(news => (
            <NewsCard
              key={news.title}
              data={news}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
