import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { useUser } from "./useUser";

export const socket = io(import.meta.env.VITE_API_URL);
export const tasksocket = io(import.meta.env.VITE_API_URL + "/tasks");

tasksocket.on("assignedtoyou", (data) => {
  toast.info("Task Assigned to you");
});

export const SocketContext = createContext(null);

export default function SocketProvider({ children }) {
  const { user } = useUser();
  useEffect(() => {
    if (user.userId) {
      tasksocket.emit("user", user.userId);
    }
    // return () => {
    //   if (socket?.connected) socket.disconnect();
    // };
  }, [user]);

  return (
    <SocketContext.Provider value={socket}> {children}</SocketContext.Provider>
  );
}
