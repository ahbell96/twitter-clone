import react, { Component } from "react";
import "./App.scss";
import { Grid, Typography, Button, Container, Box } from "@material-ui/core";
import SideNavBar from "./components/MenuSideNavBar";
import PostTweets from "./components/PostTweet";
import News from "./components/News";

// api for dummy data?
// https://dummyapi.io/

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Box className='App'>
        {/* Parent */}
        <Box display='flex' style={{ width: "990px", margin: "0 auto"}}>
          {/* Child */}
          <Box style={{flex: '0.25'}}>
            <SideNavBar />
          </Box>
          {/* Child */}
          <Box style={{flex: '0.4'}}>
            <PostTweets />
          </Box>
          {/* Child */}
          <Box style={{flex: '0.35'}}>
            <News />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default App;
