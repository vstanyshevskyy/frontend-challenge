const API_URL = '//localhost:3000';
const DEFAULT_EXPENSES_LIMIT = 20;

export const fetchExpenses = (offset = 0, limit = DEFAULT_EXPENSES_LIMIT) =>
  fetch(`${API_URL}/expenses?offset=${offset}&limit=${limit}`)
  .then((response) => {
    return response.json();
  });