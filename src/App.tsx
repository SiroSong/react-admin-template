import { redirect } from "react-router-dom"
import { AppRouter } from "./routes"
import "./App.css"
import { UserProvider } from "./providers/user"
import { ThemeProvider } from "./providers/theme"
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
