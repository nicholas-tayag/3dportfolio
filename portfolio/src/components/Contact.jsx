/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
    return (
        <div
            id="contact"
            className="section"
            style={{
                padding: "4rem 2rem",
                backgroundColor: "#1b1b2f",
                color: "#ffffff",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                }}
            >
                Let's Connect
            </h1>
            <p
                style={{
                    fontSize: "1.2rem",
                    marginBottom: "0rem",
                    color: "#dcdde1",
                }}
            >
                I'm always open to discussing new opportunities or answering any questions.
            </p>
            <p
                style={{
                    fontSize: "1.2rem",
                    marginBottom: "2rem",
                    color: "#dcdde1",
                }}
            >
                Reach out through any of the links below!
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                }}
            >
                {/* Email */}
                <a
                    href="mailto:nicholas.tayag@ufl.edu"
                    style={{
                        color: "#3498db",
                        fontSize: "1.2rem",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    nicholas.tayag@ufl.edu
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/nicholastayag"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#3498db",
                        fontSize: "1.2rem",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    LinkedIn Profile
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/nicholas-tayag"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#3498db",
                        fontSize: "1.2rem",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    GitHub Profile
                </a>
            </div>

            <div
                style={{
                    marginTop: "2rem",
                }}
            >
                <button
                    style={{
                        padding: "0.8rem 1.5rem",
                        backgroundColor: "#3498db",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#217dbb")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
                    onClick={() => window.location = 'mailto:nicholas.tayag@ufl.edu'}
                >
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default Contact;
