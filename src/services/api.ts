export const API_BASE_URL = "http://localhost:8080/api/users";

export async function fetchUsers() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}
