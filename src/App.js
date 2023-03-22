import {
  Button,
  ButtonToolbar,
  Container,
  Content,
  FlexboxGrid,
  Footer,
  Form,
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
import { FormB1_1, FormB1_1FormValue } from "./components/FormB1_1";
import { FormB1_2, FormB1_2FormValue } from "./components/FormB1_2";
import FormB2_1, { FormB2_1FormValue } from "./components/FormB2_1";
import FormB2_2, { FormB2_2FormValue } from "./components/FormB2_2";
import FormB2_3, { FormB2_3FormValue } from "./components/FormB2_3";

const defaultFormValue = [
  FormB1_1FormValue,
  FormB1_2FormValue,
  FormB2_1FormValue,
  FormB2_2FormValue,
  FormB2_3FormValue,
];
function App() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);
  const [page, setPage] = useState(0);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const [formValue, setFormValue] = useState([...defaultFormValue]);
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
      setIsProfileUpdate(false);
    }
  }, [isProfileUpdate]);

  const handleGetToken = async () => {
    setIsSubmit(false);
    const t = await GetToken();
    await dispatch(updateToken(t));
    setPage(0);
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

  const handleSubmit = async () => {
    setIsSubmit(true);
    await StoreData(token, page + 1, formValue[page]);
    const t = await SubmitData(token);
    await dispatch(removeToken(t));
    console.log(defaultFormValue);
    setFormValue([...defaultFormValue]);
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

  const finishPage = () => {
    return <h1>已提交表格！</h1>;
  };

  const formPage = () => {
    return (
      <>
        {token && (
          <Content>
            <Panel shaded>
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
        <br />
        {token && (
          <Footer>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={4}>
                <Button
                  onClick={() => handlePageUpdate(-1)}
                  disabled={page === 0}
                >
                  上一頁
                </Button>
              </FlexboxGrid.Item>

              <FlexboxGrid.Item colspan={4}>
                <Button
                  onClick={() =>
                    page < 4 ? handlePageUpdate(1) : handleSubmit()
                  }
                >
                  {page < 4 ? "下一頁" : "提交"}
                </Button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Footer>
        )}
      </>
    );
  };
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
        {isSubmit ? finishPage() : formPage()}
      </Panel>
    </Container>
  );
}

export default App;
