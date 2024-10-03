interface IProps {
  title: string;
  num: number;
  percent?: number;
}

export const ClassStatCard = (props: IProps) => {
  const { num, title, percent } = props;
  return (
    <div className="classStatCard">
      <div className="title">{title}</div>
      <div className="bottom">
        <div className="num">{num} CLASS</div>
        {percent && <div className="percent">{percent}</div>}
      </div>
    </div>
  );
};
