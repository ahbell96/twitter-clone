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
      <Box className="App">
        {/* Parent */}
        <Box display="flex" style={{ width: "100%", margin: "0 auto" }}>
          {/* Child */}
          <Box style={{ flex: "0.25" }}>
            <SideNavBar />
          </Box>
          {/* Child */}
          <Box style={{flex: '0.42', border: "1px solid grey"}}>
            <PostTweets />
          </Box>
          {/* Child */}
          <Box style={{ flex: "0.33" }}>
            <News />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default App;
