const Experience = () => {
    const experiences = [
        {
            title: "Software Developer Intern",
            company: "Florida Community Innovation Foundation",
            date: "May 2024 - August 2024",
            description: "Developed scalable web applications using the MERN stack and implemented dynamic features for the Florida Resource Map, which serves over 2000+ users.",
        },
        {
            title: "Undergraduate Researcher",
            company: "University of North Florida",
            date: "January 2024 - May 2024",
            description: "Led the deciphering and implementation of existing codebases for ongoing research projects with a focus on optimization and scalability.",
        },
        {
            title: "Assistant Coach",
            company: "SJSSL Shearwater Sharks",
            date: "August 2023 - December 2023",
            description: "Coached and mentored young athletes, focusing on teamwork and strategy while fostering a supportive and growth-oriented environment.",
        },
    ];

    return (
        <div
            id="experience"
            className="section"
            style={{
                padding: "4rem 2rem",
                backgroundColor: "#f5f5f7",
                color: "#2c2c2e",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                    fontWeight: "bold",
                    color: "#1b1b2f",
                }}
            >
                Experience
            </h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    maxWidth: "800px",
                    margin: "0 auto",
                }}
            >
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                            padding: "1.5rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.2s",
                        }}
                        className="experience-card"
                    >
                        <h2
                            style={{
                                margin: "0 0 0.5rem 0",
                                fontSize: "1.5rem",
                                color: "#1b1b2f",
                            }}
                        >
                            {experience.title}
                        </h2>
                        <h3
                            style={{
                                margin: "0 0 1rem 0",
                                fontSize: "1.2rem",
                                color: "#3498db",
                            }}
                        >
                            {experience.company}
                        </h3>
                        <p
                            style={{
                                margin: "0 0 0.5rem 0",
                                fontStyle: "italic",
                                color: "#7f8c8d",
                            }}
                        >
                            {experience.date}
                        </p>
                        <p style={{ margin: 0, lineHeight: "1.6" }}>
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
