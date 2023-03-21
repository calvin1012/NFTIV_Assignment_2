import React from "react";
import { CustomField } from "../components/CustomField";

export const FormB2_2FormValue = {
  lostWorkDays: "",
  explanatoryNote: "",
};

export const FormB2_2 = (
  <>
    <CustomField name="lostWorkDays" label="工傷損失天數: " />
    <CustomField name="explanatoryNote" label="解釋性說明: " />
  </>
);

export default FormB2_2;
