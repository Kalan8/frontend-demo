const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const PLAYER_API = "/api/player";

export const fetchPlayers = async () => {
  const response = await fetch(API_BASE_URL + PLAYER_API);
  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }
  return response.json();
}

export const createPlayer = async (player : {name: string; surname:string; email:string}) => {
  const response = await fetch(API_BASE_URL + PLAYER_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(player),
  });

  if (!response.ok) {
    throw new Error("Failed to create player");
  }

  return response.json();
}

