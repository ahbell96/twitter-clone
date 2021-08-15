import react, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Input,
  FormControl,
  TextField,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faChartBar,
  faSmile,
  faCalendar,
  faIcons,
  faComment,
  faRetweet,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import image from "../assets/profile-pic.jpeg";
import styleOverrides from "./styleOverrides";

const PostTweets = ({ listOfTweets }) => {
  const overrideMaterialStyles = styleOverrides();

  // save to state

  const tweetData = (e) => {
    // e.target.name = name of textfield
    const tempTweetName = e.target.name;

    // make copy of initial state
    const tempTweetForm = { ...tweetForm };

    // apply value to the tweet name
    tempTweetForm[tempTweetName] = e.target.value;

    // set state
    setTweetForm(tempTweetForm);
  };

  const onClickPostTweet = () => {
    // make copy of tweets
    const tempTweets = [...tweets];

    // make copy of current tweet from textfield
    const currentTweet = { ...tweetForm };

    // add to temp list
    tempTweets.push(currentTweet);

    // sort tweet list
    tempTweets.sort().reverse();

    // set temp list to state list
    setTweets(tempTweets);
  };

  const [tweetForm, setTweetForm] = useState({
    firstName: "test",
    lastName: "lastname test",
    twitterHandle: "@testTwitterHandle",
    tweet: "",
    likes: "5",
    retweets: "1",
    comments: "2",
  });
  const [tweets, setTweets] = useState(listOfTweets);

  return (
    <Box style={{}} flex="3">
      <Box style={{ borderBottom: "1px solid rgb(47, 51, 54)" }} mb={1} py={2}>
        <Box style={{ display: "flex" }} pl={2}>
          <Typography variant="h5" style={{ fontWeight: "800" }}>
            Home
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" mr={2} my={2}>
        <Box mb={2}>
          <Box display="flex" mb={2}>
            <Box mx={2}>
              <img
                alt="profile"
                src={image}
                style={{ height: "50px", borderRadius: "50%" }}
              />
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" style={{ width: "100%" }}>
          <form
            // action="POST"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Box display="flex">
              <TextField
                name="tweet"
                variant="standard"
                id="filled-basic"
                inputProps={{ className: overrideMaterialStyles.input }}
                placeholder="What's Happening?"
                style={{
                  width: "75%",
                  fontSize: "22px",
                  color: "white",
                }}
                onChange={tweetData}
              />
            </Box>
            <Box
              display="flex"
              alignItems="flex-start"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
            >
              <Box display="flex" flexDirection="row">
                <Box py={1} pr={3}>
                  <FontAwesomeIcon
                    icon={faImage}
                    className="tweet-icons"
                  ></FontAwesomeIcon>
                </Box>
                <Box py={1} pr={3}>
                  <FontAwesomeIcon
                    icon={faIcons}
                    className="tweet-icons"
                  ></FontAwesomeIcon>
                </Box>
                <Box py={1} pr={3}>
                  <FontAwesomeIcon
                    icon={faChartBar}
                    className="tweet-icons"
                  ></FontAwesomeIcon>
                </Box>
                <Box py={1} pr={3}>
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="tweet-icons"
                  ></FontAwesomeIcon>
                </Box>
                <Box py={1} pr={3}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="tweet-icons"
                  ></FontAwesomeIcon>
                </Box>
              </Box>
              <Box>
                <Button
                  value="tweet"
                  className="tweet-twitter"
                  style={{ paddingLeft: "1em", paddingRight: "1em" }}
                  onClick={(e) => onClickPostTweet(e)}
                >
                  <Typography
                    className="tweet-twitter"
                    style={{ textTransform: "capitalize" }}
                  >
                    Tweet
                  </Typography>
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      {/* Tweets List - */}
      {tweets.map((_) => {
        return (
          <Box
            style={{
              borderBottom: "1px solid rgb(47, 51, 54)",
              borderTop: "1px solid rgb(47, 51, 54)",
            }}
          >
            <Box display="flex" alignItems="flex-start" mx={2} mb={2}>
              <Box
                display="flex"
                justifyContent="flex-start"
                style={{ height: "100%" }}
                mt={2}
              >
                <Box display="flex" justifyContent="flex-start" mr={2}>
                  <img
                    src={image}
                    style={{ height: "50px", borderRadius: "50%" }}
                  />
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Box display="flex" alignItems="center">
                  <Box mr={0.25}>
                    <h>{_.firstName + " " + _.lastName}</h>
                  </Box>
                  <Box mx={0.25}>
                    <p>{_.twitterHandle}</p>
                  </Box>
                  <Box mx={0.25}>
                    <span>.</span>
                  </Box>
                  <Box mx={0.25}>
                    <a>
                      <time>59s</time>
                    </a>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box display="flex">
                    <Box display="flex">
                      <span style={{ textAlign: "left" }}>{_.tweet}</span>
                    </Box>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                  mt={2}
                >
                  <Box>
                    <Box>
                      <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    </Box>
                    <Box>{_.comments}</Box>
                  </Box>
                  <Box>
                    <Box>
                      <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                    </Box>
                    <Box>{_.retweets}</Box>
                  </Box>
                  <Box>
                    <Box>
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Box>
                    <Box>{_.likes}</Box>
                  </Box>
                  <Box>
                    <Box>
                      <FontAwesomeIcon icon={faShareSquare}></FontAwesomeIcon>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        );
        {
          /* - Tweets List */
        }
      })}
    </Box>
  );
};

export default PostTweets;
