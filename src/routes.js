import React from "react";
import MVisaoGeral from "./pages/motorista/visaoGeral/VisaoGeral";
import MTrajetos from "./pages/motorista/trajetos/Trajetos";
import MClientes from "./pages/motorista/clientes/Clientes";
import MClientesClienteId from "./pages/motorista/clientes/id/ClienteId";
import MPagamentos from "./pages/motorista/pagamentos/Pagamentos";
import RDependentes from "./pages/responsavel/dependentes/Dependentes";
import RTempoReal from "./pages/responsavel/tempo_real/TempoReal";
import RPagamentos from "./pages/responsavel/pagamentos/Pagamentos";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";

function Rotas() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/motorista/visao-geral" element={<MVisaoGeral />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
