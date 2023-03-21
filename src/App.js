import {
  Button,
  ButtonToolbar,
  Container,
  Content,
  FlexboxGrid,
  Footer,
  Form,
  Panel,
  Stack,
  CheckboxGroup
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
import { FormB1_2, FormB1_2FormValue } from "./components/FormB1_2";
import FormB2_1, { FormB2_1FormValue } from "./components/FormB2_1";
import FormB2_2, { FormB2_2FormValue } from "./components/FormB2_2";
import FormB2_3, { FormB2_3FormValue } from "./components/FormB2_3";

function App() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const [formValue, setFormValue] = useState([
    FormB1_1FormValue,
    FormB1_2FormValue,
    FormB2_1FormValue,
    FormB2_2FormValue,
    FormB2_3FormValue,
  ]);
  const [profile, setProfile] = useState(null);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (isProfileUpdate) {
      async function updateProfile() {
        const res = await GetProfile(token);
        // console.log(res);
        setProfile(res);
      }

      updateProfile();
      //setFormValue({});
      //setPage((nextPage) => {
      //  return (nextPage += 1);
      //});
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

  const handlePageUpdate = (p) => {
    StoreData(token, page + 1, formValue[page]);
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

  // console.log(formValue, page);

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
          <Content style={{ height: window.innerHeight - 150 }}>
            <Panel style={{ height: window.innerHeight - 160 }} shaded>
              <Form
                ref={formRef}
                formValue={formValue[page]}
                onChange={(formValue) => {
                  setFormValue((nextFormValue) => {
                    const v = [...nextFormValue];
                    v[page] = formValue;
                    // console.log(v);
                    return v;
                  });
                }}
                layout="inline"
              >
                {renderForm()}
              </Form>
            </Panel>
          </Content>
        )}
        {token && (
          <Footer>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={4}>
                <Button
                  onClick={() => handlePageUpdate(-1)}
                  disabled={page === 0}
                >
                  Prvs Page
                </Button>
              </FlexboxGrid.Item>
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