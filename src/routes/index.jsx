import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Header } from "../components/Header"
import { ContainerRouter } from "./style"
import { Pedidos } from "../pages/Pedidos"

export const RoutesApp = () => {
    return (
        <>

            <BrowserRouter>
            <ContainerRouter>

            
            <Header />
                <Routes>
                    <Route exact path="/" element={<Dashboard />}/>
                    <Route path="/pedidos" element={<Pedidos />}/>
                </Routes>
            </ContainerRouter>
            </BrowserRouter>

        </>
    )
}