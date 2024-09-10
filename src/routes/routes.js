import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Cadastro from "../pages/cadastro/Cadastro";
import CadastroMotorista from "../pages/cadastro/CadastroMotorista/CadastroMotorista";
import CadastroResponsavel from "../pages/cadastro/CadastroResponsavel/CadastroResponsavel";
import MVisaoGeral from "../pages/motorista/visaoGeral/VisaoGeral";
import MTrajetos from "../pages/motorista/trajetos/Trajetos";
import MClientes from "../pages/motorista/clientes/Clientes";
import MClientesClienteId from "../pages/motorista/clientes/id/ClienteId";
import MPagamentos from "../pages/motorista/pagamentos/Pagamentos";
import NotFound from "../pages/notFound/NotFound";
import RDependentes from "../pages/responsavel/dependentes/Dependentes";
import RPagamentos from "../pages/responsavel/pagamentos/Pagamentos";
import ResponsavelConversas from "../pages/responsavel/conversa/Conversas";
import ResponsavelConversaMotorista from "../pages/responsavel/conversa/mensagem/ConversaMotorista";
import ResponsavelPagamentosDependente from "../pages/responsavel/pagamentos/pagamentos-motoristas/PagamentosMotoristas";
import MotoristaPagamentosResponsaveis from "../pages/motorista/pagamentos/pagamentosResponsaveis/PagamentosResponsaveis";
import MotoristaConversa from "../pages/motorista/conversa/Conversa";
import MotoristaPerfil from "../pages/motorista/perfil/Perfil";

import RTempoReal from "../pages/responsavel/tempo_real/TempoReal";
import PGLogin from "../pages/login/Login";
import Dependentes from "../pages/responsavel/dependentes/Dependentes";
import PerfilDependente from "../pages/responsavel/dependentes/perfil-dependente/PerfilDependente";
import EditarDependente from "../components/responsavel/dependentes/editarDependente/EditarDependente";
import CadastroDependente from "../pages/responsavel/dependentes/cadastro-dependente/CadastroDependente";
import PerfilMotorista from "../pages/responsavel/dependentes/perfil-motorista/PerfilMotorista";
import EncontrarMotorista from "../components/responsavel/dependentes/encontrarMotorista/EncontrarMotorista";
import Login from "../pages/login/Login";
import Motorista from "../components/responsavel/pagamentos/Motorista";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/responsavel" element={<CadastroResponsavel />} />
        <Route path="/cadastro/motorista" element={<CadastroMotorista />} />

        <Route
          path="/motorista/visao-geral"
          element={
            <PrivateRoute>
              <MVisaoGeral />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/trajetos"
          element={
            <PrivateRoute>
              <MTrajetos />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/clientes"
          element={
            <PrivateRoute>
              <MClientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/clientes/:id"
          element={
            <PrivateRoute>
              <MClientesClienteId />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/pagamentos"
          element={
            <PrivateRoute>
              <MPagamentos />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/pagamentos/responsavel/:id"
          element={
            <PrivateRoute>
              <MotoristaPagamentosResponsaveis />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/conversas"
          element={
            <PrivateRoute>
              <MotoristaConversa />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/perfil"
          element={
            <PrivateRoute>
              <MotoristaPerfil />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/clientes"
          element={
            <PrivateRoute>
              <RDependentes />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/tempo-real"
          element={
            <PrivateRoute>
              <RTempoReal />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/conversas"
          element={
            <PrivateRoute>
              <ResponsavelConversas />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/conversas/:id"
          element={
            <PrivateRoute>
              <ResponsavelConversaMotorista />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/pagamentos"
          element={
            <PrivateRoute>
              <RPagamentos />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes"
          element={
            <PrivateRoute>
              <Dependentes />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/:id"
          element={
            <PrivateRoute>
              <PerfilDependente />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/cadastrar"
          element={
            <PrivateRoute>
              <CadastroDependente />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/:id/editar"
          element={
            <PrivateRoute>
              <EditarDependente />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/:id/motorista"
          element={
            <PrivateRoute>
              <PerfilMotorista />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/:id/encontrar-motorista"
          element={
            <PrivateRoute>
              <EncontrarMotorista />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/responsavel/pagamentos/dependente/:id"
          element={
            <PrivateRoute>
              <ResponsavelPagamentosDependente />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
