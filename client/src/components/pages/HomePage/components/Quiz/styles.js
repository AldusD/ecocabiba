import enums from "../../../../../enums";

export default {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  container: {
    backgroundColor: enums.COLORS.CARD_BG,
    borderRadius: "16px",
    padding: "24px",
    maxWidth: "600px",
    margin: "40px auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  optionButton: {
    border: "none",
    borderRadius: "12px",
    padding: "12px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  feedback: {
    marginTop: "16px",
    fontSize: "18px",
  },
  progress: {
    marginTop: "20px",
    color: enums.COLORS.PRIMARY_TEXT,
    fontSize: "14px",
  },
};