const Portfolio = () => {
    const projects = [
        {
            title: "CapSoul - INIT FIU ShellHacks",
            technologies: "React.js, Firebase, Three.js, TailwindCSS, Gemini API",
            description:
                "Developed a full-stack web application to create digital time capsules. Integrated Gemini AI to analyze and generate personalized summaries for time capsules based on user content.",
            link: "https://github.com/nicholas-tayag/CapSoul",
        },
        {
            title: "MoneyBuddyCLI - Capital One TMM Mini-Hackathon (1st Place)",
            technologies: "JavaScript, Node.js, OpenAI API, NewsAPI",
            description:
                "Won 1st place by developing a CLI financial hub using JavaScript and Node.js. Integrated OpenAI API for a financial chatbot, with features like investment calculators, financial news, and educational resources.",
            link: "https://github.com/nicholas-tayag/MoneyBuddyCLI",
        },
        {
            title: "ProgChamp",
            technologies: "HTML/CSS, C++, JavaScript, REST API",
            description:
                "Developed a platform to visualize programming language usage across GitHub repositories. Integrated GitHub's REST API to access 100,000+ data points for dynamic data visualization and interaction.",
            link: "https://github.com/nicholas-tayag/ProgChamp",
        },
    ];

    return (
        <div
            id="portfolio"
            className="section"
            style={{
                padding: "4rem 2rem",
                backgroundColor: "#1b1b2f",
                color: "#ffffff",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                }}
            >
                Portfolio
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#2c2c2e",
                            borderRadius: "10px",
                            padding: "1.5rem",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                        }}
                        className="project-card"
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "translateY(-10px)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                        }
                    >
                        <h2
                            style={{
                                margin: "0 0 0.5rem 0",
                                fontSize: "1.5rem",
                                color: "#3498db",
                            }}
                        >
                            {project.title}
                        </h2>
                        <h3
                            style={{
                                margin: "0 0 1rem 0",
                                fontSize: "1.2rem",
                                color: "#ffffff",
                            }}
                        >
                            {project.technologies}
                        </h3>
                        <p
                            style={{
                                margin: "0 0 1rem 0",
                                lineHeight: "1.6",
                                color: "#dcdde1",
                            }}
                        >
                            {project.description}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                marginTop: "1rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: "#3498db",
                                color: "#ffffff",
                                textDecoration: "none",
                                borderRadius: "5px",
                                transition: "background-color 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#217dbb")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "#3498db")
                            }
                        >
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
