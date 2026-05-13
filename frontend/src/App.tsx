import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"

function App({ children }: { children?: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App