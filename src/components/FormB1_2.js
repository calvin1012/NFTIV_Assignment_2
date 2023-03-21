import { InputNumber, Input } from "rsuite";
import React from "react";
import { CustomField } from "./CustomField";

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

export const FormB1_2FormValue = {
  totalTurnoverRate: "",
  maleTurnoverRate: "",
  femaleTurnoverRate: "",
  ageGroupTurnoverRate: "",
  regionTurnoverRate: "",
  explanatoryNote: "",
};

export const FormB1_2 = (
  <>
    <CustomField
      name="totalTurnoverRate"
      label="員工總離職率: "
      accepter={InputNumber}
      postfix="%"
      defaultValue={0}
      max={100}
      min={0}
    />
    <CustomField
      name="maleTurnoverRate"
      label="男性員工離職率: "
      accepter={InputNumber}
      postfix="%"
      defaultValue={0}
      max={100}
      min={0}
    />
    <CustomField
      name="femaleTurnoverRate"
      label="女性員工離職率: "
      accepter={InputNumber}
      postfix="%"
      defaultValue={0}
      max={100}
      min={0}
    />
    <CustomField
      name="ageGroupTurnoverRate"
      label="相關年齡段員工流失率: "
      accepter={InputNumber}
      postfix="%"
      defaultValue={0}
      max={100}
      min={0}
    />
    <CustomField
      name="regionTurnoverRate"
      label="相關地區員工流失率: "
      accepter={InputNumber}
      postfix="%"
      defaultValue={0}
      max={100}
      min={0}
    />
    <CustomField
      name="explanatoryNote"
      label="解釋性說明: "
      accepter={Textarea}
      rows={5}
    />
  </>
);