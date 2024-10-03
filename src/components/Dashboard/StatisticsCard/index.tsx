import Image from "next/image";

interface IProps {
  img: string;
  title: string;
  total: number;
  isMoney?: boolean;
}

export const StatisticsCard = (props: IProps) => {
  const { img, title, total, isMoney } = props;
  return (
    <div className="statisticsCard">
      <Image src={img} alt="card" width={500} height={500} />
      <div className="total">
        {isMoney && <span>$</span>}
        {total}
      </div>
      <div className="title">{title}</div>
    </div>
  );
};
