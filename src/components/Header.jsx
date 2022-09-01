import PropTypes from "prop-types";

function Header({ text, bgColor, textColor, textSize }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: textSize,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0 , 0, 0.4)",
  textColor: "#ff6a95",
  textSize: "22px",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
