export function getDataFromLS(key, arg) {
  const data = JSON.parse(localStorage.getItem(key) ?? arg);
  return data;
}

export function removeDataFromLS(key) {
  localStorage.removeItem(key);
}

export function getDataToLS(key) {
  return localStorage.getItem(key);
}

export function setDataToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function deleteLike(key, data) {
  const films = getDataFromLS(key, "[]").filter(
    (item) => item.imdbID !== data.imdbID
  );
  localStorage.setItem(key, JSON.stringify(films));
}

export function LSkey(type) {
  const user = JSON.parse(localStorage.getItem("isAuthorized") ?? "[]");
  if (user) {
    return `${user} ${type}`;
  } else {
    return "";
  }
}
