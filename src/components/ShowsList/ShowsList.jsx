import styles from './ShowsList.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import noImageLoad from '../../images/no-image-min.png';

const ShowsList = ({ shows, networkName }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  const getInfo = () => {
    Notify.warning(`Please subscribe to ${networkName} to watch this serials`);
  };
  return (
    <ul className={styles.list}>
      {shows &&
        shows.map(show => (
          <li key={show.id} className={styles.item}>
            <div className={styles.image}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                alt={show.name}
                width="120"
                height="60"
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </div>
            <div className={styles.showText}>
              <p className={styles.title} onClick={getInfo}>
                {show.original_name}
              </p>
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

export default ShowsList;
