type props = {
  style?: React.CSSProperties;
};

const name = ({ style }: props) => {
  return <h1 style={style}>name</h1>;
};
export default name;
