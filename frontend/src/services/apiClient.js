const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

/**
 * Universal HTTP request wrapper around fetch.
 *
 * @param {string} endpoint - API endpoint path (e.g. '/menu/active')
 * @param {object} options - Fetch options (method, body, headers, etc.)
 * @returns {Promise<any>}
 */
export async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(url, config);

  // Handle 204 No Content responses
  if (response.status === 204) {
    return null;
  }

  const responseData = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMessage =
      (responseData && responseData.message) ||
      `Request failed with status ${response.status}`;
    const error = new Error(errorMessage);
    error.status = response.status;
    error.data = responseData;
    throw error;
  }

  return responseData;
}

export { API_BASE_URL };
