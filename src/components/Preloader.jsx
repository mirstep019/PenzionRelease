import { ClipLoader } from "react-spinners";

const Preloader = () => {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#1b1b1f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      zIndex: 9999
    }}>
      <ClipLoader color="#d2bd92" size={80} />
      <p style={{ color: "#d2bd92", marginTop: "20px", fontSize: "1.5rem" }}>
        Penzion Breuer
      </p>
    </div>
  );
};

export default Preloader;
