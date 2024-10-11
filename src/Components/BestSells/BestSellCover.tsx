import { FaLongArrowAltRight } from "react-icons/fa";
import "./BestSells.scss";

function BestSellCover() {
  return (
    <div className="cover-product">
        <h3>100% Organic Coffee Beans.</h3>
        <p>Get the best deal before close.</p>
        <button>shop now <FaLongArrowAltRight /></button>
    </div>
  )
}

export default BestSellCover