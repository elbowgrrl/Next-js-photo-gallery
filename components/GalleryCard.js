import styles from "../styles/Article.module.css";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

//Use MUI cards

//makeStylesHook for custom styling

export default function GalleryCard(props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={props.img}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" >Share</Button>
        <Button size="small" variant="outlined">Learn More</Button> */}
        <Button size="small" variant="contained" href={`/view/${props.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}

//Button accepts onClick handler : https://mui.com/components/buttons/#handling-clicks
