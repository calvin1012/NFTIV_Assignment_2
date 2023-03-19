import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

function FormB1_2() {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    totalTurnoverRate: '',
    maleTurnoverRate: '',
    femaleTurnoverRate: '',
    ageGroupTurnoverRate: '',
    regionTurnoverRate: '',
    explanatoryNote: '',
  });


  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <Form ref={formRef} formValue={formValue} onChange={(formValue) => {setFormValue(formValue);}}layout="inline">
        <CustomField name="totalTurnoverRate" label="員工總離職率: " />
        <CustomField name="maleTurnoverRate" label="男性員工離職率: " />
        <CustomField name="femaleTurnoverRate" label="女性員工離職率: " />
        <CustomField name="ageGroupTurnoverRate" label="相關年齡段員工流失率: " />
        <CustomField name="regionTurnoverRate" label="相關地區員工流失率: " />
        <CustomField name="explanatoryNote" label="解釋性說明: " />
      <Button appearance="primary" onClick={handleSubmit}>
        提交報告
      </Button>
    </Form>

  );
}

export default FormB1_2;