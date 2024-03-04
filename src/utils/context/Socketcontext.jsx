import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { useUser } from "./useUser";

export const socket = io("http://localhost:3000");

socket.on("assignedtoyou", (data) => {
  toast.info("Task Assigned to you");
});

export const SocketContext = createContext(null);

export default function SocketProvider({ children }) {
  const { user } = useUser();
  useEffect(() => {
    if (user.userId) {
      socket.emit("user", user.userId);
    }
    // return () => {
    //   if (socket?.connected) socket.disconnect();
    // };
  }, [user]);

  return (
    <SocketContext.Provider value={socket}> {children}</SocketContext.Provider>
  );
}
