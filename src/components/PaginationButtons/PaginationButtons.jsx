import styles from './PaginationButtons.module.scss';

const PaginationButtons = ({ page, onLoadMore, onLoadPrev }) => {
  return (
    <div className={styles.buttonsWrapper}>
      <div>
        <button
          className={styles.paginationBtn}
          onClick={onLoadPrev}
          disabled={page <= 1 ? 'true' : null}
        >
          Previous Page
        </button>
        <button className={styles.paginationBtn} onClick={onLoadMore}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginationButtons;
