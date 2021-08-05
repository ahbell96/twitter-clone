import react, { useState } from "react";
import { Grid, Typography, Button, Box, Input, TextField } from "@material-ui/core";

const PostTweets = () => {
    return (
        <Box style={{}}>
            <Grid>
                <form>
                    <Input id="filled-basic" placeholder="What's Happening?" style={{color: "#fff", borderColor: "#fff"}}/>
                </form>
                <Grid>
                    <Grid>1</Grid>
                    <Grid>2</Grid>
                    <Grid>3</Grid>
                    <Grid>4</Grid>
                    <Grid>5</Grid>
                    <Button>Tweet</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PostTweets;