import { createContext, useEffect, useState } from "react";
import Alert from "../../components/alert";
import { AlertModel } from "../../model/alert";

interface IAlertContext {
  alert?: AlertModel;
  showSuccessAlert?: (message: string) => void;
  showErrorAlert?: (message: string) => void;
  showWarningAlert?: (message: string) => void;
  showInfoAlert?: (message: string) => void;
  closeAlert?: () => void;
}

const AlertContext = createContext<IAlertContext>({});

export function AlertProvider(props) {
  const [alert, setAlert] = useState<AlertModel>(null);

  function showSuccessAlert(message: string) {
    setAlert(AlertModel.successMessage("Sucesso!", message));
  }
  function showErrorAlert(message: string) {
    setAlert(AlertModel.errorMessage("Erro!", message));
  }
  function showWarningAlert(message: string) {
    setAlert(AlertModel.warningMessage("Atenção!", message));
  }
  function showInfoAlert(message: string) {
    setAlert(AlertModel.infoMessage("OK!", message));
  }

  function closeAlert() {
    setAlert(null);
  }

  useEffect(() => {
    const limparMensagem = setTimeout(() => {
      setAlert(null);
    }, 5000);

    return () => {
      clearTimeout(limparMensagem);
    };
  }, [alert]);

  return (
    <AlertContext.Provider
      value={{
        alert,
        showSuccessAlert,
        showErrorAlert,
        showWarningAlert,
        showInfoAlert,
        closeAlert,
      }}
    >
      <Alert></Alert>
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertContext;
