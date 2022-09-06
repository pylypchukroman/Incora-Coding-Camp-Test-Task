import { Link } from 'react-router-dom';
import styles from './SubscribeShowList.module.scss';
import noImageLoad from '../../images/no-image-min.png';

const SubscribeShowList = ({ shows, serviceId }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul className={styles.list}>
      {shows &&
        shows.map(show => (
          <li key={show.id} className={styles.item}>
            <div className={styles.image}>
              <img
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                alt={show.name}
                width="120"
                height="60"
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </div>
            <div className={styles.showText}>
              <Link
                to={`/subscription/${serviceId}/${show.id}`}
                className={styles.title}
              >
                {show.original_name}
              </Link>
              <p className={styles.overview}>{show.overview}</p>
              <div className={styles.rate}>
                <p> Rate: {show.popularity}</p>
                <p className={styles.vote}>
                  Vote: {show.vote_average} ({show.vote_count} votes)
                </p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SubscribeShowList;
