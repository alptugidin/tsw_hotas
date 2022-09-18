const colorToNumber = (digits) => {
  let output = 0;
  // eslint-disable-next-line max-len
  if (digits.digit0 && digits.digit1 && digits.digit2 && !digits.digit3 && digits.digit4 && digits.digit5 && digits.digit6) {
    output = 0;
    // eslint-disable-next-line max-len
  } if (!digits.digit0 && !digits.digit1 && digits.digit2 && !digits.digit3 && !digits.digit4 && digits.digit5 && !digits.digit6) {
    output = 1;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && !digits.digit1 && digits.digit2 && digits.digit3 && digits.digit4 && !digits.digit5 && digits.digit6) {
    output = 2;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && !digits.digit1 && digits.digit2 && digits.digit3 && !digits.digit4 && digits.digit5 && digits.digit6) {
    output = 3;
    // eslint-disable-next-line max-len
  } if (!digits.digit0 && digits.digit1 && digits.digit2 && digits.digit3 && !digits.digit4 && digits.digit5 && !digits.digit6) {
    output = 4;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && digits.digit1 && !digits.digit2 && digits.digit3 && !digits.digit4 && digits.digit5 && digits.digit6) {
    output = 5;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && digits.digit1 && !digits.digit2 && digits.digit3 && digits.digit4 && digits.digit5 && digits.digit6) {
    output = 6;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && digits.digit1 && digits.digit2 && !digits.digit3 && !digits.digit4 && digits.digit5 && !digits.digit6) {
    output = 7;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && digits.digit1 && digits.digit2 && digits.digit3 && digits.digit4 && digits.digit5 && digits.digit6) {
    output = 8;
    // eslint-disable-next-line max-len
  } if (digits.digit0 && digits.digit1 && digits.digit2 && !digits.digit3 && digits.digit4 && digits.digit5 && digits.digit6) {
    output = 0;
  }
  return output;
};
exports.colorToNumber = colorToNumber;
