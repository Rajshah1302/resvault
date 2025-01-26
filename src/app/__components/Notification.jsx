"use client";

import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Notification() {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // This function would be called from other components to show notifications
  const showNotification = (msg) => {
    setMessage(msg);
  };

  if (!isVisible) return null;

  return (
    <Alert className="fixed bottom-4 right-4 w-96 bg-white shadow-lg border border-gray-200 rounded-lg">
      <AlertTitle className="text-gray-800">Notification</AlertTitle>
      <AlertDescription className="text-gray-600">{message}</AlertDescription>
    </Alert>
  );
}
