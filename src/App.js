import react, { Component } from "react";
import "./App.scss";
import { Grid, Typography, Button, Container, Box } from "@material-ui/core";
import SideNavBar from "./containers/MenuSideNavBar";
import PostTweets from "./containers/PostTweet";
import News from "./containers/News";
import axios from 'axios';

// api for dummy data?
// https://dummyapi.io/

class App extends Component {
  state = {
    tweets: [
      {
      },
    ],
    isLoading: true
  };

  setIsLoading = () => {
    this.setState({isLoading: false});
  }

  render() {

    return (
      <Box className="App" style={{ backgroundColor: "rgb(0,0,0)" }}>
        {/* Parent */}
        <Box display="flex" style={{ width: "100%", margin: "0 auto" }}>
          {/* Child */}
          <Box style={{ flex: "0.360" }}>
            <SideNavBar />
          </Box>
          {/* Child */}
          <Box
            style={{
              flex: "0.28",
              borderLeft: "1px solid rgb(47, 51, 54)",
              borderRight: "1px solid rgb(47, 51, 54)",
              height: "100vh",
            }}
          >
            <PostTweets listOfTweets={this.state.tweets} />
          </Box>
          {/* Child */}
          <Box style={{ flex: "0.360", marginLeft: "1em" }}>
            <News />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default App;
