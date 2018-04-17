export const fetchData = (type, url) => ({
  type,
  url
});

export const sendAction = type => ({
  type
});

export const setData = (type, payload) => ({
  type,
  payload
});

export const sendData = (type, url, payload) => ({
  type,
  url,
  payload
});