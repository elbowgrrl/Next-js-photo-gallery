import styles from "../styles/Header.module.css";
import { Paper, AccordionSummary, AccordionDetails, Accordion, Typography } from "@mui/material";
import { useMediaQuery } from '@material-ui/core';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function Header(props) {

  const bioCollapsed = useMediaQuery('(max-width: 600px)');
  const bioFull = useMediaQuery('(min-width: 600px)');
  const shortBio = props.bio.slice(0, 20) + '...'

  return (
    <Paper className={styles.article}>
      <img className={styles.image} src="/img/profile.jpeg" />
      <div className={styles.infoContainer}>
        <h1>{props.name}</h1>
        <div>
          {bioFull && <span>{props.bio}</span>}
          {bioCollapsed && 
                <Accordion className={styles.accordion}>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{shortBio}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{props.bio}</Typography>
                </AccordionDetails>
              </Accordion>
          }
        </div>
        <span>{props.phone}</span>
        <span>{props.email}</span>
      </div>
    </Paper>
  );
}
