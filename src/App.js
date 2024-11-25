import { Header, Footer } from "./components"
import { AllRoutes } from "./routes/AllRoutes"

const App = () => {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
