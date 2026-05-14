
import Router from "./routes/Router"
import { GlobalProviders } from "./providers/global/GlobalProviders"
function App() {
  return (
    <>
      <GlobalProviders>
        <Router />
      </GlobalProviders>
    </>
  )
}

export default App