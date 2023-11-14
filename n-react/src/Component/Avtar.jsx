function Avtar({ name, src }) {
  const styles = {
    borderRadius: "50%",
  };

  return (
    <div>
      <img src={src} alt="mypic" width="200px" height="200px" style={styles} />
      <h1>{name}</h1>
    </div>
  );
}

export default Avtar;
