import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import './card.scss';

interface ArtCardProps {
  date: string;
  link: string;
  media: string;
  title: string;
  summary: string;
  breif: string;
}

const ArtCard: FC<ArtCardProps> = ({
  date,
  link,
  media,
  title,
  summary,
  breif,
}) => {
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
          // width="100%"
          sx={{ maxWidth: 400, borderBottom: '1px solid rgb(220, 220, 220)' }}
          image={media}
        />
        <div className="card-content">
          <div className="date">{date}</div>
          <div className="art-title">{title}</div>
          <div className="art-title-description">{breif}</div>
        </div>
        <CardActions>
          <Button size="small">Read more</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArtCard;
