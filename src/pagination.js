const Pagination = ({ page, total, setNewPage }) => {
  const handlePageChange = (clickedPage) => {
    if (clickedPage != page && clickedPage > 0 && clickedPage <= total / 10) {
      setNewPage(clickedPage);
    }
  };
  return (
    <div className="pagination--container">
      <span
        className={page === 1 ? "pagination--disable " : "pagination--button"}
        onClick={() => {
          handlePageChange(page - 1);
        }}
      >
        {" "}
        ◀︎{" "}
      </span>
      {[...Array(total / 10)].map((_, index) => {
        return (
          <span
            key={index}
            className={
              page === index + 1
                ? "pagination--button pagination--selected"
                : "pagination--button"
            }
            onClick={() => {
              handlePageChange(index + 1);
            }}
          >
            {index + 1}
          </span>
        );
      })}
      <span
        className={
          page === total / 10 ? "pagination--disable" : "pagination--button"
        }
        onClick={() => {
          handlePageChange(page + 1);
        }}
      >
        {" "}
        ▶{" "}
      </span>
    </div>
  );
};

export default Pagination;
