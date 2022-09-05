import styles from './HomePage.module.scss';
import Navigation from 'components/Navigation/Navigation';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>Welcome to BD Screens</p>
          <h1 className={styles.title}>
            Watch Unlimited <br /> Movies, Drama, Music Video <br /> and More
            Content.
          </h1>
          <p>
            Enjoy popular Movies and Live shows.
            <br /> Subscribe to your favorite services
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
