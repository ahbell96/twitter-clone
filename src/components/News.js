import react, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Input,
  TextField,
} from "@material-ui/core";

const News = () => {
  return (
    <Box container flex="3">
      <Box>
        <form>
          <Input placeholder="Search" />
        </form>
      </Box>
      <Box>
        <Box>What's Happening</Box>
        {/* Mapping of news data?? */}
        <Box>
          <Box>
            <Box>
              <Box>Football</Box>
              <Box>Trending</Box>
            </Box>
            <Box>
              <Typography>
                Messi is leaving FC Barcelona, according to a statement from the
                club
              </Typography>
            </Box>
            <Box>Trending with Messi, Barca</Box>
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
  );
};

export default News;
