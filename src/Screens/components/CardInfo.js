import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import {useFourThreeCardMediaStyles} from '@mui-treasury/styles/cardMedia/fourThree';
import ModalCard from './ModalCard'

export const CardInfo = ({ image, title, subtitle, id, type }) => {

  const mediaStyles = useFourThreeCardMediaStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <CardActionArea className="actionArea" onClick={handleOpen}>
      <Card className="card">
        <CardMedia  classes={mediaStyles} image={image} />
        <CardContent className="content">
          <Typography className="title">
            <b>{title}</b>
          </Typography>
          <Typography className="subtitle">{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
    <ModalCard open={open} id={id} handleClose={handleClose} type={type}/>
    </>
  );
};