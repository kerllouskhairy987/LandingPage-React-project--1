import BannerItem from "./BannerItem";
import "./_Banner.scss";

function Banner() {
  return (
    <div className="container banner">
        <BannerItem 
            url="https://freshcart-tailwind.codescandy.com/assets/images/banner/grocery-banner.png" 
            title="Fruits & Vegetables"
            desc="Get Upto 30% Off"
        />
        <BannerItem 
            url="https://freshcart-tailwind.codescandy.com/assets/images/banner/grocery-banner-2.jpg" 
            title="Freshly Baked Buns"
            desc="Get Upto 25% Off"
        />
    </div>
  )
}

export default Banner;
