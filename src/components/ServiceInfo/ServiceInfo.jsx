import styles from './ServiceInfo.module.scss';
import noImageLoad from '../../images/no-image-min.png';
import { useLocation, useParams } from 'react-router';

const ServiceInfo = ({ service, subscribe }) => {
  const imageOnErrorHandler = event => {
    event.currentTarget.src = noImageLoad;
  };
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1];

  return (
    <div className={styles.serviceInfo}>
      <div className={styles.imageWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/original/${service.logo_path}`}
          alt={service.name}
          onError={imageOnErrorHandler}
          loading="lazy"
        />
      </div>
      <div className={styles.serviceInfoText}>
        <p>{service.name}</p>
        <p>{service.headquarters}</p>
        <a href={service.homepage}>Home page</a>
        <button
          type="button"
          className={styles.sub}
          onClick={() => subscribe(service.id)}
          hidden={currentPage === 'subscription' ? true : false}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ServiceInfo;
