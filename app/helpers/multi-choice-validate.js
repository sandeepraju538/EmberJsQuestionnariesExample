import { helper } from '@ember/component/helper';

export function multiChoiceValidate([value, ...rest]) {
  if (value.multiple === "true") {
    return true;
  } else {
    return false;
  }
}
export default helper(multiChoiceValidate);