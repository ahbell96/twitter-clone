import react, { useState, useEffect } from "react";
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
import styleOverrides from "../components/styleOverrides";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

const PostTweetComponent = ({ tweets, loadMoreTweets }) => {
  useEffect(() => {
    if (tweets.length > 1) {
      setIsLoading(false);
    }
  }, [tweets]);

  const [isLoading, setIsLoading] = useState(true);

  const loader = () => {
    return (
      <div>is Loading ...</div>
    )
  }

  const tweetData = () => {
    return tweets.map((_, i) => {
      return (
        <Box
          style={{
            borderBottom: "1px solid rgb(47, 51, 54)",
            borderTop: "1px solid rgb(47, 51, 54)",
            transition: "opacity 0.3s ease-in-out 0s"
          }}
          key={i}
        >
          <Box display='flex' alignItems='flex-start' mx={2} mb={2}>
            <Box
              display='flex'
              justifyContent='flex-start'
              style={{ height: "100%" }}
              mt={2}
            >
              <Box display='flex' justifyContent='flex-start' mr={2}>
                <img
                  src={_.image}
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                />
              </Box>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Box display='flex' alignItems='center'>
                <Box mr={0.25}>
                  <h3>{_.owner.firstName + " " + _.owner.lastName}</h3>
                </Box>
                <Box mx={0.25}>
                  <p>{`@${_.owner.lastName}`}</p>
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
              <Box display='flex'>
                <Box display='flex'>
                  <Box display='flex'>
                    <span style={{ textAlign: "left" }}>{_.text}</span>
                  </Box>
                </Box>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-around'
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
    });
  };

  if (isLoading) {
    return loader;
  }

  return (
    <>
    {console.log(loadMoreTweets)}
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMoreTweets}
      hasMore={true}
      loader={loader}
    >
      {tweetData()}
    </InfiniteScroll>
    </>
  );
};

export default PostTweetComponent;
