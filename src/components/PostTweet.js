import react, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Input,
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
} from "@fortawesome/free-solid-svg-icons";
import image from "../assets/profile-pic.jpeg";

const PostTweets = () => {
  return (
    <Box style={{}} flex='3'>
      <Box style={{ borderBottom: "1px solid grey" }} mb={2} py={2}>
        <Box style={{ display: "flex" }} pl={2}>
          <Typography variant='h5'>Home</Typography>
        </Box>
      </Box>
      <Box display='flex' flexDirection='row'>
        <Box mb={2}>
          <Box display='flex'>
            <Box mx={2}>
              <img
                src={image}
                style={{ height: "50px", borderRadius: "50%" }}
              />
            </Box>
          </Box>
        </Box>
        <Box display='flex' flexDirection="column">
          <Box display='flex'>
            <Input
              id='filled-basic'
              placeholder="What's Happening?"
              style={{ color: "#fff", width: "75%", fontSize: "22px" }}
            />
          </Box>
          <Box display='flex' alignItems="flex-start" mt={2}>
            <Box py={1} pr={3}>
              <FontAwesomeIcon
                icon={faImage}
                className='tweet-icons'
              ></FontAwesomeIcon>
            </Box>
            <Box py={1} pr={3}>
              <FontAwesomeIcon
                icon={faIcons}
                className='tweet-icons'
              ></FontAwesomeIcon>
            </Box>
            <Box py={1} pr={3}>
              <FontAwesomeIcon
                icon={faChartBar}
                className='tweet-icons'
              ></FontAwesomeIcon>
            </Box>
            <Box py={1} pr={3}>
              <FontAwesomeIcon
                icon={faSmile}
                className='tweet-icons'
              ></FontAwesomeIcon>
            </Box>
            <Box py={1} pr={3}>
              <FontAwesomeIcon
                icon={faCalendar}
                className='tweet-icons'
              ></FontAwesomeIcon>
            </Box>
            <Box>
            <Button className='tweet-twitter'>Tweet</Button>
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostTweets;
