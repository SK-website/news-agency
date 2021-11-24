/* eslint-disable no-underscore-dangle */
import { Button, CardActions, Card } from '@mui/material';
import React, { FC } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { ArtCardProps } from '../../components/artCard/ArtCard';
import { useAppSelector } from '../../store/hooks';
import { Article } from '../../store/reducers/articlesReducer';
import { articlesState } from '../../store/store';
import './details.scss';
import '../../index.scss';

const Details: FC = () => {
  const params: ArtCardProps = useParams();
  const { articles } = useAppSelector(articlesState);
  const history = useHistory();
  const { id } = params;
  const requestedArticle: Article | undefined = articles.find(
    (el) => el._id === id
  );

  return (
    <div className="detailes-container">
      <div
        className="details-picture"
        style={{
          background: `url(${requestedArticle?.media}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="details-card">
        <Card
          sx={{
            maxWidth: 1290,
            border: '1px solid #eaeaea',
            p: '0 7.5rem',
            borderRadius: '5px',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="card-datails-content">
            <div className="art-title-details">{requestedArticle?.title}</div>
            <div className="art-summary">{`${requestedArticle?.summary}...`}</div>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button sx={{ mt: '50px', mb: '20px', p: 0, color: 'inherit' }}>
                <a
                  id="artLink"
                  className="details-link"
                  href={requestedArticle?.link}
                >
                  Continue reading
                </a>
                <ArrowForward sx={{ ml: '6px', mt: '3px' }} />
              </Button>
            </CardActions>
          </div>
        </Card>
        <Button
          sx={{ mt: '20px', mb: '45px', ml: '75px', p: 0, color: 'inherit' }}
          onClick={() => history.push('/')}
        >
          <ArrowBack sx={{ mr: '6px', mt: '3px' }} />
          <span className="details-back-button">Back to homepage</span>
        </Button>
      </div>
    </div>
  );
};

export default Details;
