# Angular Expense Portal

Simulação de um portal de gestão de despesas e reembolsos desenvolvido com **Angular 17**, **Angular Material** e **TypeScript**. A aplicação permite que usuários gerenciem suas solicitações de reembolso com funcionalidades de filtro, aprovação e rejeição de requisições.
Inclui autenticação fake, gestão de solicitações e integração com API mockada utilizando json-server.

## 📋 Sobre o Projeto

O **Angular Expense Portal** é uma aplicação web moderna que facilita:
- Visualização de solicitações de reembolso em uma tabela interativa
- Filtro dinâmico de status (Pendente, Aprovado, Rejeitado)
- Aprovação e rejeição de reembolsos pendentes
- Interface responsiva e intuitiva com Material Design
- Autenticação de usuários com navbar personalizável

## 🛠️ Tecnologias Utilizadas

- **Angular** v17.0.5
- **Angular Material** (Tabelas, Botões, Ícones, Overlays)
- **TypeScript**
- **json-server** (mock API)
- **SCSS** (com variáveis de tema)
- **RxJS** (Reactive Programming)
- **Karma** (Unit Testing)

## 📁 Estrutura do Projeto
src/
├── app/
│ ├── core/
│ │ ├── guards/
│ │ └── styles/
│ │ └── _colors.scss
│ ├── features/
│ │ ├── reimbursements/
│ │ │ ├── pages/
│ │ │ │ └── reimbursement-list/
│ │ │ │ ├── reimbursement-list.component.html
│ │ │ │ ├── reimbursement-list.component.ts
│ │ │ │ └── reimbursement-list.component.scss
│ │ │ └── services/
│ ├── shared/
│ │ ├── layout/
│ │ │ ├── navbar/
│ │ │ │ ├── navbar.component.html
│ │ │ │ ├── navbar.component.ts
│ │ │ │ └── navbar.component.scss
│ └── app.component.ts
├── assets/
└── styles/

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** v18+ instalado
- **Angular CLI** v17+ instalado globalmente

```bash
npm install -g @angular/cli
npm install
npm run mock-api
npm start
```

## 🎯 Funcionalidades Principais
Página de Reembolsos
- Tabela de Dados: Exibe lista de reembolsos com colunas de Título, Valor, Data e Status
- Filtro de Status: Dropdown dinâmico para filtrar por status (Pendente, Aprovado, Rejeitado)
- Ações Contextuais: Botões de Aprovar/Rejeitar disponíveis apenas para reembolsos pendentes
- Inserir Reembolso: Botão flutuante para criar novo reembolso
Navbar
- Logo e Marca: Identificação visual da aplicação
- Informações do Usuário: Email e função exibidos no header
- Botão de Logout: Desconexão da aplicação

## 🔒 Autenticação
A aplicação inclui guards para proteger rotas. Implemente a autenticação conforme necessário em src/app/core/guards/.

### Mock API

Durante o desenvolvimento foi utilizado json-server para simular uma API REST.

Para a versão publicada no Netlify, os dados são servidos através de arquivos JSON em /assets/mock.

## 📄 Licença
Este projeto é de uso interno.

Desenvolvido usando Angular 17

## Deploy do projeto

https://inspiring-cannoli-964e62.netlify.app/
