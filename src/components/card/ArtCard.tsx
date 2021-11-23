import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardActions, CardMedia, Button, Grid } from '@mui/material';

import './card.scss';

export interface ArtCardProps {
  id: string;
  date: string;
  media: string;
  breif: string;
  briefTitle: string;
}

const ArtCard: FC<ArtCardProps> = ({ id, date, media, breif, briefTitle }) => {
  const location = useLocation();
  return (
    <Grid item spacing={2} xs={12} md={6} lg={4} sx={{ p: 0 }}>
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
          sx={{ maxWidth: 400, borderBottom: '1px solid rgb(220, 220, 220)' }}
          image={media}
        />
        <div className="card-content">
          <div className="date">{date}</div>
          <div className="art-title">{briefTitle}</div>
          <div className="art-title-description">{breif}</div>
        </div>
        <CardActions>
          <Button size="small">
            <Link
              to={{
                pathname: `/details/${id}`,
                state: { prevPath: location.pathname },
              }}
            >
              Read more
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArtCard;
