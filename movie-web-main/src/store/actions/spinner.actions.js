import { START_SPINNER, END_SPINNER } from "store/constants/spinner.constants";
export const setSpinnerStart = () => {
  return {
    type: START_SPINNER,
  };
};
export const setSpinnerEnd = () => {
    return {
      type: END_SPINNER,
    };
  };
