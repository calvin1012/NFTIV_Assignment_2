import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

function FormB2_3() {
  const formRef = useRef();
  const [formValue, setFormValue] = useState({
    qualitativeDescription: '',
    managementSystem: '',
    healthServices: '',
    scope: '',
    responsibility: '',
    leadingIndicators: '',
  });


  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <Form ref={formRef} formValue={formValue} onChange={(formValue) => {setFormValue(formValue);}}layout="inline">
        <CustomField name="qualitativeDescription" label="對發行人採取的相關措施的定性描述，以及這些措施的實施和監控情況: " />
        <CustomField name="managementSystem" label="是否實施了職業健康和安全管理體系，如果實施，是否採用了公認的風險管理和/或管理體系標準/指南: " />
        <CustomField name="healthServices" label="是否提供職業健康服務和自願健康促進服務，如果提供，發行人如何促進其員工的最: " />
        <CustomField name="scope" label="涵蓋的工人、活動和工作場所的範圍:: " />
        <CustomField name="responsibility" label="誰負責，他們做什麼以及向誰報告:: " />
        <CustomField name="leadingIndicators" label="用於向管理層和其他利益相關者（例如監管機構）通報職業健康和安全績效的領先指標:: " />
      <Button appearance="primary" onClick={handleSubmit}>
        提交報告
      </Button>
    </Form>

  );
}

export default FormB2_3;