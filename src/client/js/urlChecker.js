const urlChecker = (inputURL) => {
  const regexp = inputURL.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);

  if (regexp == null) {
    return false;
  } else {
    return true;
  }
};

export { urlChecker };