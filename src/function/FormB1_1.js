import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

function FormB1_1() {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    totalEmployees: '',
    totalMaleEmployees: '',
    totalFemaleEmployees: '',
    fullTimeEmployees: '',
    partTimeEmployees: '',
    contractWorkers: '',
    interns: '',
    volunteers: '',
    ageGroup: '',
    geographicalArea: '',
    explanatoryNote: '',
  });


  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <Form ref={formRef} formValue={formValue} onChange={(formValue) => {setFormValue(formValue);}}layout="inline">
        <CustomField name="totalEmployees" label="員工的總人數: " />
        <CustomField name="totalMaleEmployees" label="男性員工總人數: " />
        <CustomField name="totalFemaleEmployees" label="女性員工總人數: " />
        <CustomField name="fullTimeEmployees" label="全職員工總人數: " />
        <CustomField name="partTimeEmployees" label="兼職員工總人數: " />
        <CustomField name="contractWorkers" label="合同工總人數: " />
        <CustomField name="interns" label="實習生總人數: " />
        <CustomField name="volunteers" label="志願者總人數: " />
        <CustomField name="ageGroup" label="年齡組: " />
        <CustomField name="geographicalArea" label="地理區域: " />
        <CustomField name="explanatoryNote" label="解釋性說明: " />
      <Button appearance="primary" onClick={handleSubmit}>
        提交報告
      </Button>
    </Form>

  );
}

export default FormB1_1;