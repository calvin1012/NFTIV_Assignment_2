import React from 'react';
import { Form, InputNumber, Input } from 'rsuite';
import {CustomField} from '../components/CustomField';

export const FormB2_1FormValue = {
    workRelatedDeaths: '',
    injuryDeathRate: '',
    dataYear1: '',
    dataYear2: '',
    dataYear3: '',
    explanatoryNote: '',
  };

  export const FormB2_1 = (
    <div>
            <h4>與工作有關的死亡人數:</h4>
      <CustomField
        name="workRelatedDeathsYear1"
        label="報告年的前兩個年度 (例如，如果報告年是 2020 日曆年，則為 2018): "
        accepter={InputNumber}
        min={0}
        step={1}
      />
      <CustomField
        name="workRelatedDeathsYear2"
        label="報告年的前一個年度 (例如，如果報告年是 2020 日曆年，則為 2019): "
        accepter={InputNumber}
        min={0}
        step={1}
      />
      <CustomField
        name="workRelatedDeathsYear3"
        label="報告年 (例如，如果報告年是 2020 日曆年，則為 2020): "
        accepter={InputNumber}
        min={0}
        step={1}
      />
      <h4>報告期內基於工人人數或工作小時數的工傷死亡率:</h4>
      <CustomField
        name="injuryDeathRateYear1"
        label="報告年的前兩個年度 (例如，如果報告年是 2020 日曆年，則為 2018): "
        accepter={InputNumber}
        min={0}
        step={0.01}
      />
      <CustomField
        name="injuryDeathRateYear2"
        label="報告年的前一個年度 (例如，如果報告年是 2020 日曆年，則為 2019): "
        accepter={InputNumber}
        min={0}
        step={0.01}
      />
      <CustomField
        name="injuryDeathRateYear3"
        label="報告年的前兩個年度 (例如，如果報告年是 2020 日曆年，則為 2020): "
        accepter={InputNumber}
        min={0}
        step={0.01}
      />
      <CustomField
        name="explanatoryNote"
        label="解釋性說明: "
        accepter={Input}
      />
    </div>
  );

export default FormB2_1;