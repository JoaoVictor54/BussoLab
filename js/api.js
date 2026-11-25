const API_BASE_URL = 'https://psel-api.vercel.app/api';
const SQUAD_NAME = 'bussolab';

function buildCollectionUrl(collectionName, recordId = null) {
  const baseUrl = `${API_BASE_URL}/${SQUAD_NAME}/${encodeURIComponent(collectionName)}`;
  return recordId ? `${baseUrl}/${encodeURIComponent(recordId)}` : baseUrl;
}

function extractCollectionItems(responseBody) {
  if (Array.isArray(responseBody)) return responseBody;
  if (responseBody && Array.isArray(responseBody.data)) return responseBody.data;
  if (responseBody && Array.isArray(responseBody.items)) return responseBody.items;
  return [];
}

async function parseJsonResponse(response) {
  const rawText = await response.text();
  if (!rawText) return null;
  try {
    return JSON.parse(rawText);
  } catch {
    return rawText;
  }
}

async function fetchCollection(collectionName) {
  const response = await fetch(buildCollectionUrl(collectionName), {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Erro ao listar ${collectionName} (HTTP ${response.status}).`);
  }

  const responseBody = await parseJsonResponse(response);
  return extractCollectionItems(responseBody);
}

async function createRecord(collectionName, payload) {
  const response = await fetch(buildCollectionUrl(collectionName), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Erro ao salvar em ${collectionName} (HTTP ${response.status}).`);
  }

  return parseJsonResponse(response);
}

async function updateRecord(collectionName, recordId, payload) {
  const response = await fetch(buildCollectionUrl(collectionName, recordId), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar registro em ${collectionName} (HTTP ${response.status}).`);
  }

  return parseJsonResponse(response);
}

async function deleteRecord(collectionName, recordId) {
  const response = await fetch(buildCollectionUrl(collectionName, recordId), {
    method: 'DELETE',
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Erro ao remover registro em ${collectionName} (HTTP ${response.status}).`);
  }

  return parseJsonResponse(response);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sortRecordsByNewest(records) {
  return [...records].sort((first, second) => {
    const firstTime = first.createdAt ? new Date(first.createdAt).getTime() : 0;
    const secondTime = second.createdAt ? new Date(second.createdAt).getTime() : 0;
    return secondTime - firstTime;
  });
}

function sortRecordsByOldest(records) {
  return [...records].sort((first, second) => {
    const firstTime = first.createdAt ? new Date(first.createdAt).getTime() : 0;
    const secondTime = second.createdAt ? new Date(second.createdAt).getTime() : 0;
    return firstTime - secondTime;
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

function formatTime(isoDate) {
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
  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes < 1) return 'Agora mesmo';
  if (diffMinutes < 60) return `Há ${diffMinutes} min`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `Há ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `Há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;

  return formatShortDate(isoDate);
}
