import {
  Button,
  ButtonToolbar,
  Container,
  Form,
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

function App() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
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

    setPage((nextPage) => {
      return (nextPage += p);
    });
  };

  const renderForm = () => {
    switch (page) {
      case 0:
        return FormB1_1;
      case 1:
        return FormB1_2;
      case 2:
        return FormB2_1;
      case 3:
        return FormB2_2;
      case 4:
        return FormB2_3;
      default:
        return;
    }
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

              <FlexboxGrid.Item colspan={4}>
                <Button
                  onClick={() => handlePageUpdate(1)}
                  disabled={page === 4}
                >
                  Next Page
                </Button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Footer>
        )}
      </Panel>
    </Container>
  );
}

export default App;