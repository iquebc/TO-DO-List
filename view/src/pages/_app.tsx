import { AlertProvider } from "../data/context/AlertContext";
import { UserProvider } from "../data/context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AlertProvider>
  );
}

export default MyApp;
