export default function PortfolioComponent({ imgSrc, onCardClick }) {
  return (
    <div className="col-md-4">
      <div 
        className="inner  rounded-4 overflow-hidden position-relative"
        style={{ cursor: 'pointer' }}
        onClick={() => onCardClick(imgSrc)}
      >
        <img src={imgSrc} className='w-100 d-block' alt="portfolio" />
        <div className="layer position-absolute top-0 start-0 end-0 bottom-0  d-flex justify-content-center align-items-center">
          <span className='display-2 text-white'>
            <i className='fa fa-plus'></i>
          </span>
        </div>
      </div>
    </div>
  );
}