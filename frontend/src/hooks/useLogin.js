import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const UseLogin = async (username, password) => {
  const navigate = useNavigate();
  const request = {
    username: username,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  };

  try {
    const response = await fetch(
      "http://localhost:8080/api/v2/users/login",
      requestOptions
    );
    if (response.ok) {
      const res = await response.json();
      const token = res.token;
      if (token) {
        toast.success("you are loggined");
        localStorage.setItem("token", token);
        setTimeout(() => {
          navigate("/");
        }, 5000);
        return;
      }
      return;
    }
  } catch (error) {
    throw error;
  }
};
