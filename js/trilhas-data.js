/* =========================================================
   BÚSSOLAB — Catálogo Completo de Profissões, Trilhas e Quiz
========================================================= */

const BUSSOLAB_ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 7 3 12 8 17"/><polyline points="16 7 21 12 16 17"/><line x1="14" y1="5" x2="10" y2="19"/></svg>`,
  server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="5" width="16" height="5" rx="1.5"/><rect x="4" y="14" width="16" height="5" rx="1.5"/><circle cx="7.5" cy="7.5" r="0.8" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.8" fill="currentColor"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="3" width="10" height="18" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 3 21 8 12 13 3 8 12 3"/><polyline points="3 12 12 17 21 12"/><polyline points="3 16 12 21 21 16"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="9" rx="4.5"/><line x1="8" y1="11" x2="8" y2="14"/><line x1="6.5" y1="12.5" x2="9.5" y2="12.5"/><circle cx="15.5" cy="11.5" r="0.8" fill="currentColor"/><circle cx="17.5" cy="13.5" r="0.8" fill="currentColor"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 0 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c3.1 0 5.6-2.5 5.6-5.6C23 5.5 18.1 3 12 3z"/><circle cx="7.5" cy="11.5" r="1" fill="currentColor"/><circle cx="10.5" cy="8.5" r="1" fill="currentColor"/><circle cx="14.5" cy="8.5" r="1" fill="currentColor"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l6 9-3 6H9l-3-6 6-9z"/><line x1="12" y1="3" x2="12" y2="11"/><circle cx="12" cy="12" r="1.5"/><line x1="8" y1="21" x2="16" y2="21"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="18" x2="7" y2="14"/><line x1="12" y1="18" x2="12" y2="10"/><line x1="17" y1="18" x2="17" y2="6"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11v2a1 1 0 0 0 1 1h2l6 4V6L7 10H5a1 1 0 0 0-1 1z"/><path d="M17 9a4 4 0 0 1 0 6"/><path d="M7 14l1.5 5"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 4V3h6v1"/><polyline points="9 13 11 15 15 11"/></svg>`,
  coins: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="10" cy="11" rx="5" ry="2.5"/><path d="M5 11v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4"/><ellipse cx="15" cy="8" rx="4.5" ry="2"/><path d="M19.5 8v4c0 1.1-1.8 2-4.5 2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><rect x="9.5" y="11" width="5" height="4" rx="1"/><path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"/><polyline points="4 7.5 12 12 20 7.5"/><line x1="12" y1="12" x2="12" y2="21"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.5"/><path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 19c0-2.2 1.6-4 3.5-4.3"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3z"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.8 10a4 4 0 0 1 .7 7.94H6.5z"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polygon points="16 8 14 14 8 16 10 10 16 8"/></svg>`
};

const BUSSOLAB_PROFESSIONS = [
  { id: 'desenvolvimento', nome: 'Desenvolvimento', color: 'teal', icon: 'code' },
  { id: 'design', nome: 'Design', color: 'purple', icon: 'pen' },
  { id: 'dados', nome: 'Análise de Dados', color: 'mint', icon: 'chart' },
  { id: 'marketing', nome: 'Marketing Digital', color: 'orange', icon: 'megaphone' },
  { id: 'gestao-projetos', nome: 'Gestão de Projetos', color: 'blue', icon: 'clipboard' },
  { id: 'financas', nome: 'Finanças', color: 'green', icon: 'coins' },
  { id: 'redes-seguranca', nome: 'Redes e Segurança', color: 'indigo', icon: 'shield' },
  { id: 'produto', nome: 'Produto', color: 'pink', icon: 'box' }
];

