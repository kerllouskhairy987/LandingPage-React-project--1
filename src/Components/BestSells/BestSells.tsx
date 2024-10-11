import { dataBestSells } from "../AllData/dataBestSells";
import BestSellCover from "./BestSellCover";
import BestSellItem from "./BestSellItem";
import "./BestSells.scss";

function BestSells() {
  return (
    <div className="container best-sell">
        <h2>Daily Best Sells</h2>
        <div className="items">
            <div>
                <BestSellCover />
            </div>

            { dataBestSells.map((ele, i) => 
                <BestSellItem 
                    key={i}
                    url={ele.url}
                    type={ele.type}
                    title={ele.title}
                    price={ele.price}
                    oldPrice={ele.oldPrice}
                    rate={ele.rate}
                    rateNumber={ele.rateNumber}
                />
            ) }
        </div>
    </div>
  )
}

export default BestSells