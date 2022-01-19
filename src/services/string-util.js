import { PASSWORD_REGEX } from "../consts";

const checkPassword = (password) => {
  const strongRegex = new RegExp(PASSWORD_REGEX);
  
  return strongRegex.test(password);
}

export { checkPassword };