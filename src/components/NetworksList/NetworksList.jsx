import { Link } from 'react-router-dom';
import styles from './NetworksList.module.scss';
import noImageLoad from '../../images/no-image-min.png';

const NetworksList = ({ networks }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul className={styles.list}>
      {networks &&
        networks.map(network => (
          <li key={network.id} className={styles.item}>
            <Link
              to={`/streamingService/${network.id}`}
              className={styles.link}
            >
              <p className={styles.linkText}>{network.name}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                alt={network.name}
                width="50%"
                height="50%"
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NetworksList;
