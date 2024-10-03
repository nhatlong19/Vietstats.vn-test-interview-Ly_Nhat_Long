import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";

const items: any = [
  {
    key: "1",
    label: "EN",
  },
  {
    key: "2",
    label: "VI",
  },
];

export const SwitchLanguage = () => {
  const [lang, setLang] = useState("EN");

  const handleMenuClick = (e: { key: string }) => {
    const selectedLanguage = items.find(
      (item: any) => item.key === e.key
    )?.label;
    if (selectedLanguage) {
      setLang(selectedLanguage);
    }
  };

  return (
    <div className="switchLanguage">
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}
        trigger={["click"]}
        overlayClassName="customDropdown"
      >
        <div>
          <Image src="/icons/en.png" alt="en" width={25} height={25} />
          {lang}
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};
