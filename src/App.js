import {
  Button,
  ButtonToolbar,
  Container,
  FlexboxGrid,
  Form,
  InputNumber,
  Panel,
  Stack,
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
import { FormB1_1, FormB1_1FormValue } from "./components/FormB1_1";
import { FormB2_1, FormB2_1FormValue } from "./components/FormB2_1";
import { FormB2_2, FormB2_2FormValue } from "./components/FormB2_2";
import { FormB2_3, FormB2_3FormValue } from "./components/FormB2_3";

function App() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const [formValue, setFormValue] = useState(FormB1_1FormValue);
  const [forms, setForms] = useState([]);
  const [profile, setProfile] = useState(null);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (isProfileUpdate) {
      async function updateProfile() {
        const res = await GetProfile(token);
        console.log(res);
        setProfile(res);
      }

      updateProfile();
      setFormValue({});
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
    setFormValue(profile.details[page - 1]);
  };

  const handleStoreData = () => {
    StoreData(token, page, formValue);
    setIsProfileUpdate(true);
  };

  const renderForm = () => {
    switch (page) {
      case 1:
        return FormB2_1;
  
      case 2:
        return FormB2_2;
  
      case 3:
        return FormB2_3;
  
      default:
        return;
    }
  };
  console.log(profile, page);

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
        {token && (
          <Form
            ref={formRef}
            formValue={formValue}
            onChange={(formValue) => {
              setFormValue(formValue);
            }}
            layout="inline"
          >
            {renderForm()}
          </Form>
        )}
        {token && (
          <div
            style={{
              // display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlexboxGrid justify="space-between">
              <FlexboxGrid.Item colspan={4}>
                <Button>Prvs Page</Button>
              </FlexboxGrid.Item>
              {/* <FlexboxGrid.Item colspan={6}>
                <Stack spacing={10}>
                  <p>Select Page:</p>
                  <InputNumber
                    min={1}
                    max={5}
                    defaultValue={page}
                    onChange={(page) => {
                      handlePageUpdate(page);
                    }}
                    style={{ width: 100 }}
                  >
                    Choose Page
                  </InputNumber>
                </Stack>
              </FlexboxGrid.Item> */}
              <FlexboxGrid.Item colspan={4}>
                <Button>Next Page</Button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </div>
        )}

        <br />
        {token && <Button onClick={() => handleStoreData()}>Send Data</Button>}
      </Panel>
    </Container>
  );
}

export default App;