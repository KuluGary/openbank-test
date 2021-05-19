const checkPassword = (password) => {
  const strongRegex = new RegExp(/(?=^.{8,32}$)(?=(?:.*?\d){1})(?=.*[a-z])|(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z]*$/);
  
  return strongRegex.test(password);
}

export { checkPassword };