const BUSSOLAB_TRACKS = {
  // ===== 1. DESENVOLVIMENTO =====
  'frontend': {
    id: 'frontend',
    profissaoId: 'desenvolvimento',
    titulo: 'Front-end',
    descricao: 'Interfaces modernas, acessíveis e interativas para a web.',
    subtitulo: 'Desenvolva suas habilidades em desenvolvimento web, do zero ao seu primeiro projeto.',
    duracao: '4 a 6 semanas',
    color: 'teal',
    icon: 'code',
    etapas: [
      { numero: 1, titulo: 'Fundamentos', duracao: '2 semanas', topicos: ['HTML e CSS', 'Estrutura de páginas', 'Boas práticas'] },
      { numero: 2, titulo: 'Ferramentas', duracao: '2 semanas', topicos: ['Git e GitHub', 'VS Code', 'Depuração'] },
      { numero: 3, titulo: 'Projetos práticos', duracao: '4 semanas', topicos: ['Clone de projetos', 'Aplicações reais', 'Deploy'] },
      { numero: 4, titulo: 'Portfólio', duracao: '3 semanas', topicos: ['Apresentar projetos', 'Criar um portfólio', 'Compartilhar'] },
      { numero: 5, titulo: 'Primeiros passos no mercado', duracao: '2 semanas', topicos: ['Currículo', 'LinkedIn', 'Entrevistas'] }
    ]
  },
  'backend': {
    id: 'backend',
    profissaoId: 'desenvolvimento',
    titulo: 'Back-end',
    descricao: 'Lógica de negócio, servidores, APIs REST e bancos de dados.',
    subtitulo: 'Aprenda a construir APIs seguras, modelar dados e colocar serviços no ar.',
    duracao: '6 a 8 semanas',
    color: 'purple',
    icon: 'server',
    etapas: [
      { numero: 1, titulo: 'Lógica e Linguagem', duracao: '2 semanas', topicos: ['Node.js ou Python', 'Estruturas de dados', 'HTTP e Web'] },
      { numero: 2, titulo: 'Bancos de Dados', duracao: '2 semanas', topicos: ['Modelagem SQL', 'Consultas e Joins', 'NoSQL básico'] },
      { numero: 3, titulo: 'APIs e Arquitetura', duracao: '3 semanas', topicos: ['REST e JSON', 'Autenticação JWT', 'Testes de rota'] },
      { numero: 4, titulo: 'Deploy e Boas Práticas', duracao: '2 semanas', topicos: ['Docker básico', 'Logs e erros', 'Publicação em nuvem'] },
      { numero: 5, titulo: 'Mercado Back-end', duracao: '2 semanas', topicos: ['Documentar APIs', 'Desafios técnicos', 'Portfólio GitHub'] }
    ]
  },
  'mobile': {
    id: 'mobile',
    profissaoId: 'desenvolvimento',
    titulo: 'Mobile',
    descricao: 'Aplicativos para iOS e Android do zero até a publicação.',
    subtitulo: 'Construa aplicativos responsivos e fluidos para smartphones.',
    duracao: '6 a 10 semanas',
    color: 'mint',
    icon: 'mobile',
    etapas: [
      { numero: 1, titulo: 'Base Mobile', duracao: '2 semanas', topicos: ['Layouts responsivos', 'Navegação entre telas', 'Componentes nativos'] },
      { numero: 2, titulo: 'Framework Cross-Platform', duracao: '3 semanas', topicos: ['React Native ou Flutter', 'Gerência de estado', 'Emuladores'] },
      { numero: 3, titulo: 'Recursos do Dispositivo', duracao: '2 semanas', topicos: ['Consumo de APIs', 'Armazenamento local', 'Notificações'] },
      { numero: 4, titulo: 'Qualidade e Lojas', duracao: '2 semanas', topicos: ['Testes em aparelhos', 'Build Android/iOS', 'Guia Play/App Store'] },
      { numero: 5, titulo: 'Carreira Mobile', duracao: '2 semanas', topicos: ['Apps no portfólio', 'Cases em vídeo', 'Entrevistas técnicas'] }
    ]
  },
  'fullstack': {
    id: 'fullstack',
    profissaoId: 'desenvolvimento',
    titulo: 'Full-Stack',
    descricao: 'Domine o front-end e o back-end de ponta a ponta.',
    subtitulo: 'Integre interface, API e banco de dados para criar aplicações completas.',
    duracao: '8 a 12 semanas',
    color: 'orange',
    icon: 'layers',
    etapas: [
      { numero: 1, titulo: 'Base Web Completa', duracao: '2 semanas', topicos: ['HTML, CSS e JS', 'Git colaborativo', 'Protocolo HTTP'] },
      { numero: 2, titulo: 'Front-end Moderno', duracao: '3 semanas', topicos: ['Componentização', 'Consumo de APIs', 'Responsividade'] },
      { numero: 3, titulo: 'Back-end e Dados', duracao: '3 semanas', topicos: ['API REST', 'Banco relacional', 'Validações'] },
      { numero: 4, titulo: 'Projeto Ponta a Ponta', duracao: '3 semanas', topicos: ['MVP completo', 'Deploy Front + Back', 'Monitoramento'] },
      { numero: 5, titulo: 'Entrada no Mercado', duracao: '2 semanas', topicos: ['README profissional', 'Apresentação técnica', 'Networking dev'] }
    ]
  },
  'dados-ia': {
    id: 'dados-ia',
    profissaoId: 'desenvolvimento',
    titulo: 'Dados e IA',
    descricao: 'Crie automações, modelos inteligentes e soluções com dados.',
    subtitulo: 'Dê os primeiros passos em Python, Machine Learning e IA aplicada.',
    duracao: '6 a 8 semanas',
    color: 'blue',
    icon: 'database',
    etapas: [
      { numero: 1, titulo: 'Python para Dados', duracao: '2 semanas', topicos: ['Sintaxe Python', 'Pandas e NumPy', 'Jupyter Notebooks'] },
      { numero: 2, titulo: 'Análise Exploratória', duracao: '2 semanas', topicos: ['Limpeza de dados', 'Estatística descritiva', 'Visualização'] },
      { numero: 3, titulo: 'Fundamentos de IA', duracao: '3 semanas', topicos: ['Regressão e Classificação', 'Scikit-learn', 'APIs de LLMs'] },
      { numero: 4, titulo: 'Projetos Aplicados', duracao: '2 semanas', topicos: ['Dataset real', 'Avaliação de modelos', 'App com IA'] },
      { numero: 5, titulo: 'Carreira em IA', duracao: '2 semanas', topicos: ['Portfólio Kaggle/GitHub', 'Ética em IA', 'Vagas Júnior'] }
    ]
  },
  'jogos': {
    id: 'jogos',
    profissaoId: 'desenvolvimento',
    titulo: 'Jogos',
    descricao: 'Crie experiências interativas em 2D e 3D do zero.',
    subtitulo: 'Aprenda lógica de game loop, engines e publique seu primeiro jogo jogável.',
    duracao: '8 a 12 semanas',
    color: 'pink',
    icon: 'gamepad',
    etapas: [
      { numero: 1, titulo: 'Fundamentos de Jogos', duracao: '2 semanas', topicos: ['Game Loop', 'Física e colisões', 'Game Design básico'] },
      { numero: 2, titulo: 'Engine e Scripts', duracao: '3 semanas', topicos: ['Unity ou Godot', 'C# ou GDScript', 'Cenas e Prefabs'] },
      { numero: 3, titulo: 'Arte, Som e UI', duracao: '2 semanas', topicos: ['Sprites e animações', 'HUD e menus', 'Efeitos sonoros'] },
      { numero: 4, titulo: 'Prototipagem Rápida', duracao: '3 semanas', topicos: ['Mini-jogo 2D', 'Playtest', 'Publicação itch.io'] },
      { numero: 5, titulo: 'Mercado de Games', duracao: '2 semanas', topicos: ['Game Jams', 'Portfólio jogável', 'Comunidades indie'] }
    ]
  },

  // ===== 2. DESIGN =====
  'ux-ui': {
    id: 'ux-ui',
    profissaoId: 'design',
    titulo: 'UX/UI Design',
    descricao: 'Crie experiências digitais intuitivas com foco total no usuário.',
    subtitulo: 'Domine pesquisa, arquitetura de informação, wireframes e protótipos no Figma.',
    duracao: '4 a 6 semanas',
    color: 'purple',
    icon: 'palette',
    etapas: [
      { numero: 1, titulo: 'Fundamentos de UX', duracao: '1 semana', topicos: ['Design Thinking', 'Jornada do usuário', 'Heurísticas'] },
      { numero: 2, titulo: 'UI e Figma', duracao: '2 semanas', topicos: ['Auto Layout', 'Tipografia e cores', 'Design System'] },
      { numero: 3, titulo: 'Pesquisa e Testes', duracao: '2 semanas', topicos: ['Entrevistas', 'Protótipo navegável', 'Teste de usabilidade'] },
      { numero: 4, titulo: 'Estudo de Caso', duracao: '2 semanas', topicos: ['Documentar processo', 'Antes e depois', 'Behance / Notion'] },
      { numero: 5, titulo: 'Mercado UX/UI', duracao: '1 semana', topicos: ['Apresentação de case', 'Handoff com devs', 'Entrevistas'] }
    ]
  },
  'design-grafico': {
    id: 'design-grafico',
    profissaoId: 'design',
    titulo: 'Design Gráfico & Marca',
    descricao: 'Identidade visual, tipografia, composição e comunicação visual.',
    subtitulo: 'Desenvolva marcas memoráveis e peças visuais profissionais.',
    duracao: '4 a 6 semanas',
    color: 'pink',
    icon: 'pen',
    etapas: [
      { numero: 1, titulo: 'Princípios Visuais', duracao: '1 semana', topicos: ['Teoria das cores', 'Hierarquia e grid', 'Tipografia'] },
      { numero: 2, titulo: 'Ferramentas Criativas', duracao: '2 semanas', topicos: ['Vetores e logos', 'Edição de imagem', 'Fechamento de arquivo'] },
      { numero: 3, titulo: 'Identidade Visual', duracao: '2 semanas', topicos: ['Briefing criativo', 'Manual de marca', 'Mockups reais'] },
      { numero: 4, titulo: 'Portfólio Visual', duracao: '2 semanas', topicos: ['Projetos autorais', 'Curadoria de peças', 'Behance / Dribbble'] },
      { numero: 5, titulo: 'Atuação no Mercado', duracao: '1 semana', topicos: ['Precificação', 'Atendimento a clientes', 'Agências e freelas'] }
    ]
  },
  'product-design': {
    id: 'product-design',
    profissaoId: 'design',
    titulo: 'Product Design',
    descricao: 'Una negócio, métricas e design na evolução de produtos digitais.',
    subtitulo: 'Pense além das telas: resolva problemas estratégicos com design.',
    duracao: '6 a 8 semanas',
    color: 'indigo',
    icon: 'layers',
    etapas: [
      { numero: 1, titulo: 'Visão de Produto', duracao: '2 semanas', topicos: ['Discovery contínuo', 'Métricas de produto', 'Alinhamento com PM'] },
      { numero: 2, titulo: 'Sistemas de Design', duracao: '2 semanas', topicos: ['Tokens e componentes', 'Acessibilidade WCAG', 'Documentação'] },
      { numero: 3, titulo: 'Experimentação', duracao: '2 semanas', topicos: ['Hipóteses', 'Testes A/B', 'Análise de funil'] },
      { numero: 4, titulo: 'Case Estratégico', duracao: '2 semanas', topicos: ['Problema e impacto', 'Decisões de design', 'Resultados obtidos'] },
      { numero: 5, titulo: 'Carreira em Produto', duracao: '1 semana', topicos: ['Design Critique', 'Portfólio sênior/jr', 'Processos seletivos'] }
    ]
  },
  'motion-design': {
    id: 'motion-design',
    profissaoId: 'design',
    titulo: 'Motion Design',
    descricao: 'Animações de interfaces, vídeos explicativos e microinterações.',
    subtitulo: 'Dê vida a marcas e produtos digitais através do movimento.',
    duracao: '6 a 8 semanas',
    color: 'orange',
    icon: 'sparkles',
    etapas: [
      { numero: 1, titulo: 'Princípios da Animação', duracao: '2 semanas', topicos: ['Timing e curvas', 'Antecipação', 'Storyboard'] },
      { numero: 2, titulo: 'Ferramentas de Motion', duracao: '2 semanas', topicos: ['Keyframes', 'Máscaras e shapes', 'Exportação Lottie'] },
      { numero: 3, titulo: 'Microinterações UI', duracao: '2 semanas', topicos: ['Transições de tela', 'Feedback visual', 'Protótipos animados'] },
      { numero: 4, titulo: 'Demo Reel', duracao: '2 semanas', topicos: ['Vinhetas curtas', 'Edição com ritmo', 'Publicação do reel'] },
      { numero: 5, titulo: 'Mercado Motion', duracao: '1 semana', topicos: ['Freelance e estúdios', 'Orçamentos', 'Networking criativo'] }
    ]
  },

  // ===== 3. ANÁLISE DE DADOS =====
  'analise-dados': {
    id: 'analise-dados',
    profissaoId: 'dados',
    titulo: 'Análise de Dados & BI',
    descricao: 'Transforme planilhas e bancos em dashboards e decisões claras.',
    subtitulo: 'Domine SQL, Excel/Sheets, Power BI e storytelling com dados.',
    duracao: '4 a 6 semanas',
    color: 'mint',
    icon: 'chart',
    etapas: [
      { numero: 1, titulo: 'Base Analítica', duracao: '1 semana', topicos: ['Excel / Sheets avançado', 'KPIs e métricas', 'Pensamento analítico'] },
      { numero: 2, titulo: 'SQL na Prática', duracao: '2 semanas', topicos: ['SELECT e filtros', 'Agregações e GROUP BY', 'JOINs'] },
      { numero: 3, titulo: 'Dashboards e BI', duracao: '2 semanas', topicos: ['Power BI / Looker', 'Modelagem estrela', 'Storytelling visual'] },
      { numero: 4, titulo: 'Projetos com Dados', duracao: '2 semanas', topicos: ['Dados públicos', 'Relatório executivo', 'Portfólio online'] },
      { numero: 5, titulo: 'Entrada no Mercado', duracao: '1 semana', topicos: ['Testes de SQL', 'LinkedIn analítico', 'Cases em entrevista'] }
    ]
  },
  'ciencia-dados': {
    id: 'ciencia-dados',
    profissaoId: 'dados',
    titulo: 'Ciência de Dados',
    descricao: 'Estatística, Python e modelos preditivos para problemas complexos.',
    subtitulo: 'Aprenda a prever cenários e extrair padrões profundos dos dados.',
    duracao: '8 a 10 semanas',
    color: 'blue',
    icon: 'database',
    etapas: [
      { numero: 1, titulo: 'Estatística e Python', duracao: '2 semanas', topicos: ['Probabilidade', 'Pandas e visualização', 'Testes de hipótese'] },
      { numero: 2, titulo: 'Preparação de Dados', duracao: '2 semanas', topicos: ['Tratamento de nulos', 'Feature engineering', 'Pipelines'] },
      { numero: 3, titulo: 'Machine Learning', duracao: '3 semanas', topicos: ['Supervisionado', 'Não supervisionado', 'Validação cruzada'] },
      { numero: 4, titulo: 'Projetos Preditivos', duracao: '2 semanas', topicos: ['Churn ou previsão', 'Notebook documentado', 'Deploy Streamlit'] },
      { numero: 5, titulo: 'Carreira Data Science', duracao: '2 semanas', topicos: ['Comunicação técnica', 'Desafios de dados', 'Portfólio GitHub'] }
    ]
  },
  'engenharia-dados': {
    id: 'engenharia-dados',
    profissaoId: 'dados',
    titulo: 'Engenharia de Dados',
    descricao: 'Pipelines, ETL e infraestrutura escalável para grandes volumes.',
    subtitulo: 'Construa a base confiável que alimenta times de BI e IA.',
    duracao: '8 a 10 semanas',
    color: 'teal',
    icon: 'server',
    etapas: [
      { numero: 1, titulo: 'SQL e Python', duracao: '2 semanas', topicos: ['SQL avançado', 'Scripts Python', 'Linux e terminal'] },
      { numero: 2, titulo: 'Modelagem e Armazenamento', duracao: '2 semanas', topicos: ['Data Warehouse', 'Data Lake', 'Formatos Parquet/JSON'] },
      { numero: 3, titulo: 'Pipelines ETL/ELT', duracao: '3 semanas', topicos: ['Ingestão de APIs', 'Transformação dbt', 'Orquestração'] },
      { numero: 4, titulo: 'Cloud e Qualidade', duracao: '2 semanas', topicos: ['Fundamentos Cloud', 'Testes de dados', 'Monitoramento'] },
      { numero: 5, titulo: 'Mercado Data Eng', duracao: '1 semana', topicos: ['Arquitetura no GitHub', 'Documentação', 'Entrevistas técnicas'] }
    ]
  },

  // ===== 4. MARKETING DIGITAL =====
  'trafego-pago': {
    id: 'trafego-pago',
    profissaoId: 'marketing',
    titulo: 'Tráfego Pago & Performance',
    descricao: 'Campanhas de aquisição no Google Ads, Meta Ads e análise de ROI.',
    subtitulo: 'Aprenda a planejar, otimizar e escalar mídia paga com foco em resultados.',
    duracao: '4 a 6 semanas',
    color: 'orange',
    icon: 'megaphone',
    etapas: [
      { numero: 1, titulo: 'Fundamentos de Mídia', duracao: '1 semana', topicos: ['Funil de vendas', 'Público-alvo e persona', 'CPC, CPA e ROAS'] },
      { numero: 2, titulo: 'Meta Ads e Google Ads', duracao: '2 semanas', topicos: ['Estrutura de campanhas', 'Segmentação', 'Criativos e copy'] },
      { numero: 3, titulo: 'Mensuração', duracao: '1 semana', topicos: ['Pixel e tags', 'GA4 básico', 'UTMs'] },
      { numero: 4, titulo: 'Otimização Prática', duracao: '2 semanas', topicos: ['Testes A/B', 'Relatórios de mídia', 'Estudo simulado'] },
      { numero: 5, titulo: 'Mercado de Performance', duracao: '1 semana', topicos: ['Certificações Google', 'Portfólio de análises', 'Vagas e freelas'] }
    ]
  },
  'conteudo-seo': {
    id: 'conteudo-seo',
    profissaoId: 'marketing',
    titulo: 'Conteúdo & SEO',
    descricao: 'Atração orgânica, pesquisa de palavras-chave e copywriting.',
    subtitulo: 'Produza conteúdo estratégico que ranqueia e converte leitores em clientes.',
    duracao: '4 a 6 semanas',
    color: 'teal',
    icon: 'compass',
    etapas: [
      { numero: 1, titulo: 'Estratégia de Conteúdo', duracao: '1 semana', topicos: ['Jornada de compra', 'Tom de voz', 'Calendário editorial'] },
      { numero: 2, titulo: 'SEO On-page', duracao: '2 semanas', topicos: ['Palavras-chave', 'Estrutura de headings', 'Search Console'] },
      { numero: 3, titulo: 'Copywriting', duracao: '1 semana', topicos: ['Títulos magnéticos', 'CTAs eficientes', 'Landing pages'] },
      { numero: 4, titulo: 'Projeto Editorial', duracao: '2 semanas', topicos: ['Artigos otimizados', 'Auditoria SEO', 'Portfólio de textos'] },
      { numero: 5, titulo: 'Carreira em Conteúdo', duracao: '1 semana', topicos: ['Cases orgânicos', 'LinkedIn ativo', 'Processos seletivos'] }
    ]
  },
  'social-media': {
    id: 'social-media',
    profissaoId: 'marketing',
    titulo: 'Social Media & Comunidade',
    descricao: 'Planejamento de redes, engajamento, roteiros e análise de métricas.',
    subtitulo: 'Construa presença digital consistente e comunidades engajadas.',
    duracao: '4 a 6 semanas',
    color: 'pink',
    icon: 'users',
    etapas: [
      { numero: 1, titulo: 'Estratégia Social', duracao: '1 semana', topicos: ['Posicionamento', 'Pilares de conteúdo', 'Análise de concorrência'] },
      { numero: 2, titulo: 'Criação e Formatos', duracao: '2 semanas', topicos: ['Roteiros curtos', 'Carrosséis', 'Identidade no feed'] },
      { numero: 3, titulo: 'Comunidade e Métricas', duracao: '1 semana', topicos: ['Alcance e retenção', 'Gestão de comentários', 'Relatórios mensais'] },
      { numero: 4, titulo: 'Projeto Prático', duracao: '2 semanas', topicos: ['Planejamento 30 dias', 'Peças modelo', 'Apresentação'] },
      { numero: 5, titulo: 'Mercado Social Media', duracao: '1 semana', topicos: ['Portfólio criativo', 'Propostas comerciais', 'Vagas Júnior'] }
    ]
  },
  'growth': {
    id: 'growth',
    profissaoId: 'marketing',
    titulo: 'Growth Marketing',
    descricao: 'Experimentos rápidos em todo o funil para acelerar crescimento.',
    subtitulo: 'Conecte dados, produto e marketing para testar hipóteses de crescimento.',
    duracao: '6 a 8 semanas',
    color: 'purple',
    icon: 'chart',
    etapas: [
      { numero: 1, titulo: 'Mentalidade Growth', duracao: '1 semana', topicos: ['Funil AARRR', 'North Star Metric', 'Priorização ICE'] },
      { numero: 2, titulo: 'Aquisição e Ativação', duracao: '2 semanas', topicos: ['Canais de entrada', 'Onboarding', 'CRO básico'] },
      { numero: 3, titulo: 'Retenção e CRM', duracao: '2 semanas', topicos: ['E-mail marketing', 'Automação de réguas', 'Análise de coorte'] },
      { numero: 4, titulo: 'Ciclo de Experimentos', duracao: '2 semanas', topicos: ['Backlog de testes', 'Documentar aprendizados', 'Case de growth'] },
      { numero: 5, titulo: 'Carreira em Growth', duracao: '1 semana', topicos: ['Apresentação analítica', 'Networking', 'Entrevistas'] }
    ]
  },

  // ===== 5. GESTÃO DE PROJETOS =====
  'gestao-agil': {
    id: 'gestao-agil',
    profissaoId: 'gestao-projetos',
    titulo: 'Gestão Ágil & Scrum',
    descricao: 'Facilitação de times, entregas contínuas, Kanban e cerimônias ágeis.',
    subtitulo: 'Organize squads para entregar valor com previsibilidade e colaboração.',
    duracao: '4 a 6 semanas',
    color: 'blue',
    icon: 'clipboard',
    etapas: [
      { numero: 1, titulo: 'Cultura Ágil', duracao: '1 semana', topicos: ['Manifesto Ágil', 'Papéis no Scrum', 'Fluxo Kanban'] },
      { numero: 2, titulo: 'Cerimônias e Artefatos', duracao: '2 semanas', topicos: ['Backlog e Sprints', 'Daily e Review', 'Retrospectivas'] },
      { numero: 3, titulo: 'Ferramentas e Métricas', duracao: '1 semana', topicos: ['Jira / Trello', 'Lead e Cycle Time', 'Gestão visual'] },
      { numero: 4, titulo: 'Simulação de Squad', duracao: '2 semanas', topicos: ['Montar quadro', 'Histórias de usuário', 'Plano de release'] },
      { numero: 5, titulo: 'Carreira Ágil', duracao: '1 semana', topicos: ['Comunicação e facilitação', 'Currículo PM/SM', 'Entrevistas'] }
    ]
  },
  'pmo-tradicional': {
    id: 'pmo-tradicional',
    profissaoId: 'gestao-projetos',
    titulo: 'Planejamento & PMO',
    descricao: 'Cronogramas, escopo, riscos, orçamento e governança de projetos.',
    subtitulo: 'Estruture projetos complexos com clareza de prazos e entregas.',
    duracao: '6 a 8 semanas',
    color: 'indigo',
    icon: 'layers',
    etapas: [
      { numero: 1, titulo: 'Iniciação e Escopo', duracao: '2 semanas', topicos: ['Termo de abertura', 'EAP / WBS', 'Stakeholders'] },
      { numero: 2, titulo: 'Tempo e Custos', duracao: '2 semanas', topicos: ['Cronograma Gantt', 'Orçamento base', 'Caminho crítico'] },
      { numero: 3, titulo: 'Riscos e Qualidade', duracao: '2 semanas', topicos: ['Matriz de riscos', 'Planos de contingência', 'Status report'] },
      { numero: 4, titulo: 'Projeto Estruturado', duracao: '2 semanas', topicos: ['Case completo', 'Painel de acompanhamento', 'Lições aprendidas'] },
      { numero: 5, titulo: 'Mercado PMO', duracao: '1 semana', topicos: ['Base PMBOK', 'Certificações iniciais', 'Vagas de Assistente/Jr'] }
    ]
  },
  'operacoes': {
    id: 'operacoes',
    profissaoId: 'gestao-projetos',
    titulo: 'Gestão de Operações',
    descricao: 'Mapeamento de processos, eficiência, SLAs e melhoria contínua.',
    subtitulo: 'Elimine gargalos e torne rotinas de negócio mais simples e escaláveis.',
    duracao: '4 a 6 semanas',
    color: 'teal',
    icon: 'compass',
    etapas: [
      { numero: 1, titulo: 'Mapeamento de Processos', duracao: '1 semana', topicos: ['Fluxogramas BPMN', 'Identificar gargalos', 'Documentação POP'] },
      { numero: 2, titulo: 'Indicadores Operacionais', duracao: '2 semanas', topicos: ['SLAs e metas', 'Planilhas de controle', 'Causa raiz'] },
      { numero: 3, titulo: 'Melhoria Contínua', duracao: '1 semana', topicos: ['PDCA', 'Lean básico', 'Automação no-code'] },
      { numero: 4, titulo: 'Case de Processo', duracao: '2 semanas', topicos: ['Diagnóstico', 'Proposta de melhoria', 'Ganho estimado'] },
      { numero: 5, titulo: 'Carreira em Ops', duracao: '1 semana', topicos: ['Portfólio de processos', 'LinkedIn', 'Entrevistas práticas'] }
    ]
  },

  // ===== 6. FINANÇAS =====
  'planejamento-financeiro': {
    id: 'planejamento-financeiro',
    profissaoId: 'financas',
    titulo: 'Planejamento Financeiro',
    descricao: 'Fluxo de caixa, orçamento, organização e metas financeiras.',
    subtitulo: 'Aprenda a estruturar saúde financeira pessoal e empresarial.',
    duracao: '4 a 6 semanas',
    color: 'green',
    icon: 'coins',
    etapas: [
      { numero: 1, titulo: 'Conceitos Essenciais', duracao: '1 semana', topicos: ['Juros compostos', 'Inflação e CDI', 'Fluxo de caixa'] },
      { numero: 2, titulo: 'Orçamento e Controle', duracao: '2 semanas', topicos: ['Planilhas financeiras', 'Reserva e metas', 'Gestão de dívidas'] },
      { numero: 3, titulo: 'Diagnóstico Prático', duracao: '1 semana', topicos: ['Perfil financeiro', 'Simulações de cenários', 'Proteção patrimonial'] },
      { numero: 4, titulo: 'Plano Modelo', duracao: '2 semanas', topicos: ['Case de planejamento', 'Apresentação clara', 'Indicadores'] },
      { numero: 5, titulo: 'Carreira Financeira', duracao: '1 semana', topicos: ['Certificações CPA-10/20', 'Ética no setor', 'Primeiras vagas'] }
    ]
  },
  'analise-investimentos': {
    id: 'analise-investimentos',
    profissaoId: 'financas',
    titulo: 'Análise de Investimentos',
    descricao: 'Renda fixa, renda variável, avaliação de ativos e risco/retorno.',
    subtitulo: 'Entenda como funciona o mercado financeiro e a alocação de carteiras.',
    duracao: '6 a 8 semanas',
    color: 'teal',
    icon: 'chart',
    etapas: [
      { numero: 1, titulo: 'Sistema Financeiro', duracao: '1 semana', topicos: ['Selic e macroeconomia', 'Renda fixa', 'Liquidez e risco'] },
      { numero: 2, titulo: 'Renda Variável', duracao: '2 semanas', topicos: ['Ações e FIIs', 'Indicadores múltiplos', 'Leitura de balanços'] },
      { numero: 3, titulo: 'Montagem de Carteira', duracao: '2 semanas', topicos: ['Diversificação', 'Perfil de investidor', 'Rebalanceamento'] },
      { numero: 4, titulo: 'Relatório de Análise', duracao: '2 semanas', topicos: ['Tese de empresa', 'Comparativo setorial', 'Apresentação'] },
      { numero: 5, titulo: 'Mercado Financeiro', duracao: '1 semana', topicos: ['CEA / CNPI (visão)', 'Excel financeiro', 'Processos seletivos'] }
    ]
  },
  'controladoria': {
    id: 'controladoria',
    profissaoId: 'financas',
    titulo: 'Controladoria & FP&A',
    descricao: 'DRE, orçamento empresarial, custos e apoio à tomada de decisão.',
    subtitulo: 'Transforme números contábeis em previsões estratégicas para empresas.',
    duracao: '6 a 8 semanas',
    color: 'blue',
    icon: 'clipboard',
    etapas: [
      { numero: 1, titulo: 'Demonstrativos', duracao: '2 semanas', topicos: ['DRE gerencial', 'Balanço patrimonial', 'DFC'] },
      { numero: 2, titulo: 'Custos e Margens', duracao: '2 semanas', topicos: ['Custos fixos/variáveis', 'Ponto de equilíbrio', 'EBITDA'] },
      { numero: 3, titulo: 'Orçamento (Budget)', duracao: '2 semanas', topicos: ['Previsto x Realizado', 'Forecast', 'Modelagem em Excel'] },
      { numero: 4, titulo: 'Painel FP&A', duracao: '2 semanas', topicos: ['Dashboard financeiro', 'Análise de desvios', 'Report executivo'] },
      { numero: 5, titulo: 'Carreira em FP&A', duracao: '1 semana', topicos: ['Cases de negócio', 'Currículo orientado a dados', 'Entrevistas'] }
    ]
  },

  // ===== 7. REDES E SEGURANÇA =====
  'ciberseguranca': {
    id: 'ciberseguranca',
    profissaoId: 'redes-seguranca',
    titulo: 'Cibersegurança',
    descricao: 'Proteção de sistemas, prevenção de ataques e análise de vulnerabilidades.',
    subtitulo: 'Construa uma base sólida em defesa digital, redes e boas práticas de segurança.',
    duracao: '6 a 8 semanas',
    color: 'indigo',
    icon: 'shield',
    etapas: [
      { numero: 1, titulo: 'Fundamentos de Segurança', duracao: '2 semanas', topicos: ['Tríade CIA', 'Linux essencial', 'Protocolos TCP/IP'] },
      { numero: 2, titulo: 'Ameaças e Web', duracao: '2 semanas', topicos: ['OWASP Top 10', 'Phishing e malware', 'Criptografia básica'] },
      { numero: 3, titulo: 'Defesa e Monitoramento', duracao: '2 semanas', topicos: ['Logs e SIEM', 'Hardening', 'Resposta a incidentes'] },
      { numero: 4, titulo: 'Laboratórios Práticos', duracao: '2 semanas', topicos: ['TryHackMe / CTFs', 'Análise de pacotes', 'Relatório técnico'] },
      { numero: 5, titulo: 'Carreira Cyber', duracao: '1 semana', topicos: ['Trilhas Blue/Red Team', 'Certificações iniciais', 'Portfólio técnico'] }
    ]
  },
  'redes-infra': {
    id: 'redes-infra',
    profissaoId: 'redes-seguranca',
    titulo: 'Redes e Infraestrutura',
    descricao: 'Conectividade, roteamento, DNS, servidores e disponibilidade.',
    subtitulo: 'Entenda como a internet e redes corporativas funcionam por baixo dos panos.',
    duracao: '6 a 8 semanas',
    color: 'blue',
    icon: 'server',
    etapas: [
      { numero: 1, titulo: 'Arquitetura de Redes', duracao: '2 semanas', topicos: ['Modelo OSI / TCP-IP', 'IPv4 e Sub-redes', 'DNS e DHCP'] },
      { numero: 2, titulo: 'Sistemas Operacionais', duracao: '2 semanas', topicos: ['Administração Linux', 'Windows Server', 'Permissões e serviços'] },
      { numero: 3, titulo: 'Diagnóstico e Rotina', duracao: '2 semanas', topicos: ['Ping, Traceroute, Dig', 'Firewall básico', 'Backup e monitoramento'] },
      { numero: 4, titulo: 'Lab de Rede', duracao: '2 semanas', topicos: ['Topologia simulada', 'Máquinas virtuais', 'Documentação'] },
      { numero: 5, titulo: 'Mercado Infra', duracao: '1 semana', topicos: ['Suporte N1/N2 a Infra', 'Certificação CCNA (visão)', 'Entrevistas'] }
    ]
  },
  'cloud-devops': {
    id: 'cloud-devops',
    profissaoId: 'redes-seguranca',
    titulo: 'Cloud & DevOps',
    descricao: 'Nuvem, containers, automação de deploy (CI/CD) e observabilidade.',
    subtitulo: 'Automatize entregas de software com infraestrutura moderna em nuvem.',
    duracao: '8 a 10 semanas',
    color: 'teal',
    icon: 'cloud',
    etapas: [
      { numero: 1, titulo: 'Linux e Git', duracao: '2 semanas', topicos: ['Shell Script', 'SSH e redes', 'Fluxos Git'] },
      { numero: 2, titulo: 'Containers', duracao: '2 semanas', topicos: ['Docker e imagens', 'Docker Compose', 'Boas práticas'] },
      { numero: 3, titulo: 'Cloud e CI/CD', duracao: '3 semanas', topicos: ['AWS / GCP conceitos', 'GitHub Actions', 'Deploy automatizado'] },
      { numero: 4, titulo: 'Projeto DevOps', duracao: '2 semanas', topicos: ['Pipeline completo', 'Monitoramento', 'Infra como código'] },
      { numero: 5, titulo: 'Carreira Cloud', duracao: '1 semana', topicos: ['Cloud Practitioner', 'Repositórios públicos', 'Vagas Júnior'] }
    ]
  },

  // ===== 8. PRODUTO =====
  'product-management': {
    id: 'product-management',
    profissaoId: 'produto',
    titulo: 'Product Management',
    descricao: 'Visão estratégica, priorização de backlog e conexão entre negócio e tech.',
    subtitulo: 'Aprenda a liderar decisões de produto centradas em valor para usuários e empresa.',
    duracao: '6 a 8 semanas',
    color: 'pink',
    icon: 'box',
    etapas: [
      { numero: 1, titulo: 'Papel do PM', duracao: '1 semana', topicos: ['Ciclo de vida', 'Visão e estratégia', 'Stakeholders'] },
      { numero: 2, titulo: 'Discovery e Priorização', duracao: '2 semanas', topicos: ['Mapeamento de dor', 'RICE e MoSCoW', 'Roadmap de produto'] },
      { numero: 3, titulo: 'Delivery e Métricas', duracao: '2 semanas', topicos: ['Escrita de PRDs', 'OKRs e KPIs', 'Trabalho com Tech/UX'] },
      { numero: 4, titulo: 'Case de Produto', duracao: '2 semanas', topicos: ['Teardown de app', 'Proposta de feature', 'Métricas de sucesso'] },
      { numero: 5, titulo: 'Mercado de Produto', duracao: '1 semana', topicos: ['Portfólio PM', 'Cases em entrevista', 'Vagas APM/Júnior'] }
    ]
  },
  'product-discovery': {
    id: 'product-discovery',
    profissaoId: 'produto',
    titulo: 'Product Discovery & Pesquisa',
    descricao: 'Validação de hipóteses, entrevistas com usuários e redução de riscos.',
    subtitulo: 'Descubra o que realmente vale a pena construir antes de escrever código.',
    duracao: '4 a 6 semanas',
    color: 'purple',
    icon: 'compass',
    etapas: [
      { numero: 1, titulo: 'Base de Pesquisa', duracao: '1 semana', topicos: ['Roteiro de entrevista', 'Vieses cognitivos', 'Jobs to be Done'] },
      { numero: 2, titulo: 'Síntese e Oportunidades', duracao: '2 semanas', topicos: ['Árvore de oportunidades', 'Personas reais', 'Priorização de dores'] },
      { numero: 3, titulo: 'Validação Rápida', duracao: '1 semana', topicos: ['Experimentos baratos', 'Protótipos de baixa', 'Análise de evidências'] },
      { numero: 4, titulo: 'Relatório de Discovery', duracao: '2 semanas', topicos: ['Estudo prático', 'Insights acionáveis', 'Apresentação ao time'] },
      { numero: 5, titulo: 'Carreira Discovery', duracao: '1 semana', topicos: ['Portfólio de pesquisa', 'Comunicação clara', 'Processos seletivos'] }
    ]
  },
  'product-ops': {
    id: 'product-ops',
    profissaoId: 'produto',
    titulo: 'Product Ops & Métricas',
    descricao: 'Dados de produto, ferramentas, rituais e escala de times de produto.',
    subtitulo: 'Estruture processos e inteligência de dados para times tomarem melhores decisões.',
    duracao: '4 a 6 semanas',
    color: 'orange',
    icon: 'chart',
    etapas: [
      { numero: 1, titulo: 'Fundamentos Product Ops', duracao: '1 semana', topicos: ['Pilares de Ops', 'Gestão de feedback', 'Padronização leve'] },
      { numero: 2, titulo: 'Product Analytics', duracao: '2 semanas', topicos: ['Eventos e funis', 'Retenção e ativação', 'Dashboards de produto'] },
      { numero: 3, titulo: 'Ferramentas e Rituais', duracao: '1 semana', topicos: ['Voice of Customer', 'Documentação viva', 'Cadência de releases'] },
      { numero: 4, titulo: 'Projeto Prático', duracao: '2 semanas', topicos: ['Plano de métricas', 'Fluxo de feedback', 'Case estruturado'] },
      { numero: 5, titulo: 'Entrada no Mercado', duracao: '1 semana', topicos: ['Perfil híbrido dados+PM', 'LinkedIn', 'Entrevistas'] }
    ]
  }
};

