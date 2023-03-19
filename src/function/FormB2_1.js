import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

function FormB2_1() {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    workRelatedDeaths: '',
    injuryDeathRate: '',
    dataYear1: '',
    dataYear2: '',
    dataYear3: '',
    explanatoryNote: '',
  });


  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <Form ref={formRef} formValue={formValue} onChange={(formValue) => {setFormValue(formValue);}}layout="inline">
        <CustomField name="workRelatedDeaths" label="與工作有關的死亡人數: " />
        <CustomField name="injuryDeathRate" label="報告期內基於工人人數或工作小時數的工傷死亡率: " />
        <CustomField name="dataYear1" label="三個報告期中的第一個報告期的數據: " />
        <CustomField name="dataYear2" label="三個報告期中的第二個報告期的數據: " />
        <CustomField name="dataYear3" label="三個報告期中的第三個報告期的數據: " />
        <CustomField name="explanatoryNote" label="解釋性說明: " />
      <Button appearance="primary" onClick={handleSubmit}>
        提交報告
      </Button>
    </Form>

  );
}

export default FormB2_1;