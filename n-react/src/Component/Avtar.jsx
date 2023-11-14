function Avtar({ name, src, rounded, age, address, hobbies }) {
  console.log(age, address, hobbies);
  const styles = {
    borderRadius: rounded ? "50%" : "16px",
  };

  return (
    <div>
      <img src={src} alt="mypic" width="200px" height="200px" style={styles} />
      <h1>{name}</h1>
      <h3>{age}</h3>
    </div>
  );
}

export default Avtar;
