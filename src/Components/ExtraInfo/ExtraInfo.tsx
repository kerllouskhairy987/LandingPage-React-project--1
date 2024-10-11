import { CiClock2 } from "react-icons/ci";
import { FaGift, FaLaravel } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import "./_ExtraInfo.scss";
import ExtraInfoItem from "./ExtraInfoItem";

function ExtraInfo() {
  const clock = <CiClock2 />;
  const gift = <FaGift />;
  const laravel = <FaLaravel />;
  const loop = <BsArrowRepeat />;

  return (
    <div className="container extra-info">
      <ExtraInfoItem
        icon={clock}
        title="10 minute grocery now"
        desc="Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
      />

      <ExtraInfoItem
        icon={gift}
        title="Best Prices & Offers"
        desc="Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers."
      />

      <ExtraInfoItem
        icon={laravel}
        title="Wide Assortment"
        desc="Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories."
      />

      <ExtraInfoItem
        icon={loop}
        title="Easy Returns"
        desc="Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy ."
      />
    </div>
  );
}

export default ExtraInfo;
