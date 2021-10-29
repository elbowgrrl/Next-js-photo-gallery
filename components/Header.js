import styles from "../styles/Header.module.css";
import { Paper } from "@mui/material";
import { useMediaQuery } from '@material-ui/core';



export default function Header(props) {

  const bioCollapsed = useMediaQuery('(max-width: 600px)');
  const bioFull = useMediaQuery('(min-width: 600px)');

  return (
    <Paper className={styles.article}>
      <img className={styles.image} src="/img/profile.jpeg" />
      <div className={styles.infoContainer}>
        <h1>{props.name}</h1>
        <div>{bioFull && <span>{props.bio}</span>}
        </div>
        <span>{props.phone}</span>
        <span>{props.email}</span>
      </div>
    </Paper>
  );
}
