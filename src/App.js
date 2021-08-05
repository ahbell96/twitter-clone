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
        <Box display="flex">
          <Box>
            <SideNavBar />
          </Box>
          <Box style={{width: "990px", display: "flex", flexDirection: "row"}}>
            <Box>
              <PostTweets />
            </Box>
            <Box>
              <News />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default App;
