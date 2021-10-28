import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Paper } from "@mui/material";

export default function Header(props) {
  return (
    <Paper className={styles.article}>
      <img className={styles.image} src="/img/profile.jpeg" />
      <div className={styles.infoContainer}>
        <h1>{props.name}</h1>
        <span>{props.bio}</span>
        <span>{props.phone}</span>
        <span>{props.email}</span>
      </div>
    </Paper>
  );
}
