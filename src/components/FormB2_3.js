import React from 'react';
import { Checkbox,CheckboxGroup, Radio, RadioGroup, Rate, Form, Input, FlexboxGrid } from 'rsuite';
import { CustomField } from '../components/CustomField';

export const FormB2_3FormValue = {
  healthSystemImplemented: '',
  safetySystemImplemented: '',
  recognizedStandard: '',
  healthServicesProvided: '',
  healthPromotion: '',
  coveredWorkers: '',
  responsibleParties: '',
  leadingIndicators: '',
};

export const FormB2_3 = (
    <div>
    <FlexboxGrid justify="start">
    <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="healthSystemImplemented"
        label="是否實施了職業健康體系:"
        accepter={RadioGroup}
      >
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </CustomField>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="safetySystemImplemented"
        label="是否實施了安全管理體系:"
        accepter={RadioGroup}
      >
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </CustomField>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="recognizedStandard"
        label="是否採用了公認的風險管理和/或管理體系標準/指南:"
        accepter={RadioGroup}
      >
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </CustomField>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="healthServicesProvided"
        label="是否提供職業健康服務:"
        accepter={RadioGroup}
      >
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </CustomField>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="healthPromotion"
        label="如何促進員工健康:"
        accepter={CheckboxGroup}
      >
        <CheckboxGroup>
        <Checkbox value="smokingCessation">戒煙計劃</Checkbox>
        <Checkbox value="dietAdvice">飲食建議</Checkbox>
        <Checkbox value="healthyCanteen">提供健康食品的食堂</Checkbox>
        <Checkbox value="stressReduction">減壓計劃</Checkbox>
        <Checkbox value="employeeHealthProgram">員工健康計劃</Checkbox>
        <Checkbox value="gymFacilities">提供健身房/健身設施</Checkbox>
        </CheckboxGroup>
      </CustomField>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="coveredWorkers"
        label="涵蓋的工人、活動和工作場所的範圍:"
        accepter={Input}
      />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="responsibleParties"
        label="誰負責，他們做什麼以及向誰報告:"
        accepter={Input}
      />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      <CustomField
        name="leadingIndicators"
        label="用於向管理層和其他利益相關者（例如監管機構）通報職業健康和安全績效的領先指標:"
        accepter={Input}
      />
      </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );

export default FormB2_3;