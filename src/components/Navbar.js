import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = ({ setUsername, username, handleSubmit }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            GIT SEARCH
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              className='inp'
              type='text'
              placeholder='Search Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
