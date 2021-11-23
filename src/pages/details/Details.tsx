/* eslint-disable no-underscore-dangle */
import { Button, CardActions, Card } from '@mui/material';
import React, { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { ArtCardProps } from '../../components/card/ArtCard';
import { useAppSelector } from '../../store/hooks';
import { Article } from '../../store/reducers/articlesReducer';
import { articlesState } from '../../store/store';
import './details.scss';
import '../../index.scss';

// interface DetailsProps {
//   link: string;
//   media: string;
//   title: string;
//   summary: string;
// }

const Details: FC = () => {
  const params: ArtCardProps = useParams();
  const { articles } = useAppSelector(articlesState);
  const { id } = params;
  console.log(id, params);
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
            <CardActions sx={{ mt: '80px', justifyContent: 'flex-end' }}>
              <Button size="small">
                <a
                  id="artLink"
                  className="details-link"
                  href={requestedArticle?.link}
                >
                  Continue reading
                  <ArrowForward color="inherit" sx={{ ml: '6px' }} />
                </a>
              </Button>
            </CardActions>
          </div>
        </Card>
        <Button size="small">
          <span className="ditails-back-button">
            <ArrowBack color="inherit" sx={{ mr: '6px' }} />
            Back to homepage
          </span>
        </Button>
      </div>
    </div>
  );
  //     : (
  //     <p>Tha article not found</p>
  //   );
  // });
};

export default Details;
