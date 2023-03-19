import React, { useRef, useState } from 'react';
import { Form, Button } from 'rsuite';
import {CustomField} from '../components/CustomField';

export const FormB2_2FormValue = ({
    lostWorkDays: '',
    explanatoryNote: '',
  });

  export function FormB2_2() {
  return (
    <div>
        <CustomField name="lostWorkDays" label="工傷損失天數: " />
        <CustomField name="explanatoryNote" label="解釋性說明: " />
    </div>
  );
}

export default FormB2_2;