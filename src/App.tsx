import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes,Route } from "react-router-dom" // to route to a new page
import InfoPage from "./pages/InfoPage.tsx" 

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element= {<HomePage/>}/>
                <Route path="/home" element = {<HomePage />} />
                <Route path="/info" element = {<InfoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App