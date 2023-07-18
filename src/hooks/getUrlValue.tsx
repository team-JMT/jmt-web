const getUrlValue = () => {
  const path = window.location.pathname;
  const split = path.split('/');
  const value = split[2];

  return Number(value);
};

export default getUrlValue;
