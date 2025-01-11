const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px", // Adjusted height
        backgroundColor: "#1b1b2f",
        color: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem", // Padding for spacing
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional shadow
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Nicholas Tayag</div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem", // Space between links
        }}
      >
        <a
          href="#experience"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Experience
        </a>
        <a
          href="#portfolio"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
