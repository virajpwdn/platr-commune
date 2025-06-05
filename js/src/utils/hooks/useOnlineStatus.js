import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Create a contract -> what will be input and output
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {

    window.addEventListener("offline", () => {
        console.log("You are Offline");
        setOnlineStatus(false);
      });

    window.addEventListener("online", () => {
      console.log("You are Online");
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
