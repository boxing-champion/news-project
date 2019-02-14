import ajax from "./ajax"
const BASE = "/163"

export const reqManual = () => ajax(BASE + `/topic/v1/find/recManual.json`)
