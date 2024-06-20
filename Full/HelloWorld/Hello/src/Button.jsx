function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  const handleClick = (e) => {
    e.target.textContent = "ouch🥲";
  };

  let count = 0;
  const handleClick2 = (name) => {
    if (count < 3) {
      count += 1;
      console.log(`${name} you clicked me ${count} times!`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };
  return (
    <button onClick={(e) => handleClick(e)} style={styles}>
      Click Me
    </button>
  );
}

export default Button;
