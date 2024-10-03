import Image from "next/image";

export const Banner = () => {
  return (
    <div className="banner">
      <Image
        className=""
        src="/images/desktop.png"
        alt="desktop"
        width={808}
        height={705}
      />
      <div>Hello, User ID</div>
      <p>Manage your activities in this dashboard.</p>
    </div>
  );
};
