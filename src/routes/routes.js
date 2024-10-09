import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/cadastro/Cadastro";
import CadastroMotorista from "../pages/cadastro/CadastroMotorista/CadastroMotorista";
import CadastroResponsavel from "../pages/cadastro/CadastroResponsavel/CadastroResponsavel";
import MClientes from "../pages/motorista/clientes/Clientes";
import MClientesClienteId from "../pages/motorista/clientes/id/ClienteId";
import MotoristaConversa from "../pages/motorista/conversa/Conversa";
import MPagamentos from "../pages/motorista/pagamentos/Pagamentos";
import MotoristaPagamentosResponsaveis from "../pages/motorista/pagamentos/pagamentosResponsaveis/PagamentosResponsaveis";
import MotoristaPerfil from "../pages/motorista/perfil/Perfil";
import MTrajetos from "../pages/motorista/trajetos/Trajetos";
import MVisaoGeral from "../pages/motorista/visaoGeral/VisaoGeral";
import NotFound from "../pages/notFound/NotFound";
import ResponsavelConversas from "../pages/responsavel/conversa/Conversas";
import ResponsavelConversaMotorista from "../pages/responsavel/conversa/mensagem/ConversaMotorista";
import RDependentes from "../pages/responsavel/dependentes/Dependentes";
import RPagamentos from "../pages/responsavel/pagamentos/Pagamentos";
import ResponsavelPagamentosDependente from "../pages/responsavel/pagamentos/pagamentos-motoristas/PagamentosMotoristas";
import VisaoGeralResponsavel from "../pages/responsavel/visaoGeralResponsavel/visaoGeralResponsavel";
import PrivateRoute from "./PrivateRoute";

import EditarDependente from "../components/responsavel/dependentes/editarDependente/EditarDependente";
import EncontrarMotorista from "../pages/responsavel/dependentes/encontrar-motorista/EncontrarMotorista";
import Login from "../pages/login/Login";

import RSolicitacoes from "../pages/responsavel/dependentes/solicitacoes/Solicitacoes";
import MSolicitacoes from "../pages/motorista/solicitacoes/Solicitacoes";
import MSolicitacao from "../pages/motorista/solicitacoes/Solicitacao";
import MotoristaConversaResponsavel from "../pages/motorista/conversa/mensagem/ConversaResponsavel";
import CadastroDependente from "../pages/responsavel/dependentes/cadastro-dependente/CadastroDependente";
import Dependentes from "../pages/responsavel/dependentes/Dependentes";
import PerfilDependente from "../pages/responsavel/dependentes/perfil-dependente/PerfilDependente";
import PerfilMotorista from "../pages/responsavel/dependentes/perfil-motorista/PerfilMotorista";
import RTempoReal from "../pages/responsavel/tempo_real/TempoReal";
import Cad_Trajeto from "../pages/motorista/trajetos/Cad_Trajeto";

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
          path="/motorista/solicitacoes"
          element={
            <PrivateRoute>
              <MSolicitacoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/motorista/solicitacoes/:id"
          element={
            <PrivateRoute>
              <MSolicitacao />
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
          path="/motorista/conversas/:id"
          element={
            <PrivateRoute>
              <MotoristaConversaResponsavel />
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
          path="/responsavel/visao-geral"
          element={
            <PrivateRoute>
              <VisaoGeralResponsavel />
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
              <RDependentes />
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
          path="/responsavel/dependentes/:idDependente/motorista/:idMotorista"
          element={
            <PrivateRoute>
              <PerfilMotorista encontrarMotorista />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/:idDependente/motorista/:idMotorista/solicitacao"
          element={
            <PrivateRoute>
              <RSolicitacoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsavel/dependentes/:idDependente/encontrar-motorista"
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
        <Route
          path="/motorista/trajetos/cadastro"
          element={
            <PrivateRoute>
              <Cad_Trajeto />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
