import { redirect } from "react-router-dom"
import { AppRouter } from "./routes"
import "./App.css"
import { UserProvider } from "./modules/user"
import { ThemeProvider } from "./modules/theme"
import { useEffect } from "react"

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
