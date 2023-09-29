export const doDataLowerCaseID = (data) => {
  const transformedData = {};
  for (const key in data) {
    transformedData[key[0].toLowerCase() + key.slice(1)] = data[key];
  }
  return transformedData;
};

export const doDataLowerCase = (data) => {
  const transformedData = [];
  for (let i = 0; i < data.Search.length; i++) {
    const obj = {};
    for (const key in data.Search[i]) {
      obj[key[0].toLowerCase() + key.slice(1)] = data.Search[i][key];
    }
    transformedData.push(obj);
  }
  return transformedData;
};

export const doDataLowerCaseS = (data) => {
  const transformedData = [];
  if (data.Error) {
    return false;
  }
  for (let i = 0; i < data.Search.length; i++) {
    const obj = {};
    for (const key in data.Search[i]) {
      obj[key[0].toLowerCase() + key.slice(1)] = data.Search[i][key];
    }
    transformedData.push(obj);
  }
  return transformedData;
};
