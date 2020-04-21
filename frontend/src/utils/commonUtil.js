const copyToClipBoard = (txtElem) => {
  txtElem.select();
  document.execCommand("copy");
}

const targetElementById = (id) => {
  const textBox =  document.getElementById(id);
  return textBox
}


export default {
  copyToClipBoard,
  targetElementById
}