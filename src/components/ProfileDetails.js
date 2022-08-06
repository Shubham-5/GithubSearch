import { Avatar, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const ProfileDetails = ({
  name,
  avatar_url,
  bio,
  twitter_username,
  location,
  html_url,
}) => {
  return (
    <>
      <Stack
        justifyContent={{ xs: "center", sm: "start" }}
        alignItems={{ xs: "center" }}
        flexDirection={{ sm: "row" }}
        padding='40px'>
        <Box>
          <Container className='avatar'>
            <Avatar
              alt={name}
              src={avatar_url}
              sx={{
                width: 150,
                height: 150,
                display: "flex",
                alignItems: "center",
              }}
            />
          </Container>
          <Typography
            textAlign='center'
            sx={{ fontSize: 14 }}
            color='text.secondary'
            marginTop='10px'>
            {html_url}
          </Typography>
        </Box>
        <Box
          marginTop={{ xs: "5px", sm: "0" }}
          textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant='h5' component='div' guttorbottom='true'>
            {name}
          </Typography>
          <Typography
            variant='body2'
            component='div'
            guttorbottom='true'
            marginTop={{ xs: "2px", sm: "10px" }}>
            {bio}
          </Typography>
          <Typography
            variant='body2'
            component='div'
            guttorbottom='true'
            marginTop={{ xs: "2px", sm: "10px" }}>
            {location}
          </Typography>
          <Typography
            variant='body2'
            component='div'
            guttorbottom='true'
            marginTop={{ xs: "2px", sm: "10px" }}>
            {twitter_username && twitter_username}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default ProfileDetails;
