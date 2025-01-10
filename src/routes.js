import Favoritos from "./pages/Favoritos"
import NotFound from "./pages/NotFound";
import PaginaBase from "./pages/PaginaBase";
import Player from "./pages/Player";
import Inicio from "./pages/Inicio"
const { BrowserRouter, Routes, Route } = require("react-router-dom");


function AppRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}></Route>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
        </BrowserRouter>
        );
    }

export default AppRoutes;