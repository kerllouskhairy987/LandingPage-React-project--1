import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper React components
import { Autoplay } from 'swiper/modules';           // Auto Play
import 'swiper/css';                                 // Import Swiper styles
import "./FeatureSlide.scss";
import { dataFeatureSlide } from "../AllData/dataFeatureSlide";
import "./FeatureSlide.scss";

function FeatureSlide() {
    return (
        <div className="container">
            <div className="feature-slide">
            <h2>Featured categories</h2>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        400: {
                            slidesPerView: 2    ,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}
                
                    autoplay
                    >

                    { dataFeatureSlide.map((ele, i) => 
                        <SwiperSlide key={i}>
                            <div className='products'>
                                <img src={ele.url} alt="Product Image" />
                                <p> {ele.text} </p>
                            </div>
                        </SwiperSlide>
                    ) }

                </Swiper>
            </div>
        </div>
    );
}

export default FeatureSlide;
