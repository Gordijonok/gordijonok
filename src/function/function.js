export function getDataFrom(key, arg) {
  const data = JSON.parse(localStorage.getItem(key) ?? arg);
  return data;
}

export function removeDataFrom(key) {
  localStorage.removeItem(key);
}

export function getDataTo(key) {
  return localStorage.getItem(key);
}

export function setDataTo(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function deleteLike(key, data) {
  const films = getDataFrom(key, "[]").filter(
    (item) => item.imdbID !== data.imdbID
  );
  localStorage.setItem(key, JSON.stringify(films));
}

export function key(type) {
  const user = JSON.parse(localStorage.getItem("isAuthorized") ?? "[]");
  if (user) {
    return `${user} ${type}`;
  } else {
    return "";
  }
}

export function selector(type) {
  if (type === "fav") {
    return (state) => state.favoriteMovies.favoriteMovies;
  }
  if (type === "history") {
    return (state) => state.historyMovies.historyMovies;
  }
}
