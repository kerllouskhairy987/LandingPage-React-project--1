interface IProps {
    title: string;
    linkOne: string;
    linkTwo: string;
    linkThree: string;
    linkFour: string;
    linkFive: string;
}

function FooterItem({title, linkOne, linkTwo, linkThree, linkFive, linkFour}: IProps) {
  return (
    <div className="footer-item">
      <h5> {title} </h5>
      <ul>
        <li><a href="#"> {linkOne} </a></li>
        <li><a href="#"> {linkTwo} </a></li>
        <li><a href="#"> {linkThree} </a></li>
        <li><a href="#"> {linkFour} </a></li>
        <li><a href="#"> {linkFive} </a></li>
      </ul>
    </div>
  );
}

export default FooterItem;
