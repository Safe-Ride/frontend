import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";
import MClientes from "./pages/motorista/clientes/Clientes";
import MClientesClienteId from "./pages/motorista/clientes/id/ClienteId";
import MPagamentos from "./pages/motorista/pagamentos/Pagamentos";
import MTrajetos from "./pages/motorista/trajetos/Trajetos";
import NotFound from "./pages/notFound/NotFound";
import RDependentes from "./pages/responsavel/dependentes/Dependentes";
import RPagamentos from "./pages/responsavel/pagamentos/Pagamentos";
import NotFound from "./pages/notFound/NotFound";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/motorista/trajetos" element={<MTrajetos />} />
          <Route path="/motorista/clientes" element={<MClientes />} />
          <Route
            path="/motorista/clientes/:id"
            element={<MClientesClienteId />}
          />
          <Route path="/motorista/pagamentos" element={<MPagamentos />} />
          <Route path="/responsavel/clientes" element={<RDependentes />} />
          <Route path="/responsavel/trajetos" element={<RTempoReal />} />
          <Route path="/responsavel/pagamentos" element={<RPagamentos />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
