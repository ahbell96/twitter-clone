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
import { faSearch, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../components/SearchBar';
import image from "../assets/profile-pic.jpeg";

const News = () => {
  return (
    <Box display="flex" justifyContent="flex-start" flex="3">
      <Box
        display="flex"
        flexDirection="column"
        style={{
          width: "350px",
          minHeight: "53px",
          marginLeft: "1em",
          borderRadius: "16px",
        }}
        justifyContent="flex-start"
      >
        <SearchBar/>
        <Box
          display="flex"
          flexDirection="column"
          style={{ borderRadius: "16px", backgroundColor: "rgb(32, 35, 39)" }}
          mb={1.2}
        >
          <Box
            px={1.7}
            py={1.2}
            display="flex"
            style={{
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "1.25em",
              backgroundColor: "rgb(32, 35, 39)",
              borderRadius: "16px",
            }}
          >
            What's Happening
          </Box>
          {/* Mapping of news data?? */}
          <Box>
            <Box>
              <Box
                px={1.7}
                pt={1.2}
                display="flex"
                style={{ cursor: "pointer" }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ flex: 1, marginRight: "12px", fontWeight: "800" }}
                >
                  <Box display="flex" justifyContent="flex-end">
                    {" "}
                    Football
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    alignContent="center"
                    px={0.3}
                  >
                    .
                  </Box>
                  <Box> Trending</Box>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" px={1.7} pt={1.2}>
                <Box display="flex" justifyContent="flex-end">
                  <Typography style={{ fontWeight: "800" }}>Messi</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" px={1.7} pb={1.2}>
                <Box>Trending with Messi, Barca</Box>
              </Box>
            </Box>
            <Box>{/* Image here if applicable for news item */}</Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          mb={1.2}
          style={{ backgroundColor: "rgb(32, 35, 39)", borderRadius: "16px" }}
        >
          <Box
            px={1.7}
            py={1.2}
            display="flex"
            style={{
              fontWeight: "800",
              fontSize: "1.25em",
            }}
          >
            Who to follow
          </Box>
          {/* Map for each person to follow ... */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mx={1.2}
          >
            <Box display="flex" flexDirection="row">
              <Box display="flex" style={{ fontWeight: "800" }}>
                <Box
                  style={{
                    borderRadius: "9999px",
                    boxShadow: "rgb(0 0 0 / 2%) 0px 0px 2px inset",
                  }}
                  mr={1.2}
                >
                  <img
                    src={image}
                    style={{ borderRadius: "9999px", height: "48px" }}
                    alt="follow logo"
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box>
                  <Typography>Sencha</Typography>
                </Box>
                <Box>
                  <Typography>@Sencha</Typography>
                </Box>
              </Box>
            </Box>
            <Box p={0} m={0} display="flex" alignItems="center">
              <Button
                style={{
                  fontSize: "12px",
                  maxHeight: "32px",
                  backgroundColor: "rgba(255,255,255,1.00)",
                  borderRadius: "16px",
                  fontWeight: "800",
                }}
              >
                <Typography style={{ textTransform: "capitalize" }}>
                  Follow
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            style={{ borderRadius: "0 0 16px 16px" }}
          >
            <Box px={2} py={2}>
              Show more
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box display="flex" width="100%" flexDirection="row">
            <Typography
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              Terms of service
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
              px={0.4}
            >
              Privacy Policy
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              Cookie Policy
            </Typography>
          </Box>
          <Box display="flex" width="100%" flexDirection="row">
            <Typography
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              Ads info
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              More
            </Typography>
            <Typography
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              2021 Twitter, Inc
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
