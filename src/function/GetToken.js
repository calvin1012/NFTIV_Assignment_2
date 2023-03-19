import axios from "axios";

export default async function GetToken() {
  const res = await axios.get("https://esg-service.nft-investment.io/token");
  return res.data.data;
}
