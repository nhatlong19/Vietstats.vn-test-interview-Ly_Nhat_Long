import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";

export const Notification = () => {
  const [notiNum, setNotiNum] = useState(3);

  return (
    <div className="notification">
      <Image src="/icons/notification.png" alt="en" width={24} height={24} />
      <div className="notiNum">{notiNum}</div>
    </div>
  );
};
