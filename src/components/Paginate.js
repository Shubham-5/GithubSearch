import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";
const Paginate = ({ page, handleChange }) => {
  return (
    <>
      <Stack
        spacing={2}
        padding={5}
        justifyContent='center'
        alignItems='center'>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={10}
          page={page}
          variant='outlined'
          onChange={handleChange}
          shape='rounded'
        />
      </Stack>
    </>
  );
};

export default Paginate;
