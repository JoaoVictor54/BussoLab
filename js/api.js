/* =========================================================
   BÚSSOLAB — Cliente HTTP da API Genérica da Seed
   Base: https://psel-api.vercel.app/api/bussolab/{colecao}
========================================================= */

const SEED_API_BASE = 'https://psel-api.vercel.app/api';
const SEED_SQUAD = 'bussolab';

function getCollectionUrl(colecao, id = null) {
  const base = `${SEED_API_BASE}/${SEED_SQUAD}/${encodeURIComponent(colecao)}`;
  return id ? `${base}/${encodeURIComponent(id)}` : base;
}

function normalizeListResponse(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.data)) return data.data;
  if (data && Array.isArray(data.items)) return data.items;
  return [];
}

async function parseResponseBody(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function apiList(colecao) {
  const response = await fetch(getCollectionUrl(colecao), {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Erro ao listar ${colecao} (HTTP ${response.status}).`);
  }

  const data = await parseResponseBody(response);
  return normalizeListResponse(data);
}

async function apiCreate(colecao, payload) {
  const response = await fetch(getCollectionUrl(colecao), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Erro ao salvar em ${colecao} (HTTP ${response.status}).`);
  }

  return parseResponseBody(response);
}

async function apiUpdate(colecao, id, payload) {
  const response = await fetch(getCollectionUrl(colecao, id), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar registro em ${colecao} (HTTP ${response.status}).`);
  }

  return parseResponseBody(response);
}

async function apiDelete(colecao, id) {
  const response = await fetch(getCollectionUrl(colecao, id), {
    method: 'DELETE',
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Erro ao remover registro em ${colecao} (HTTP ${response.status}).`);
  }

  return parseResponseBody(response);
}

/* =========================================================
   UTILITÁRIOS DE SEGURANÇA E FORMATAÇÃO DE DATA
========================================================= */
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => {
    const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return db - da;
  });
}

function sortByDateAsc(list) {
  return [...list].sort((a, b) => {
    const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return da - db;
  });
}

function formatShortDate(isoDate) {
  if (!isoDate) return 'Recente';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return 'Recente';
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function formatTimeHHMM(isoDate) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatRelativeTime(isoDate) {
  if (!isoDate) return 'Recente';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return 'Recente';

  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return 'Agora mesmo';
  if (diffMin < 60) return `Há ${diffMin} min`;

  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `Há ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `Há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;

  return formatShortDate(isoDate);
}
