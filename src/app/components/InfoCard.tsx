import React from "react";

const InfoCard = () => {
  const cardStyles = {
    width: "300px",
    padding: "30px",
    borderRadius: "45px",
    background: "linear-gradient(135deg, #f36d3e, #fba54f)",
    color: "white",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    margin: "auto",
  };

  const titleStyles = {
    fontSize: "24px",
    fontWeight: "semibold",
    marginBottom: "20px",
  };

  const itemStyles = {
    display: "flex",
    gap: "18px",
    fontSize: "16px",
    margin: "10px 0",
  };

  const iconStyles = {
    width: "25px",
    height: "25px",
  };

  return (
    <div style={cardStyles}>
      <h2 style={titleStyles}>Info</h2>
      <div style={itemStyles}>
        <img
          src="boitemail.svg"
          alt="Email"
          style={iconStyles}
        />
        <span>btparthur@gmail.com</span>
      </div>
      <div style={itemStyles}>
        <img
          src="telephone.svg"
          alt="Téléphone"
          style={iconStyles}
        />
        <span>+33 6 60 06 91 94 </span>
      </div>
      <div style={itemStyles}>
        <img
          src="crayon.svg"
          alt="Adresse"
          style={iconStyles}
        />
        <span>75008 PARIS</span>
      </div>
    </div>
  );
};

export default InfoCard;
