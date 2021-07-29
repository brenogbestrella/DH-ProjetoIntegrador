import api from "../../Services/api"

const MOEDAS_URL = "/moedas";

export async function getMoedas() {
    const { data } = await api.get(MOEDAS_URL, {});
    return data;
}