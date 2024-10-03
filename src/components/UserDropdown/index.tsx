import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Sign out",
  },
];

export const UserDropdown = () => {
  const [userID, setUserID] = useState("userID");
  const router = useRouter();

  const handleClickLogout = () => {
    router.push("/login");
  };

  return (
    <div className="userDropdown">
      <Dropdown
        menu={{
          items,
          onClick: handleClickLogout,
        }}
        trigger={["click"]}
        overlayClassName="customDropdown"
      >
        <div>
          <Image src="/icons/avatar.png" alt="en" width={40} height={40} />
          {userID}
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};
