import Programmer from "./programmer";

const Hero = () => {
    return (
        <div
            id="hero"
            style={{
                width: "100%",
                height: "calc(100vh - 60px)", // Full viewport minus navbar height
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Text Content */}
            <div
                style={{
                    zIndex: 10,
                    textAlign: "center",
                    position: "absolute",
                    top: "25%", // Place text slightly above the center
                }}
            >
                <h1
                    style={{
                        fontSize: "4rem",
                        fontWeight: "700",
                        margin: 0,
                        color: "#ffffff",
                        background: "linear-gradient(90deg, #3498db, #00cec9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                        letterSpacing: "0.05em",
                    }}
                >
                    Software Developer
                </h1>
                <p
                    style={{
                        fontSize: "1.8rem",
                        marginTop: "1rem",
                        color: "#dcdde1",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        fontWeight: "500",
                    }}
                >
                    Nicholas Tayag
                </p>
            </div>

            {/* 3D Model */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Programmer />
            </div>
        </div>
    );
};

export default Hero;
