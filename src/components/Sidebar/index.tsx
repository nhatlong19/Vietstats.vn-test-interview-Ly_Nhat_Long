import { ISidebarItem } from "@/interfaces/sidebar";
import Image from "next/image";

interface IProps {
  sidebarList: ISidebarItem[];
  onMenuClick: (id: string) => void;
  activeItem: string;
  isCollapsed: boolean;
}
export const Sidebar = (props: IProps) => {
  const { sidebarList, onMenuClick, activeItem, isCollapsed } = props;
  return (
    <div
      className={`sidebar 
      ${isCollapsed ? "collapsed" : ""}
      `}
    >
      {sidebarList.map((item, index: number) => (
        <div
          className={`sidebarItem ${
            item.id === activeItem ? "active" : "inactive"
          }`}
          key={index}
          onClick={() => {
            onMenuClick(item.id);
          }}
        >
          <Image
            src={item.id === activeItem ? item.iconActive : item.icon}
            alt="en"
            width={24}
            height={24}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
