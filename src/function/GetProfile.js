import axios from "axios";

export default async function GetProfile(token) {
  const res = await axios.get(
    "https://esg-service.nft-investment.io/api/v1/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data.data;
}
