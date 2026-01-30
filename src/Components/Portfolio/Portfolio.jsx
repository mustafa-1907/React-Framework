
import './portfolio.css'
import { useState } from 'react';
import image1 from '../../assets/poert1.png'
import image2 from '../../assets/port2.png'
import image3 from '../../assets/port3.png'
import PortfolioComponent from '../PortofiloComponent/PortofiloComponent';
export default function Portfolio() {

  const [selectedImg, setSelectedImg] = useState(null);
  const images = [{ id: 1, img: image1 }, { id: 2, img: image2 }, { id: 3, img: image3 }, { id: 4, img: image1 }, { id: 5, img: image2 }, { id: 6, img: image3 }];
  return (
    <>
      <title>portfolio</title>
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="d-flex pt-5 flex-column gap-2 justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-uppercase fw-bold">portfolio component</h1>
              <span className="text-dark  p-2 position-relative customstar">
                <i className='fa fa-star'></i>
              </span>
            </div>
            <div className="row g-3">
              {images.map(e => {
                return (
                  <PortfolioComponent
                    key={e.id}
                    imgSrc={e.img} onCardClick={(data) => setSelectedImg(data)} />
                )
              })}
            </div>
          </div>
          {selectedImg && (
            <div
              className="lightbox-container position-fixed start-0 top-0 w-100 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
              onClick={() => setSelectedImg(null)}
              style={{ zIndex: 9999 }}
            >
              <img
                src={selectedImg}
                className="w-50"
                onClick={(e) => e.stopPropagation()}
                alt=""
              />
            </div>
          )}
        </div>
      </section>
    </>
  )
} 