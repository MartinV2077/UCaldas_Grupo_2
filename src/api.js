// Aqui va a estar la API de Coincap

const url = "https://api.coincap.io/v2";
//fetch trae respuesta en formato json
function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}
//comunica componente Home
export default {
  getAssets,
};
