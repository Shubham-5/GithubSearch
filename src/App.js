import React from "react";
import "./App.css";
import UserRepos from "./components/UserRepos";
import Paginate from "./components/Paginate";
import ProfileDetails from "./components/ProfileDetails";

import axios from "axios";
import Repositories from "./components/Skeleton/Repositories";
import Profile from "./components/Skeleton/Profile";
import Navbar from "./components/Navbar";
import { Box } from "@mui/system";

function App() {
  const [user, setUserData] = React.useState("");
  const [userRepos, setUserRepos] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [isLoading, setLoading] = React.useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  async function getUserInfo() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`
      );
      const user = await axios.get(`https://api.github.com/users/${username}`);

      setUserRepos(data);
      setUserData(user.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo();
  };

  React.useEffect(() => {
    if (username) {
      getUserInfo();
    }
  }, [page]);

  return (
    <>
      <Navbar
        setUsername={setUsername}
        username={username}
        handleSubmit={handleSubmit}
      />
      {username.length > 0 && (
        <>
          {isLoading ? <Profile /> : <ProfileDetails {...user} />}
          {isLoading ? (
            <Repositories />
          ) : (
            <>
              <UserRepos userRepos={userRepos} />
              <Paginate page={page} handleChange={handleChange} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
