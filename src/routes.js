import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro/Cadastro";
import CadastroMotorista from "./pages/cadastro/CadastroMotorista/CadastroMotorista";
import CadastroResponsavel from "./pages/cadastro/CadastroResponsavel/CadastroResponsavel";
import MVisaoGeral from "./pages/motorista/visaoGeral/VisaoGeral";
import MPerfil from "./pages/motorista/perfil/Perfil";
import MTrajetos from "./pages/motorista/trajetos/Trajetos";
import MClientes from "./pages/motorista/clientes/Clientes";
import MClientesClienteId from "./pages/motorista/clientes/id/ClienteId";
import MPagamentos from "./pages/motorista/pagamentos/Pagamentos";
import NotFound from "./pages/notFound/NotFound";
import RDependentes from "./pages/responsavel/dependentes/Dependentes";
import RPagamentos from "./pages/responsavel/pagamentos/Pagamentos";
import RTempoReal from "./pages/responsavel/tempo_real/TempoReal";
import PGLogin from "./pages/login/Login";
import Dependentes from "./pages/responsavel/dependentes/Dependentes";
import PerfilDependente from "./pages/responsavel/dependentes/perfilDependente/PerfilDependente";
import CadastroDependente from "./pages/responsavel/dependentes/cadastroDependente/CadastroDependente";
import EditarDependente from "./pages/responsavel/dependentes/editarDependente/EditarDependente";
import PerfilMotorista from "./pages/responsavel/dependentes/perfilMotorista/PerfilMotorista";
import EncontrarMotorista from "./pages/responsavel/dependentes/encontrarMotorista/EncontrarMotorista";

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
          <Route path="/responsavel/dependentes" element={<Dependentes />} />
          <Route path="/responsavel/dependentes/:id" element={<PerfilDependente />} />
          <Route path="/responsavel/dependentes/cadastrar" element={ <CadastroDependente /> } />
          <Route path="/responsavel/dependentes/:id/editar" element={ <EditarDependente /> } />
          <Route path="/responsavel/dependentes/:id/motorista/:id" element={ <PerfilMotorista /> } />
          <Route path="/responsavel/dependentes/:id/encontrar-motorista" element={ <EncontrarMotorista /> } />
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