// ===== QUIZ DE CARREIRA (5 PERGUNTAS REAIS) =====
const BUSSOLAB_QUIZ_QUESTIONS = [
  {
    id: 1,
    pergunta: 'No seu dia a dia, você prefere trabalhar com:',
    opcoes: [
      { texto: 'Criar e desenhar experiências visuais', color: 'teal', icon: 'palette', pesos: { 'ux-ui': 3, 'design-grafico': 3, 'frontend': 2, 'motion-design': 2 } },
      { texto: 'Resolver problemas lógicos e construir sistemas', color: 'purple', icon: 'code', pesos: { 'frontend': 2, 'backend': 3, 'fullstack': 3, 'ciberseguranca': 2 } },
      { texto: 'Analisar números, indicadores e padrões', color: 'mint', icon: 'chart', pesos: { 'analise-dados': 3, 'ciencia-dados': 3, 'planejamento-financeiro': 2, 'controladoria': 2 } },
      { texto: 'Comunicar ideias, organizar pessoas e estratégias', color: 'blue', icon: 'users', pesos: { 'product-management': 3, 'gestao-agil': 3, 'social-media': 2, 'growth': 2 } }
    ]
  },
  {
    id: 2,
    pergunta: 'Qual tipo de desafio mais te empolga?',
    opcoes: [
      { texto: 'Deixar um site ou app bonito e fácil de usar', color: 'purple', icon: 'mobile', pesos: { 'ux-ui': 3, 'frontend': 3, 'mobile': 2, 'product-design': 2 } },
      { texto: 'Descobrir o porquê de um resultado através de dados', color: 'mint', icon: 'database', pesos: { 'analise-dados': 3, 'dados-ia': 3, 'growth': 2, 'product-ops': 2 } },
      { texto: 'Proteger sistemas ou manter tudo funcionando sem falhas', color: 'indigo', icon: 'shield', pesos: { 'ciberseguranca': 3, 'redes-infra': 3, 'cloud-devops': 3, 'backend': 2 } },
      { texto: 'Fazer um negócio crescer, vender mais ou organizar entregas', color: 'orange', icon: 'megaphone', pesos: { 'trafego-pago': 3, 'conteudo-seo': 2, 'gestao-agil': 2, 'analise-investimentos': 2 } }
    ]
  },
  {
    id: 3,
    pergunta: 'Em um projeto em grupo, qual papel você assume naturalmente?',
    opcoes: [
      { texto: 'Quem coloca a mão na massa construindo o produto', color: 'teal', icon: 'layers', pesos: { 'fullstack': 3, 'backend': 2, 'mobile': 2, 'jogos': 2 } },
      { texto: 'Quem organiza prazos, tarefas e destrava o time', color: 'blue', icon: 'clipboard', pesos: { 'gestao-agil': 3, 'pmo-tradicional': 3, 'operacoes': 3, 'product-management': 2 } },
      { texto: 'Quem pesquisa o público e define a mensagem/visual', color: 'pink', icon: 'pen', pesos: { 'product-discovery': 3, 'ux-ui': 2, 'social-media': 3, 'conteudo-seo': 2 } },
      { texto: 'Quem cuida das contas, metas e viabilidade', color: 'green', icon: 'coins', pesos: { 'planejamento-financeiro': 3, 'controladoria': 3, 'analise-investimentos': 3, 'product-ops': 2 } }
    ]
  },
  {
    id: 4,
    pergunta: 'Com qual tipo de ferramenta você se imagina trabalhando mais?',
    opcoes: [
      { texto: 'Editor de código, terminal e APIs', color: 'teal', icon: 'code', pesos: { 'frontend': 3, 'backend': 3, 'fullstack': 3, 'cloud-devops': 2 } },
      { texto: 'Figma, protótipos, paletas e layouts', color: 'purple', icon: 'palette', pesos: { 'ux-ui': 3, 'product-design': 3, 'design-grafico': 3, 'motion-design': 2 } },
      { texto: 'Planilhas, SQL, gráficos e dashboards', color: 'mint', icon: 'chart', pesos: { 'analise-dados': 3, 'ciencia-dados': 2, 'controladoria': 2, 'trafego-pago': 2 } },
      { texto: 'Quadros Kanban, roadmaps e apresentações', color: 'pink', icon: 'box', pesos: { 'product-management': 3, 'gestao-agil': 3, 'pmo-tradicional': 2, 'growth': 2 } }
    ]
  },
  {
    id: 5,
    pergunta: 'Que tipo de resultado te dá mais orgulho no final de uma entrega?',
    opcoes: [
      { texto: 'Ver uma aplicação real no ar funcionando perfeitamente', color: 'teal', icon: 'sparkles', pesos: { 'frontend': 2, 'fullstack': 3, 'mobile': 3, 'jogos': 2 } },
      { texto: 'Ouvir usuários dizendo que a experiência ficou intuitiva', color: 'purple', icon: 'users', pesos: { 'ux-ui': 3, 'product-design': 3, 'product-discovery': 3 } },
      { texto: 'Mostrar um insight claro que ajudou a tomar uma decisão', color: 'green', icon: 'chart', pesos: { 'analise-dados': 3, 'planejamento-financeiro': 2, 'dados-ia': 2, 'growth': 2 } },
      { texto: 'Ver o projeto entregue no prazo e superando metas', color: 'orange', icon: 'clipboard', pesos: { 'gestao-agil': 2, 'product-management': 2, 'trafego-pago': 2, 'ciberseguranca': 2 } }
    ]
  }
];

