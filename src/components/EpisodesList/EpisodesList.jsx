import styles from './EpisodesList.module.scss';
import noImageLoad from '../../images/no-image-min.png';

const EpisodesList = ({ episodes }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul className={styles.list}>
      {episodes &&
        episodes.map(episod => (
          <li key={episod.id} className={styles.episodItem}>
            <div className={styles.imgWrapper}>
              <img
                src={`https://image.tmdb.org/t/p/original/${episod.still_path}`}
                alt={episod.name}
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.episodTitle}>{episod.name}</p>
              <p>Runtime: {episod.runtime}</p>
              <p>Overview</p>
              <p>{episod.overview}</p>
              <p>
                Vote: {episod.vote_average} ({episod.vote_count} votes)
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default EpisodesList;
