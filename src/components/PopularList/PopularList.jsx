import styles from './PopularList.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { useEffect, useState } from 'react';
import { getPopularToday } from 'Utils/MovieAPI';

const PopularList = () => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };

  const [shows, setShows] = useState([]);
  useEffect(() => {
    getPopularToday().then(data => setShows(data));
  }, []);

  return (
    <ul className={styles.list}>
      {shows &&
        shows.slice(0, 8).map(show => (
          <li key={show.id} className={styles.item}>
            <div className={styles.imageWrapper}>
              <img
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                alt={show.name}
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </div>
            <div className={styles.info}>
              <p className={styles.title}>{show.name}</p>
              <p>Rate: {show.vote_average}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default PopularList;
