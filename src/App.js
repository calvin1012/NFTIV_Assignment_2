import {
  Button,
  ButtonToolbar,
  Container,
  Form,
  InputNumber,
  Panel,
} from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, selectToken, updateToken } from "./store/slice/token";
import GetToken from "./function/GetToken";
import StoreData from "./function/StoreData";
import SubmitData from "./function/Submit";

import "rsuite/dist/rsuite.min.css";
import { useEffect, useRef, useState } from "react";
import GetProfile from "./function/GetProfile";
import { CustomField } from "./components/CustomField";
import FormB1_1 from "./function/FormB1_1";
import FormB1_2 from "./function/FormB1_2";
import FormB2_1 from "./function/FormB2_1";
import FormB2_2 from "./function/FormB2_2";
import FormB2_3 from "./function/FormB2_3";

const defaultFormValue = {
  q1: "",
  q2: "",
};
function App() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [profile, setProfile] = useState();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (isProfileUpdate) {
      async function updateProfile() {
        const res = await GetProfile(token);
        setProfile(res);
      }

      updateProfile();
      setFormValue({ ...defaultFormValue });
      setPage((nextPage) => {
        return (nextPage += 1);
      });
      setIsProfileUpdate(false);
    }
  }, [isProfileUpdate]);

  const handleGetToken = async () => {
    const t = await GetToken();
    await dispatch(updateToken(t));
  };

  const handleRemoveToken = async () => {
    const t = await SubmitData(token); // Remove token
    await dispatch(removeToken(t)); // return data should be null
  };

  const handlePageUpdate = (page) => {
    setPage(page);
    setFormValue(profile.details[page]);
  };

  const handleStoreData = () => {
    StoreData(token, page, formValue);
    setIsProfileUpdate(true);
  };

  console.log(profile);

  return (
    <Container>
      <Panel>
        <ButtonToolbar>
          <Button
            onClick={() => {
              token ? handleRemoveToken() : handleGetToken();
            }}
          >
            {token ? "Remove token" : "Get Token"}
          </Button>

          <p>current Token: {token}</p>
        </ButtonToolbar>
        <br />
        {profile && (
          <span>
            <p>Select Page: </p>
            <InputNumber
              min={0}
              max={profile.details ? profile.details.length : 0}
              defaultValue={0}
              onChange={(page) => {
                handlePageUpdate(page);
              }}
              style={{ width: 100 }}
            >
              Choose Page
            </InputNumber>
          </span>
        )}
        {token && (
          <Form
            ref={formRef}
            formValue={formValue}
            onChange={(formValue) => {
              setFormValue(formValue);
            }}
            layout="inline"
          >
            <CustomField name="q1" label="Q1: " />
            <br />
            <CustomField name="q2" label="Q2: " />
          </Form>
        )}
        {profile && JSON.stringify(profile.details, "", 2)}

        <br />
        {token && <Button onClick={() => handleStoreData()}>Send Data</Button>}
        <FormB1_1 />
        <FormB1_2 />
        <FormB2_1 />
        <FormB2_2 />
        <FormB2_3 />
      </Panel>
    </Container>
  );
}

export default App;
