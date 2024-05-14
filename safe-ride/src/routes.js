import React from "react";
import MTrajetos from "./pages/motorista/trajetos/Trajetos";
import MClientes from "./pages/motorista/clientes/Clientes";
import MPagamentos from "./pages/motorista/pagamentos/Pagamentos";
import RClientes from "./pages/responsavel/clientes/Clientes";
import RTempoReal from "./pages/responsavel/tempo_real/TempoReal";
import RPagamentos from "./pages/responsavel/pagamentos/Pagamentos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/motorista/trajetos" element={<MTrajetos />} />
          <Route path="/motorista/clientes" element={<MClientes />} />
          <Route path="/motorista/pagamentos" element={<MPagamentos />} />
          <Route path="/responsavel/clientes" element={<RClientes />} />
          <Route path="/responsavel/trajetos" element={<RTempoReal />} />
          <Route path="/responsavel/pagamentos" element={<RPagamentos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
