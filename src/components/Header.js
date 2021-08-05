import react, { useState } from "react";
import { Grid, Typography, Button, Box, Input } from "@material-ui/core";

const Header = () => {
    return (
        <Box display="flex" justifyContent="space-between" flexDirection="row">
            <Typography variant="h3">Home</Typography>
        </Box>
    )
}

export default Header;