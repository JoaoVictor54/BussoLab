# 🧭 Bússolab — Orientação de Carreira, Trilhas e Mentorias

> Clareza e futuro para quem está perdido profissionalmente.

Aplicação web funcional desenvolvida com **HTML, CSS e JavaScript puro**, integrada à **API genérica da Seed** para o Squad **`bussolab`**.
Projeto do **PSEL 27.1 (Seed): 2º Desafio, Desenvolvimento do MVP + Apresentação Final**.

| | |
|---|---|
| 🌐 **Aplicação publicada (GitHub Pages)** | [COLE AQUI O LINK DO GITHUB PAGES] |
| 🎨 **Protótipo (Figma)** | [COLE AQUI O LINK DO FIGMA] |
| 🧩 **Concepção da solução (FigJam)** | [COLE AQUI O LINK DO FIGJAM] |
| 📓 **Página do Notion (MVP Contract)** | [COLE AQUI O LINK DO NOTION] |

---

## Sobre a Solução

### O Problema
Jovens, estudantes e pessoas em transição de carreira frequentemente enfrentam excesso de conteúdo disperso na internet, insegurança sobre qual área combina com seu perfil e falta de acesso a profissionais experientes para orientação prática.

**O que a nossa pesquisa mostrou.** Antes de construir, aplicamos um questionário com pessoas reais (**18 respostas**, sendo 14 universitários). A amostra é pequena, mas mostra um padrão claro:

| Pergunta | Resultado |
|---|---|
| Segurança sobre os próximos 6 meses (1 a 5) | Média **2,6**; 15 de 18 marcaram 3 ou menos |
| Impacto da falta de clareza no estresse e na ansiedade (1 a 10) | Média **7,4**; 13 de 17 respostas foram 7 ou mais |
| O que mais trava | Falta de contato com quem já trabalha na área (**9**); não saber aproveitar habilidades de outra área (**7**); medo financeiro de começar do zero (**7**); excesso de informação solta (**5**) |
| Barreira para conseguir mentoria | Custo alto (**9**); dificuldade de encontrar profissionais dispostos a ajudar (**4**); falta de tempo (**4**) |
| Conteúdo que já consomem | 15 de 18 fazem cursos online |

Em resumo: não falta conteúdo, **falta direção**, e o acesso a quem já está na área é caro ou difícil.

### Nossa Solução
O **Bússolab** funciona como um mapa para o próximo passo profissional e reúne, em um fluxo simples e responsivo:
1. **Quiz de Afinidade Vocacional (5 perguntas):** calcula e recomenda as 3 trilhas mais compatíveis com o perfil do usuário.
2. **Catálogo de Trilhas por Etapas:** 8 áreas profissionais e 29 sub-áreas/trilhas interativas (5 etapas e 15 tópicos cada), com barra de progresso persistida no navegador (`localStorage`).
3. **Rede de Mentorias integrada à API:** solicitação de mentoria, painel para mentores gerenciarem requisições, cadastro/listagem de mentores voluntários e chat de mentoria.

### ODS Impactadas (ONU)
- **ODS 4 — Educação de Qualidade (principal):** acesso organizado e gratuito a roteiros objetivos de aprendizagem.
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
- **Cliente centralizado:** `js/api.js`, com `fetch` nativo, sem API key nem autenticação, conforme a especificação da Seed. Ele expõe as funções de `GET`, `POST`, `PATCH` e `DELETE`, e o nome do squad fica em uma única constante.
- **Aviso de privacidade:** os dados da API de teste são públicos. Utilize apenas **nomes e dados fictícios**.
- **Segurança:** textos vindos da API são tratados com `escapeHtml` antes de aparecerem na página, evitando injeção de código.
- **Erros:** as chamadas usam `try/catch` e exibem mensagens amigáveis ao usuário.

### Como a integração funciona (exemplo: pedir uma mentoria)

