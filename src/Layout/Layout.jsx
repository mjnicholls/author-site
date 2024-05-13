import React from "react";
import Box from "@mui/material/Box";
import Header from "../Header/Header";
import { Grid } from '@mui/material'
import Bottom from "../Bottom/Bottom";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >

      <Header />
      <Box>
      {children}
      </Box>
      <Bottom />
    </Box>
  );
};

export default Layout;
