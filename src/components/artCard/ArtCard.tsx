/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { FC } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Card, CardActions, CardMedia, Button, Grid } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { ArrowForward } from '@mui/icons-material';
import './artCard.scss';
import { useAppSelector } from '../../store/hooks';
import { articlesState } from '../../store/store';
import HightLight from '../HightLight';

export interface ArtCardProps {
  id: string;
  date: string;
  media: string;
  breif: string;
  breifTitle: string;
}

const ArtCard: FC<ArtCardProps> = ({ id, date, media, breif, breifTitle }) => {
  const history = useHistory();
  const { query } = useAppSelector(articlesState);

  const getDate = (dateInfo: string) => {
    const arr = dateInfo.split(' ');
    return moment(arr[0]).format('Do MMMM, YYYY');
  };

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
          <div className="art-title">
            <HightLight text={breifTitle} keyWords={query} />
          </div>
          <div className="art-title-description">
            <HightLight text={breif} keyWords={query} />
          </div>
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
