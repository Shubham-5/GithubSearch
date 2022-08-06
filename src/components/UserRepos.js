import { Stack, Card, Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import Repo from "./Repo";

const UserRepos = ({ userRepos }) => {
  return (
    <>
      <Stack flexDirection={{ xs: "column", sm: "row" }} flexWrap='wrap'>
        {userRepos ? (
          userRepos.map((repo) => (
            <Box
              padding='20px'
              alignItems='center'
              justifyContent='center'
              width={{ xs: "100%", sm: "100%", md: "50%" }}>
              <Card variant='outlined'>
                <Repo {...repo} />
              </Card>
            </Box>
          ))
        ) : (
          <Skeleton />
        )}
      </Stack>
    </>
  );
};

export default UserRepos;
