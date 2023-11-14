function Button({ color, text, handleClick }) {
  // console.log();
  return (
    <button onClick={handleClick} style={{ color: color }}>
      {text}
    </button>
  );
}

export default Button;
