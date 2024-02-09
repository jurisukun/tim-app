import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Oops! The page you are looking for does not exist.
      </p>
      <p style={styles.text}>
        You can go back to the <Link to="/dashboard">homepage</Link>.
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "48px",
    color: "#333",
  },
  text: {
    fontSize: "18px",
    color: "#666",
  },
};
