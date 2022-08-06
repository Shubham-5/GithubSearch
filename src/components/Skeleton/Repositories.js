import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
const Repositories = () => {
  return (
    <Box padding='40px'>
      <Skeleton
        sx={{ height: 190, marginBottom: 2 }}
        animation='wave'
        variant='rectangular'
      />
      <Skeleton
        sx={{ height: 190, marginBottom: 2 }}
        animation='wave'
        variant='rectangular'
      />
      <Skeleton sx={{ height: 190 }} animation='wave' variant='rectangular' />
    </Box>
  );
};

export default Repositories;
