import axios from "axios";
const URLorigin = "http://localhost:3333";
const api = axios.create({
  baseURL: `${URLorigin}/api`,
});
export interface Racer {
  _id: string;
  name: string;
}
export const getAllRacers = async (): Promise<Racer[]> => {
  const response = await api.get("racers");
  return response.data;
};
export const deleteRacer = async (id: string): Promise<void> => {
  await api.delete(`racers/${id}/delete`);
};
export const addRacer = async (name: string): Promise<Racer> => {
  const response = await api.post("racers", { name });
  return response.data;
};
