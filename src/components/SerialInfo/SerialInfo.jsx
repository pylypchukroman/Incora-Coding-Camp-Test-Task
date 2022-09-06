import styles from './SerialInfo.module.scss';
import noImageLoad from '../../images/no-image-min.png';

const SerialInfo = ({ serial }) => {
  const airdate = serial.first_air_date;
  const year = airdate ? airdate.split('-')[0] : null;
  const ganres = serial.genres;
  const ganre = ganres ? ganres.map(el => el.name).join(', ') : null;

  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <div className={styles.info}>
      <div className={styles.imgWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/original/${serial.poster_path}`}
          alt={serial.name}
          onError={imageOnErrorHandler}
          loading="lazy"
        />
      </div>
      <div className={styles.textWrapper}>
        <p>
          <span className={styles.title}>{serial.original_name}</span> {year}
        </p>
        <p>{ganre}</p>
        <p className={styles.tag}>{serial.tagline}</p>
        <p>Overview</p>
        <p className={styles.overview}>{serial.overview}</p>
        <a href={serial.homepage}>{serial.homepage}</a>
        <p className={styles.seasons}>
          Number of seasons: {serial.number_of_seasons}
        </p>
        <p>Number of episodes: {serial.number_of_episodes}</p>
      </div>
    </div>
  );
};

export default SerialInfo;
