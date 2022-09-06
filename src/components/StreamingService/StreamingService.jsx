import Navigation from 'components/Navigation/Navigation';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getServiceInfo } from 'Utils/MovieAPI';
import styles from './StreamingService.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NetworkContext } from 'Context/NetworkContext';
import { getSeriesList } from 'Utils/MovieAPI';
import PaginationButtons from 'components/PaginationButtons/PaginationButtons';
import ShowsList from 'components/ShowsList/ShowsList';
import ServiceInfo from 'components/ServiceInfo/ServiceInfo';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const StreamingService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const networkName = service.name;

  ///
  const { networks, setNetworks } = useContext(NetworkContext);
  const subscribe = id => {
    setNetworks(
      networks,
      (networks.find(network => network.id === id).sub = true)
    );
    Notify.success(`You subscribe to ${networkName}!`);
  };
  //

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };
  const onLoadPrev = () => {
    setPage(prev => prev - 1);
  };

  useEffect(() => {
    serviceId && getServiceInfo(serviceId).then(data => setService(data));
    getSeriesList(serviceId, page).then(data => setShows(data));
  }, [serviceId, page]);
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <GoBackButton />
      <ServiceInfo service={service} subscribe={subscribe} />
      <div className={styles.serials}>
        <ShowsList shows={shows} networkName={networkName} />
        <PaginationButtons
          page={page}
          onLoadMore={onLoadMore}
          onLoadPrev={onLoadPrev}
        />
      </div>
    </div>
  );
};

export default StreamingService;
