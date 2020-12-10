export function isValueEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function isValidMobileNumber(mobile) {
  return /^[6-9]\d{9}$/.test(mobile);
}
