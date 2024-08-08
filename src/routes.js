import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";
import CadastroMotorista from "./pages/cadastro/CadastroMotorista/CadastroMotorista";
import CadastroResponsavel from "./pages/cadastro/CadastroResponsavel/CadastroResponsavel";
import PGLogin from "./pages/login/Login";
import MClientes from "./pages/motorista/clientes/Clientes";
import MClientesClienteId from "./pages/motorista/clientes/id/ClienteId";
import MPagamentos from "./pages/motorista/pagamentos/Pagamentos";
import MPerfil from "./pages/motorista/perfil/Perfil";
import MTrajetos from "./pages/motorista/trajetos/Trajetos";
import MVisaoGeral from "./pages/motorista/visaoGeral/VisaoGeral";
import NotFound from "./pages/notFound/NotFound";
import RDependentes from "./pages/responsavel/dependentes/Dependentes";
import RPagamentos from "./pages/responsavel/pagamentos/Pagamentos";
import RTempoReal from "./pages/responsavel/tempo_real/TempoReal";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PGLogin />} />
          <Route path="/motorista/visao-geral" element={<MVisaoGeral />} />
          <Route path="/motorista/perfil" element={<MPerfil />} />
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
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route
            path="/cadastrar/responsavel"
            element={<CadastroResponsavel />}
          />
          <Route path="/cadastrar/motorista" element={<CadastroMotorista />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rotas;
