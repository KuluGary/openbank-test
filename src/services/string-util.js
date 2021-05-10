const checkPassword = (password) => {
  return /[a-zA-Z0-9]{8,24}/.test(password);
}

export { checkPassword };