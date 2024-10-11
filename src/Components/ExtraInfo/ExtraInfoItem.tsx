import { ReactElement } from "react";
import "./_ExtraInfo.scss";
interface IProps {
  title: string;
  desc: string;
  icon: ReactElement;
}

function ExtraInfoItem({ title, desc, icon }: IProps) {
  return (
    <div className="extra-info-item">
      <p className="icon"> {icon} </p>
      <h4> {title} </h4>
      <p> {desc} </p>
    </div>
  );
}

export default ExtraInfoItem;
