import { GoPlus } from "react-icons/go";
import ProductOptions from "../ProductOptions/ProductOptions";
import "./BestSells.scss";
interface IProps {
    url: string;
    type: string;
    title: string;
    rate: string;
    rateNumber: number;
    price: number;
    oldPrice: number;
}


function BestSellItem({url, type, title, rate, rateNumber, price, oldPrice}: IProps) {
  return (
    <div className="best-sell-item">
        <div className="item">
            <div className="item-img">
                <img src={url} alt="Image Poluar Product" />
                <div className="product-options">
                    <ProductOptions />
                </div>
            </div>
            <p> {type} </p>
            <a href="#"> {title} </a>
            <div className="best-price">
                <p> {price}$ { oldPrice === undefined? null : <del> {oldPrice}$ </del> }</p>
                <div>
                    <span> {rate} </span>
                    <span> {rateNumber} </span>
                </div>
            </div>
            <button><GoPlus /> add to cart</button>
        </div>
    </div>
  )
}

export default BestSellItem