import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
const Profile = () => {
  return (
    <Box
      justifyContent='center'
      alignItems='center'
      padding='40px'
      sx={{ width: "100%", height: "100%" }}>
      <Skeleton
        animation='wave'
        variant='circular'
        width={100}
        height={100}
        sx={{ marginBottom: 5 }}
      />

      <Skeleton
        animation='wave'
        height={10}
        width='80%'
        style={{ marginBottom: 6 }}
      />
      <Skeleton animation='wave' height={10} width='40%' />
    </Box>
  );
};

export default Profile;
