import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import HomePage from "../pages/homePage";
import { Route, Routes, useLocation } from "react-router-dom";
import {

    HOME_PAGE,
  
} from "../constants/routePaths";





function RoutesComponent() {
    const loc = useLocation();
    return (
        <div>
            {
                    <>
                        <Header />
                        <Routes>
                            <Route exact path={HOME_PAGE} element={<HomePage />} />

                        </Routes>
                        <Footer />
                    </>
            }
        </div>
    );
}

export default RoutesComponent;
