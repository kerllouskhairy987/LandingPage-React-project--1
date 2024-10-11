import { Swiper, SwiperSlide } from 'swiper/react';    // Import Swiper React components
import { Autoplay } from 'swiper/modules';             // Auto Play
import 'swiper/css';
import MainSectionSlide from "../MainSectionSlide/MainSectionSlide";

function MainSection() {
    return (
        <div className="container main-section">
            <Swiper
            modules={[Autoplay]}
            autoplay
            >
                <SwiperSlide> 
                    <MainSectionSlide 
                        url='https://freshcart-tailwind.codescandy.com/assets/images/slider/slide-1.jpg'
                        discount="opening sale discount" 
                        discountRate={50} 
                        title="sopermarket for fresh grocery" 
                        titleRate={50}
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos dolor fugiat.'/> 
                </SwiperSlide>

                <SwiperSlide> 
                    <MainSectionSlide 
                        url='https://freshcart-tailwind.codescandy.com/assets/images/slider/slider-2.jpg'
                        discount="free shipping - orders over" 
                        discountRate={100} 
                        title="free shipping orders over" 
                        titleRate={100}
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos dolor fugiat. sit amet consectetur adipisicing elit.'/> 
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default MainSection;
