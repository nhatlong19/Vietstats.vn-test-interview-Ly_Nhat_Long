import Image from "next/image";
import { SwitchLanguage } from "../SwitchLanguage";
import { UserDropdown } from "../UserDropdown";
import { Notification } from "../Notification";

interface IProps {
  onClick: () => void;
}

export const Header = (props: IProps) => {
  const { onClick } = props;
  return (
    <div className="header">
      <div className="menu-icon" onClick={onClick}>
        <Image src="/icons/menu.png" alt="menu" width={840} height={840} />
      </div>

      <div className="right">
        <SwitchLanguage />
        <Notification />
        <UserDropdown />
      </div>
    </div>
  );
};
