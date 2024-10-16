import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOflline = () => {
      setIsOnline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOflline);

    //* CLEAN-UP FUNCTION
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOflline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
