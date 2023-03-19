import axios from "axios";

export default async function SubmitData(token) {
  const res = await axios.post(
    "https://esg-service.nft-investment.io/api/v1/submit",
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data.data;
}
