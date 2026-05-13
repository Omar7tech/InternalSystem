import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"
import Nav from "@/components/nav"

function App({ children }: { children?: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Nav />
      {children}
    </ThemeProvider>
  )
}

export default App