1. A pessoa preenche o formulário em **Pedir Mentoria**.
2. O JavaScript envia um `POST /api/bussolab/requisicoes` com os dados em JSON.
3. A API grava o registro e devolve o objeto criado, com `id` e `createdAt` gerados pelo servidor.
4. A tela chama `GET /api/bussolab/requisicoes` e **atualiza a lista automaticamente**, sem recarregar a página.
5. Na tela **Mentorias**, o mentor vê a mesma requisição (`GET`), filtra e busca em JavaScript (a API não filtra no servidor) e a aceita ou recusa com `PATCH`.
6. Ao aceitar, os dois conversam no **Chat**: as mensagens são enviadas com `POST` em `mensagens` e listadas com `GET`, filtradas em JavaScript pelo `requisicaoId`.

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
*(Os campos `id` e `createdAt` são gerados automaticamente pelo servidor.)*

---

## Escopo do MVP

### Decisões de escopo
O grupo priorizou o núcleo da proposta: **orientar com trilhas e quiz** e **conectar a mentores**. Respeitamos os limites da API (sem login real, sem dados privados por pessoa, sem busca no servidor e sem upload de arquivos). O que dependia disso foi simulado ou ficou como visão de futuro.

| Funcionalidade | Situação |
|---|---|
| Quiz de afinidade e resultado com as 3 trilhas recomendadas | **Real**, em JavaScript no navegador |
| Catálogo de trilhas e progresso | **Real**: dados locais em `js/trilhas-data.js`, progresso no `localStorage` |
| Pedir mentoria, listar, aceitar/recusar e excluir requisições | **Real**, via API |
| Cadastro, listagem, edição e remoção de mentores | **Real**, via API |
| Chat de mentoria (mensagens entre mentor e mentorado) | **Real**, via API (sem tempo real) |
| Login | **Simulado** |
| Upload de diplomas e certificados | **Simulado** |
| Notificações em tempo real e videochamada | **Visão de futuro** |
| Progresso salvo por conta de usuário | **Visão de futuro** (a API não tem contas) |

### O que é simulado / visão de futuro
Respeitando as limitações da API genérica do desafio:
- **Login (`login/index.html`):** simulado localmente via `localStorage`, apenas para exibir o nome fictício no cabeçalho e pré-preencher formulários (não há autenticação nem contas privadas).
- **Upload de Diplomas/Certificados (`tela_cadastro_mentor/index.html`):** interface demonstrativa que registra apenas o nome dos arquivos em texto (`documentosSimulados`), sem upload binário.
- **Notificações em tempo real e videochamada integrada:** previstos como visão de futuro.

---

## Bônus Implementados

- **`PATCH` e `DELETE`** integrados na interface (aceitar, recusar e excluir requisições; editar e remover mentores).
- **Filtros e busca em tempo real em JavaScript** sobre os dados vindos da API (status e busca textual no painel de mentorias, filtro de mentores por nome/área, busca de conversas no chat) e filtro de profissões no catálogo.
- **Trilhas e quiz gerados em JavaScript** a partir de um catálogo local (`js/trilhas-data.js`) com as 8 profissões e 29 sub-áreas, sem depender da API.
- **Layout responsivo** para desktop, tablet e mobile, com `meta viewport`, media queries e escala tipográfica padronizada por variáveis CSS.

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
- **GitHub Pages** para a publicação

---

## Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone [URL-DO-REPOSITORIO]
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
4. Cole o link no topo deste README.

---

## Próximos Passos (Visão de Futuro)

- Login e contas reais, para salvar o progresso de cada pessoa.
- Match automático entre mentorado e mentor por área e disponibilidade.
- Chat em tempo real, videochamada e notificações.
- Upload real de diplomas e certificações.
- Trilhas atualizadas conforme as exigências do mercado.

---

## Equipe

| Integrante | Responsabilidades |
|---|---|
| [Nome 1] | [ex.: estrutura HTML e telas] |
| [Nome 2] | [ex.: CSS, responsividade e protótipo] |
| [Nome 3] | [ex.: integração com a API, quiz e README] |

---

Feito para o **PSEL 27.1 (Seed)** 💙
