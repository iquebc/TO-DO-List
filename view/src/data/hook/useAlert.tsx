import { useState } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState("");

  function showAlert(message: string) {
    console.log('Mensagem Nova');
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }

  return [message, showAlert] as const;
};


