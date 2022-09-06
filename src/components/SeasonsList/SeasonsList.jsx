import { Link } from 'react-router-dom';
import styles from './SeasonsList.module.scss';
import noImageLoad from '../../images/no-image-min.png';

const SeasonsList = ({ seasons, serviceId, showId }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul>
      {seasons &&
        seasons.map(season => (
          <li key={season.id} className={styles.seasonItem}>
            <div className={styles.seasonImgWrapper}>
              <img
                src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                alt={season.name}
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </div>
            <div className={styles.seasonInfo}>
              <Link
                to={`/subscription/${serviceId}/${showId}/${season.season_number}`}
              >
                {season.name}
              </Link>
              <p>Air date: {season.air_date}</p>
              <p>Number of episodes: {season.episode_count}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SeasonsList;
