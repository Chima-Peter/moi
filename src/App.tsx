import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./apps/error_page"

const App = () => {
  return (
      <BrowserRouter basename={import.meta.env.PROD ? '/repo_name' : '/'}>
         <Routes>
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}

export default App;


