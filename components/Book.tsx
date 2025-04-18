type Props = {
  style?: React.CSSProperties;
};

const ComponentName = ({ style }: Props) => {
  return <div style={style}>name</div>;
};

export default ComponentName;
