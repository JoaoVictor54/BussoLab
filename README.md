# Bússolab — Orientação de Carreira, Trilhas e Mentorias

Aplicação web funcional desenvolvida com **HTML, CSS e JavaScript puro** integrada à **API genérica da Seed** para o Squad **`bussolab`**.

---

## Sobre a Solução

### O Problema
Jovens, estudantes e pessoas em transição de carreira frequentemente enfrentam excesso de conteúdo disperso na internet, insegurança sobre qual área combina com seu perfil e falta de acesso a profissionais experientes para orientação prática.

### Nossa Solução
O **Bússolab** reúne em um fluxo simples e responsivo:
1. **Quiz de Afinidade Vocacional (5 perguntas):** calcula e recomenda as 3 trilhas mais compatíveis com o perfil do usuário.
2. **Catálogo de Trilhas por Etapas:** 8 áreas profissionais e 29 sub-áreas/trilhas interativas (5 etapas e 15 tópicos cada), com barra de progresso persistida no navegador (`localStorage`).
3. **Rede de Mentorias integrada à API:** solicitação de mentoria, painel para mentores gerenciarem requisições, cadastro/listagem de mentores voluntários e chat de mentoria.

### ODS Impactadas (ONU)
- **ODS 4 — Educação de Qualidade:** acesso organizado e gratuito a roteiros objetivos de aprendizagem.
- **ODS 8 — Trabalho Decente e Crescimento Econômico:** apoio à preparação prática para estágios, primeiras vagas e transição de carreira.
- **ODS 10 — Redução das Desigualdades:** democratização do acesso à orientação profissional e mentoria.

### Público-Alvo
- Estudantes buscando o primeiro estágio ou direcionamento técnico.
- Profissionais em transição de carreira.
- Recém-formados estruturando portfólio e entrada no mercado.
- Profissionais voluntários que desejam atuar como mentores.

---

## Integração com a API da Seed

- **Base URL:** `https://psel-api.vercel.app/api/bussolab`
- **Cliente centralizado:** `js/api.js` (utilizando `fetch` nativo, sem API key nem autenticação, conforme especificação da Seed).
- **Aviso de privacidade:** os dados da API de teste são públicos. Utilize apenas **nomes e dados fictícios**.

### Endpoints Utilizados

| Coleção | Método | Endpoint | Tela(s) | Finalidade |
| --- | --- | --- | --- | --- |
| `requisicoes` | `GET` | `/api/bussolab/requisicoes` | Pedir Mentoria, Mentorias, Chat | Listar requisições de mentoria e conversas |
| `requisicoes` | `POST` | `/api/bussolab/requisicoes` | Pedir Mentoria | Cadastrar nova requisição e atualizar a tela automaticamente |
| `requisicoes` | `PATCH` | `/api/bussolab/requisicoes/{id}` | Mentorias | Atualizar status para `Aceita` ou `Recusada` *(bônus)* |
| `requisicoes` | `DELETE` | `/api/bussolab/requisicoes/{id}` | Pedir Mentoria, Mentorias | Cancelar/excluir requisição *(bônus)* |
| `mentores` | `GET` | `/api/bussolab/mentores` | Cadastro de Mentor | Listar mentores voluntários cadastrados |
| `mentores` | `POST` | `/api/bussolab/mentores` | Cadastro de Mentor | Cadastrar novo mentor e atualizar a lista automaticamente |
| `mentores` | `PATCH` | `/api/bussolab/mentores/{id}` | Cadastro de Mentor | Editar informações do perfil de um mentor *(bônus)* |
| `mentores` | `DELETE` | `/api/bussolab/mentores/{id}` | Cadastro de Mentor | Remover cadastro de mentor *(bônus)* |
| `mensagens` | `GET` | `/api/bussolab/mensagens` | Chat de Mentoria | Listar mensagens (filtradas em JS por `requisicaoId`) |
| `mensagens` | `POST` | `/api/bussolab/mensagens` | Chat de Mentoria | Enviar nova mensagem (como Mentor ou Mentorado) |

### Modelos de Dados (JSON)

#### `requisicoes`
```json
{
  "autor": "Ana Oliveira",
  "area": "Front-end",
  "situacao": "Estudante",
  "objetivo": "Conquistar meu primeiro estágio em tecnologia",
  "mensagem": "Por onde começar com HTML, CSS e JavaScript?",
  "formato": "Chat",
  "status": "Em análise"
}
```

