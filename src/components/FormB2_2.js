import React from "react";
import { InputNumber } from "rsuite";
import { CustomField } from "../components/CustomField";

export const FormB2_2FormValue = {
  lostWorkDays: "",
  explanatoryNote: "",
  injuryDeaths: "",
  highConsequenceInjuries: "",
  recordableInjuries: "",
  workHours: "",
};

export const FormB2_2 = (
  <>
    <CustomField
      name="lostWorkDays"
      label="工傷損失工作日數: "
      accepter={InputNumber}
      min={0}
      step={1}
    />
    <CustomField
      name="explanatoryNote"
      label="解釋性說明（包括所用標準、方法、假設和/或計算工具的信息）: "
    />
    <p>根據 200,000 或 1,000,000 工作小時計算費率，使用以下公式：</p>
    <CustomField
      name="injuryDeaths"
      label="工傷死亡人數: "
      accepter={InputNumber}
      min={0}
      step={1}
    />
    <CustomField
      name="workHours"
      label="工作小時: "
      accepter={InputNumber}
      min={0}
      step={1}
    />
    <CustomField
      name="highConsequenceInjuries"
      label="高後果工傷數量（不包括死亡）: "
      accepter={InputNumber}
      min={0}
      step={1}
    />
    <CustomField
      name="recordableInjuries"
      label="可記錄工傷數: "
      accepter={InputNumber}
      min={0}
      step={1}
    />
  </>
);

export default FormB2_2;
