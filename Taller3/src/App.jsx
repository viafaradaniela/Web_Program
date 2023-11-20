/* Taller #3 - Integrantes: Daniela Viafara Delagado (A00372426), Rossy Cecilia Hurtado Barros (A00372572)*/
import "./App.css"
import { AppRouter } from "./AppRouter";
import { AuthContextProvider } from "./auth/context/AuthContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  )
}

export default App;