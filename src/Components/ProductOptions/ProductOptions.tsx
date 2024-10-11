import { FaEye, FaRegHeart } from "react-icons/fa"
import { MdOutlineCompareArrows } from "react-icons/md";
import "./_ProductOptions.scss"

function ProductOptions() {
  return (
    <div className="product-options-component">
        <div className="eye">
            <FaEye className="icon" />
        </div>
        <div className="heart">
            <FaRegHeart className="icon" />
        </div>
        <div className="mobile-data">
            <MdOutlineCompareArrows className="icon" />
        </div>
    </div>
  )
}

export default ProductOptions