import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

export default function MainRoute(){

    return(
        <Route>
            <Routes path="/contact" element={<Footer/>}></Routes>
        </Route>
    )
}