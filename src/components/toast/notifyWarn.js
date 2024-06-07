import toast from "react-hot-toast";

export const notifyWarn = (title, message) =>
  toast(`${title.toUpperCase()} \n ${"⚠️"} ${message}`, {
    position: "top-right",
    style: {
      borderRadius: "10px",
      background: "#FFA500",
      color: "#fff",
    },
  });

export default notifyWarn;
