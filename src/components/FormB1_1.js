import { CustomField } from "./CustomField";

export const FormB1_1FormValue = {
  totalEmployees: "",
  totalMaleEmployees: "",
  totalFemaleEmployees: "",
  fullTimeEmployees: "",
  partTimeEmployees: "",
  contractWorkers: "",
  interns: "",
  volunteers: "",
  ageGroup: "",
  geographicalArea: "",
  explanatoryNote: "",
};

export const FormB1_1 = (
  <>
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
  </>
);
