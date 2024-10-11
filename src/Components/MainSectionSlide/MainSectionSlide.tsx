import { FaArrowRight } from "react-icons/fa6";        // Import Arrow Icons
import "./_MainSectionSlide.scss";

interface IProps {
    url: string;
    discount: string;
    discountRate: number;
    title: string;
    titleRate: number;
    desc: string;
}

function MainSectionSlide({url, discount, discountRate, title, titleRate, desc}: IProps) {
  return (
    <div className='main-slider' style={{backgroundImage: `url(${url})`}}>
        <p className="discount">{ discount } <span>{ discountRate } %</span></p>
        <h2>{title} <span>{ titleRate } %</span> </h2>
        <p className="desc">{ desc }</p>
        <button>shop now <FaArrowRight /></button>
    </div>
  )
}

export default MainSectionSlide

