// function Header(){

// }

const Header = () => {
  // Return JSX: Javascript XML
  const brandName = "Shoppe";
  const a = 1;
  const b = 2;
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <h1>Hello I am in App</h1>;
  } else {
    return (
      <div className="header">
        <h1>{brandName.toUpperCase()}</h1>
        <h2>
          Results: {a + b} {a * b} {a / b}
        </h2>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Contact us</li>
        </ul>
      </div>
    );
  }
};

export default Header;
