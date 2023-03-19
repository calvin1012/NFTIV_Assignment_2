import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

function FormB2_2() {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    lostWorkDays: '',
    explanatoryNote: '',
  });


  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <Form ref={formRef} formValue={formValue} onChange={(formValue) => {setFormValue(formValue);}}layout="inline">
        <CustomField name="lostWorkDays" label="工傷損失天數: " />
        <CustomField name="explanatoryNote" label="解釋性說明: " />
      <Button appearance="primary" onClick={handleSubmit}>
        提交報告
      </Button>
    </Form>

  );
}

export default FormB2_2;