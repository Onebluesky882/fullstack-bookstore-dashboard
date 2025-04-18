type Props = {
  style?: React.CSSProperties;
};

const BookList = ({ style }: Props) => {
  return (
    <div style={style}>
      <h1 style={{ color: "blue" }} className="">
        booking
      </h1>
    </div>
  );
};

export default BookList;
