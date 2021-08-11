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
import image from "../assets/profile-pic.jpeg";

const News = () => {
  return (
    <Box display="flex" justifyContent="center" flex="3">
      <Box
        display="flex"
        flexDirection="column"
        style={{ width: "350px", minHeight: "53px" }}
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          className="button-radius"
          pl={1.5}
          my={1.5}
          style={{
            backgroundColor: "red",
            fontWeight: "400",
            fontSize: "15" /* make searchbox sticky */,
          }}
        >
          <form>
            <FontAwesomeIcon icon={faSearch} style={{ minWidth: "32px" }} />
            <Input placeholder="Search Twitter" style={{ padding: "6px" }} />
          </form>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          style={{ borderRadius: "16px", backgroundColor: "blue" }}
          mb={1.2}
        >
          <Box
            px={1.7}
            py={1.2}
            style={{ cursor: "pointer", fontWeight: "800" }}
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
          style={{ backgroundColor: "green", borderRadius: "16px" }}
        >
          <Box px={1.7} py={1.2} style={{ fontWeight: "800" }}>
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
          <Box>
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <FontAwesomeIcon
                  icon={faAngleDoubleUp}
                  style={{ transform: "rotate(45deg)" }}
                />
                <Typography style={{ textTransform: "capitalize" }}>
                  Promoted
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>Icon</Box>
            <Box>
              <Box>
                <Typography>Header Data</Typography>
              </Box>
              <Box>
                <Typography>@Handle</Typography>
              </Box>
            </Box>
            <Box>
              <Button>Follow</Button>
            </Box>
          </Box>
          <Box>
            <Box>Icon</Box>
            <Box>
              <Box>
                <Typography>Header Data</Typography>
              </Box>
              <Box>
                <Typography>@Handle</Typography>
              </Box>
            </Box>
            <Box>
              <Button>Follow</Button>
            </Box>
          </Box>
          <Box>
            <Box>Show more</Box>
          </Box>
        </Box>

        <Box>
          <Box>
            <Box>Terms of service</Box>
            <Box>Privacy Policy</Box>
            <Box>Cookie Policy</Box>
          </Box>
          <Box>
            <Box>Ads info</Box>
            <Box>More</Box>
            <Box>2021 Twitter, Inc</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
