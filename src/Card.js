function Card({ children }) {

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "300px",
        marginTop: "20px"
      }}
    >
      {children}
    </div>
  );
}

export default Card;