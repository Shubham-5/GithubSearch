import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Repo = ({ description, name, language }) => {
  return (
    <>
      <CardContent>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' marginTop={{ xs: "2px", sm: "10px" }}>
          {description}
        </Typography>

        <Typography marginTop={{ xs: "2px", sm: "10px" }} size='small'>
          {language}
        </Typography>
      </CardContent>
    </>
  );
};

export default Repo;
