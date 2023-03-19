import axios from "axios";

export default async function StoreData(token, page, data) {
  var formdata = new FormData();
  formdata.append("page", page);
  formdata.append(
    "data",
    '{"a1_1_text1": "Apple!","a1_2_number1": 1234,"a2_1": "dgkukhds","b1_1": {"text1": "qweqwe","text2":"qweqwasczcxv"},"c1_2_3_array": ["a1","a2"]}'
  );
  console.log("Start Store Data", formdata);
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
