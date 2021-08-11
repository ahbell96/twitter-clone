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
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  return (
    <Box display='flex' justifyContent='center' flex='3'>
      <Box
        display='flex'
        flexDirection='column'
        style={{ width: "350px", minHeight: "53px" }}
        justifyContent='center'
      >
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='flex-start'
          className='button-radius'
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
            <Input placeholder='Search Twitter' style={{ padding: "6px" }} />
          </form>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          style={{ borderRadius: "16px", backgroundColor: "blue" }}
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
                display='flex'
                style={{ cursor: "pointer" }}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  style={{ flex: 1, marginRight: "12px", fontWeight: "800" }}
                >
                  <Box display='flex' justifyContent='flex-end'>
                    {" "}
                    Football
                  </Box>
                  <Box
                    display='flex'
                    alignItems='center'
                    alignContent='center'
                    px={0.3}
                  >
                    .
                  </Box>
                  <Box> Trending</Box>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' px={1.7}>
                <Box display='flex' justifyContent='flex-end'>
                  <Typography style={{ fontWeight: "800" }}>Messi</Typography>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' px={1.7} pb={1.2}>
                <Box>Trending with Messi, Barca</Box>
              </Box>
            </Box>
            <Box>{/* Image here if applicable for news item */}</Box>
          </Box>
        </Box>

        <Box>
          <Box>Who to follow</Box>
          {/* Map for each person to follow ... */}
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
