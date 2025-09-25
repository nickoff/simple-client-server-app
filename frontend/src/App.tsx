import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./components/HomePage"
import { SendMessagePage } from "./components/SendMessagePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/message' element={<SendMessagePage />} />
      </Routes >
    </BrowserRouter>
  )
}

export default App
