import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardActions, CardMedia, Button, Grid } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import moment from 'moment';
import { ArrowForward } from '@mui/icons-material';
import './artCard.scss';

export interface ArtCardProps {
  id: string;
  date: string;
  media: string;
  breif: string;
  breifTitle: string;
}

const ArtCard: FC<ArtCardProps> = ({ id, date, media, breif, breifTitle }) => {
  const history = useHistory();

  const getDate = (dateInfo: string) => {
    const arr = dateInfo.split(' ');
    return moment(arr[0]).format('Do MMMM, YYYY');
  };

  // const hightLight = (text: string, keyWords: string): JSX.Element[] => {
  //   const str = text;
  //   const arrOfWords = keyWords.split(' ');
  //   const arrOfRegExp: Array<Array<RegExp | string>> = [];
  //   arrOfWords.forEach((el) => {
  //     const regexp = new RegExp(el, 'ig');
  //     arrOfRegExp.push([regexp, el]);
  //   });
  //   arrOfRegExp.forEach((el) => {
  //     str.replace(el[0], `<>${el[1]}</>`);
  //   });
  //   return str.split(' ').map((el) => {
  //     for (let i = 0; i < arrOfRegExp.length; i += 1) {
  //       return el.match(arrOfRegExp[i]) ? (
  //         <span className="light">{el}</span>
  //       ) : (
  //         <>{el}</>
  //       );
  //     }
  //   });
  // };

  return (
    <Grid item xs={12} md={6} lg={4} sx={{ p: 0 }}>
      <Card
        sx={{
          maxWidth: 400,
          minHeight: 530,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardMedia
          component="img"
          alt="picture"
          height="217"
          sx={{ borderBottom: '1px solid rgb(220, 220, 220)' }}
          image={media}
        />
        <div className="card-content">
          <div className="date-wrapper">
            <CalendarTodayOutlinedIcon
              color="inherit"
              sx={{ width: 16, height: 16, mr: '9px', mb: '4px' }}
            />
            <p className="date">{getDate(date)}</p>
          </div>
          <div className="art-title">{breifTitle}</div>
          <div className="art-title-description">{breif}</div>
          <CardActions sx={{ p: 0 }}>
            <Button
              sx={{ mt: '20px', p: 0, color: 'inherit' }}
              onClick={() => history.push(`/details/${id}`)}
            >
              <span className="card-link">Read more </span>
              <ArrowForward color="inherit" sx={{ ml: '6px', mt: '2px' }} />
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};

export default ArtCard;
