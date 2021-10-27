import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import styles from "../styles/Card.module.css";

export default function GalleryCard(props) {

  return (
    <Card className={styles.card}>
      <CardMedia className={styles.image}
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
        <Button size="small" variant="contained" href={`/view/${props.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}