function getIconSvg(name) {
  return BUSSOLAB_ICONS[name] || BUSSOLAB_ICONS.compass;
}

function getProfessionById(id) {
  return BUSSOLAB_PROFESSIONS.find((p) => p.id === id) || BUSSOLAB_PROFESSIONS[0];
}

function getTracksByProfession(profissaoId) {
  return Object.values(BUSSOLAB_TRACKS).filter((t) => t.profissaoId === profissaoId);
}

function getTrackById(id) {
  return BUSSOLAB_TRACKS[id] || BUSSOLAB_TRACKS['frontend'];
}

function calculateQuizResults(selectedOptionIndices) {
  const scores = {};
  Object.keys(BUSSOLAB_TRACKS).forEach((trackId) => {
    scores[trackId] = 0;
  });

  selectedOptionIndices.forEach((optionIdx, qIdx) => {
    const question = BUSSOLAB_QUIZ_QUESTIONS[qIdx];
    if (!question) return;
    const option = question.opcoes[optionIdx];
    if (!option || !option.pesos) return;
    Object.entries(option.pesos).forEach(([trackId, weight]) => {
      if (scores[trackId] !== undefined) {
        scores[trackId] += weight;
      }
    });
  });

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const maxScore = Math.max(sorted[0]?.[1] || 1, 1);

  return sorted.map(([trackId, score], index) => {
    const ratio = score / maxScore;
    // Gera afinidade realista entre 74% e 96%
    const affinity = Math.min(96, Math.max(72, Math.round(74 + ratio * 20 - index * 3)));
    return { trackId, affinity };
  });
}
