import React, { FC } from 'react';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import './notFound.scss';

const NotFound: FC = () => (
  <div className="container not-found-container">
    <SentimentDissatisfiedOutlinedIcon
      sx={{ width: 35, height: 35, mr: 5, color: 'inherit' }}
    />
    <div className="text-not-found">404 - page not found</div>
  </div>
);

export default NotFound;
