import { GoPlus } from "react-icons/go"
import ProductOptions from "../ProductOptions/ProductOptions";
import "./_PopularProducts.scss";
interface IProps {
    url: string;
    type: string;
    title: string;
    rate: string;
    rateNumber: number;
    ammount?: number;
    price: number;
    oldPrice?: number;
    status?: string;
    discount?: number
}

function PopularProductsItem({url, type, title, rate, rateNumber, ammount, price, oldPrice, status, discount}: IProps) {
  return (
    <div className="populer-product-item">
        <div className="item">
            { status === undefined? null :  <p className="type"> {status} </p> }
            { discount === undefined? null : <p className="discount"> {discount}% </p> }
            <div className="item-img">
                <img src={url} alt="Image Poluar Product" />
                <div className="product-options">
                    <ProductOptions />
                </div>
            </div>
            <p> {type} </p>
            <a href="#"> {title} </a>
            <div className="rate">
                <span> {rate} </span>
                <span> {rateNumber} { ammount === undefined? null : <small>( {ammount} )</small> }</span>
            </div>
            <div className="price">
                <p> {price}$ { oldPrice === undefined? null : <del> {oldPrice}$ </del> }</p>
                <button><GoPlus /> add</button>
            </div>
        </div>
    </div>
  )
};

export default PopularProductsItem;