import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

export const FormB2_1FormValue = ({
    workRelatedDeaths: '',
    injuryDeathRate: '',
    dataYear1: '',
    dataYear2: '',
    dataYear3: '',
    explanatoryNote: '',
  });

  export function FormB2_1() {
  return (
    <div>
        <CustomField name="workRelatedDeaths" label="與工作有關的死亡人數: " />
        <CustomField name="injuryDeathRate" label="報告期內基於工人人數或工作小時數的工傷死亡率: " />
        <CustomField name="dataYear1" label="三個報告期中的第一個報告期的數據: " />
        <CustomField name="dataYear2" label="三個報告期中的第二個報告期的數據: " />
        <CustomField name="dataYear3" label="三個報告期中的第三個報告期的數據: " />
        <CustomField name="explanatoryNote" label="解釋性說明: " />
    </div>
  );
}

export default FormB2_1;