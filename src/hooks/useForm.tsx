import React, { useReducer } from "react";
import { Filters } from "types/Filters";

enum FormActionKind {
  INPUT_CHANGE = "INPUT_CHANGE",
  CHECKBOX_TOGGLE = "CHECKBOX_TOGGLE",
}
interface FormAction {
  type: FormActionKind;
  field: string;
  value: string;
}

const reducer = (state: Filters, action: FormAction) => {
  switch (action.type) {
    case FormActionKind.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case FormActionKind.CHECKBOX_TOGGLE:
      return {
        ...state,
        [action.field]: !state.contractFilter,
      };

    default:
      return state;
  }
};

const useForm = (initialValues: Filters) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActionKind.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleToggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActionKind.CHECKBOX_TOGGLE,
      field: e.target.name,
      value: e.target.value,
    });
  };
  return { formValues, handleInputChange, handleToggleCheckbox };
};

export default useForm;
