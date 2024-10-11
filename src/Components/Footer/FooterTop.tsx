import FooterItem from "./FooterItem";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top-first" style={{ width: "400px" }}>
        <h5>Categories</h5>

        <div className="lists">
          <ul>
            <li>
              <a href="#">Bakery & Biscuits</a>
            </li>
            <li>
              <a href="#">Breakfast & instant</a>
            </li>
            <li>
              <a href="#">Vegetables & Fruits</a>
            </li>
            <li>
              <a href="#">Atta, rice & dal</a>
            </li>
            <li>
              <a href="#">Sauces & spreads</a>
            </li>
            <li>
              <a href="#">Organic & gourmet</a>
            </li>
            <li>
              <a href="#">Baby care</a>
            </li>
            <li>
              <a href="#">Cleaning essentials</a>
            </li>
            <li>
              <a href="#">Personal care</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Bakery & Biscuits</a>
            </li>
            <li>
              <a href="#">Vegetables & Fruits</a>
            </li>
            <li>
              <a href="#">Atta, rice & dal</a>
            </li>
            <li>
              <a href="#">Sauces & spreads</a>
            </li>
            <li>
              <a href="#">Breakfast & instant</a>
            </li>
            <li>
              <a href="#">Organic & gourmet</a>
            </li>
            <li>
              <a href="#">Baby care</a>
            </li>
            <li>
              <a href="#">Cleaning essentials</a>
            </li>
            <li>
              <a href="#">Personal care</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-top-components">
        <FooterItem
          title="Get to know us"
          linkOne="Company"
          linkTwo="About"
          linkThree="Blog"
          linkFour="Help Center"
          linkFive="Our Value"
        />

        <FooterItem
          title="For Consumers"
          linkOne="Payments"
          linkTwo="Shipping"
          linkThree="Product Returns"
          linkFour="FAQ"
          linkFive="Shop Checkout"
        />

        <FooterItem
          title="Become a Shopper"
          linkOne="Shopper Opportunities"
          linkTwo="Become a Shopper"
          linkThree="Earnings"
          linkFour="Ideas & Guides"
          linkFive="New Retailers"
        />

        <FooterItem
          title="Freshcart programs"
          linkOne="Freshcart programs"
          linkTwo="Gift Cards"
          linkThree="Promos & Coupons"
          linkFour="Freshcart Ads"
          linkFive="Careers"
        />
      </div>
    </div>
  );
}

export default FooterTop;