#### `mentores`
```json
{
  "nome": "Carla Mendes",
  "area": "Desenvolvimento",
  "experiencia": "6 anos",
  "dias": "Terça e Quinta",
  "horario": "Noite (18h30 às 22h)",
  "documentosSimulados": ["Certificado_Pos_Graduacao.pdf"]
}
```

#### `mensagens`
```json
{
  "requisicaoId": "id-da-requisicao",
  "remetente": "mentor",
  "texto": "Olá! Vamos montar seu plano de estudos."
}
```
*(Os campos `id` e `createdAt` são gerados automaticamente pelo servidor).*

---

## Bônus Implementados

- **`PATCH` e `DELETE`** completos integrados na interface (aceitar/recusar/excluir requisições e remover mentores).
- **Filtros e busca em tempo real em JavaScript** sobre os dados vindos da API (status e busca textual no painel de mentorias, filtro de mentores por nome/área, busca de conversas no chat e filtro de profissões).
- **Trilhas e Quiz 100% dinâmicos** cobrindo todas as 8 profissões e 29 sub-áreas.
- **Responsividade completa** (desktop, tablet e mobile) e escala tipográfica padronizada via variáveis CSS.

---

## O que é Simulado / Visão de Futuro

Respeitando as limitações da API genérica do desafio:
- **Login (`login/index.html`):** simulado localmente via `localStorage` apenas para exibir o nome fictício no cabeçalho e pré-preencher formulários (não há autenticação nem contas privadas).
- **Upload de Diplomas/Certificados (`tela_cadastro_mentor/index.html`):** interface demonstrativa que registra apenas o nome dos arquivos em texto (`documentosSimulados`), sem upload binário.
- **Notificações em tempo real e videochamada integrada:** previstos como visão de futuro.

---

## Estrutura do Projeto

```text
BussoLab/
├── index.html                           # Página inicial (Hero, Como funciona, resumo Sobre a Solução, Footer)
├── styles.css                           # Folha de estilos global, tokens de design, tipografia e responsividade
├── README.md                            # Documentação do projeto
├── js/
│   ├── api.js                           # Cliente HTTP (GET, POST, PATCH, DELETE) e formatadores
│   ├── shared.js                        # Utilitários compartilhados (perfil simulado no header)
│   └── trilhas-data.js                  # Catálogo das 8 profissões, 29 trilhas e quiz de 5 perguntas
├── tela_sobre/index.html                # Página dedicada "Sobre a Solução" (Problema, ODS, Público-alvo)
├── tela_de_quiz/index.html              # Quiz interativo de carreira (5 perguntas)
├── tela_de_resultado/index.html         # Resultado dinâmico com afinidade das 3 trilhas recomendadas
├── tela_escolha_profissao/index.html    # Seleção e busca entre as 8 áreas profissionais
├── tela_escolha_area/index.html         # Seleção dinâmica das sub-áreas da profissão escolhida
├── tela_trilha/index.html               # Mapa interativo da trilha com progresso salvo no localStorage
├── tela_pedir_mentoria/index.html       # Formulário (POST) + lista de requisições recentes (GET/DELETE)
├── tela_requisicao_enviada/index.html   # Resumo visual da requisição enviada
├── tela_mentorias/index.html            # Painel de mentorias (GET, filtros/busca JS, PATCH e DELETE)
├── tela_cadastro_mentor/index.html      # Cadastro (POST) + lista e filtro de mentores (GET/DELETE)
├── tela_mentoria_chat/index.html        # Chat integrado às requisições e mensagens (GET/POST)
├── login/index.html                     # Tela de identificação simulada
├── home/index.html                      # Redirecionamento de compatibilidade para index.html
└── tela_trilha_desenvolvimento_frontend/index.html  # Redirecionamento para trilha Front-end
```

---

## Tecnologias Utilizadas

- **HTML5** semântico e acessível
- **CSS3** (Custom Properties, Grid, Flexbox e Media Queries)
- **JavaScript (ES6+)** com `Fetch API`, `async/await` e `localStorage`
- **Seed API** (`https://psel-api.vercel.app/api/bussolab/...`)

---

## Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd BussoLab
   ```
2. Abra `index.html` com uma extensão como **Live Server** (VS Code) ou execute um servidor local simples:
   ```bash
   npx serve .
   ```
3. Acesse no navegador e teste os fluxos de Trilhas, Quiz, Pedir Mentoria, Painel de Mentorias, Cadastro de Mentor e Chat.

## Publicação no GitHub Pages

1. Acesse **Settings → Pages** no repositório do GitHub.
2. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.
3. Salve e aguarde a URL pública gerada pelo GitHub Pages.
