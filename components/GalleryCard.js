import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "../styles/Card.module.css";

export default function GalleryCard(props) {
  return (
    <Card className={styles.card}>
      <CardActionArea href={`/view/${props.id}`}>
        <CardMedia
          className={styles.image}
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
      </CardActionArea>
      <CardActions>
        <Button size="small" href={`/view/${props.id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
