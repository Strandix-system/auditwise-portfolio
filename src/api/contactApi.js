// api/contactApi.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * POST /api/contact
 * Sends a contact form submission to the backend.
 * @param {Object} payload - { name, email, contact, message }
 * @returns {Promise<Object>} - API response data
 */
export async function submitContactForm(payload) {
  const response = await fetch(`${BASE_URL}/message/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData?.message || `Request failed with status ${response.status}`
    );
  }

  return response.json();
}
