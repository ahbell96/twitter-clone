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
            }}
          >
            <PostTweets />
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
