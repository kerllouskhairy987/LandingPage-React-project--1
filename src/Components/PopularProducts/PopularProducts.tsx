import { dataPopularProduts } from "../AllData/dataPopularProducts";
import PopularProductsItem from "./PopularProductsItem";

function PopularProducts() {
  return (
    <div className="container popular-products">
        <h2>Popular Products</h2>

        <div className="populer-product-item">
            { dataPopularProduts.map((ele, i) => 
                <PopularProductsItem  
                    key={i}
                    url={ele.url}
                    type={ele.type}
                    title={ele.title}
                    rate={ele.rate}
                    rateNumber={ele.rateNumber}
                    ammount={ele.ammount}
                    price={ele.price}
                    oldPrice={ele.oldPrice}
                    status={ele.status}
                    discount={ele.discount}
                />
            ) }
        </div>
    </div>
  )
}

export default PopularProducts;