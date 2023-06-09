import { Fragment } from "react";
import { InputNumber } from "rsuite";
import { CustomField } from "./CustomField";

export const FormB1_1FormValue = {
  // totalEmployees: "",
  // totalMaleEmployees: "",
  // totalFemaleEmployees: "",
  // fullTimeEmployees: "",
  // partTimeEmployees: "",
  // contractWorkers: "",
  // interns: "",
  // volunteers: "",
  // ageGroup: "",
  // geographicalArea: "",
  // explanatoryNote: "",
};

const age = [
  ["<30", "_30"],
  ["30-50", "_30_50"],
  [">50", "_50"],
].map((item) => ({
  label: item[0],
  value: item[1],
}));

export const FormB1_1 = (
  <>
    {age.map((ageGroup) => (
      <Fragment key={ageGroup.value}>
        <h4>{ageGroup.label}</h4>
        <CustomField
          name={`totalEmployees.${ageGroup.value}`}
          label="員工的總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`totalMaleEmployees.${ageGroup.value}`}
          label="男性員工總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`totalFemaleEmployees.${ageGroup.value}`}
          label="女性員工總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`fullTimeEmployees.${ageGroup.value}`}
          label="全職員工總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`partTimeEmployees.${ageGroup.value}`}
          label="兼職員工總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`contractWorkers.${ageGroup.value}`}
          label="合同工總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`interns.${ageGroup.value}`}
          label="實習生總人數: "
          accepter={InputNumber}
          min={0}
        />
        <CustomField
          name={`volunteers.${ageGroup.value}`}
          label="志願者總人數: "
          accepter={InputNumber}
          min={0}
        />
      </Fragment>
    ))}
    <br />
    <CustomField name="geographicalArea" label="地理區域: " />
    <CustomField name="explanatoryNote" label="解釋性說明: " />
  </>
);
