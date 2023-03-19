import axios from "axios";

export default async function StoreData(token, page, data) {
  var formdata = new FormData();
  formdata.append("page", page);
  formdata.append("data", JSON.stringify(data, "", 2));
  const res = await axios.post(
    "https://esg-service.nft-investment.io/api/v1/form",
    formdata,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}
