import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./pages/error_page"
import HomePage from "./pages/home_page";

const App = () => {
  return (
      <BrowserRouter basename={import.meta.env.PROD ? '/mother_of_invention' : '/'}>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}

export default App;


