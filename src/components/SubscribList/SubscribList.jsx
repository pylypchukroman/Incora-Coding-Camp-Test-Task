import { Link } from 'react-router-dom';
import styles from './SubscribList.module.scss';
import noImageLoad from '../../images/no-image-min.png';

const SubscribList = ({ subscribList }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  return (
    <ul className={styles.list}>
      {subscribList &&
        subscribList.map(network => (
          <li key={network.id} className={styles.item}>
            <Link
              to={{
                pathname: `/subscription/${network.id}`,
              }}
              className={styles.link}
            >
              <p className={styles.linkText}>{network.name}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                alt={network.name}
                width="120"
                height="60"
                onError={imageOnErrorHandler}
                loading="lazy"
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SubscribList;
