# React-интенсив 25

При создании приложения использовался API [OMDbapi](http://www.omdbapi.com)

Учебный проект выполнен в рамках React-интенсива компании Aston. Приложение позволяет выполнять поиск фильмов по названию, добавлять понравившиеся в избранное и иметь доступ к истории поиска. Для последних двух опций необходина регистрация. Реализованы следующие требования к функциональности:

## 1 уровень

### React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты. [/Loading](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Loading.js)/[Main](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Main.js)
- Есть рендеринг списков: [SearchedFilms](https://github.com/Gordijonok/gordijonok/blob/main/src/components/SearchedFilms.js), [Main](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Main.js), [History](https://github.com/Gordijonok/gordijonok/blob/main/src/components/History.js) , [Favourite](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Favourite.js)
- Реализована хотя бы одна форма: [Signin](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Signin.js), [Signup](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Signup.js)
- Есть применение Контекст API: [ThemeProvider](https://github.com/Gordijonok/gordijonok/blob/main/src/components/ThemeProvider.js)
- Есть применение предохранителя: [App](https://github.com/Gordijonok/gordijonok/blob/main/src/App.js)
- Есть хотя бы один кастомный хук: [useDebounce](https://github.com/Gordijonok/gordijonok/blob/main/src/hook/useDebounce.js)
- Хотя бы несколько компонентов используют PropTypes: [Likes](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Likes.js), [SearchedFilms](https://github.com/Gordijonok/gordijonok/blob/main/src/components/SearchedFilms.js)
- Поиск не должен триггерить много запросов к серверу: [useDebounce](https://github.com/Gordijonok/gordijonok/blob/main/src/hook/useDebounce.js) использован в компоненте [Main](https://github.com/Gordijonok/gordijonok/blob/main/src/components/Main.js)
- Есть применение lazy + Suspense: [App](https://github.com/Gordijonok/gordijonok/blob/main/src/App.js)

### Redux

- Используем Modern Redux with Redux Toolkit: [store](https://github.com/Gordijonok/gordijonok/blob/main/src/redux/store.js)
- Используем слайсы: [favouriteFilmsSlice](https://github.com/Gordijonok/gordijonok/blob/main/src/redux/favouriteFilmSlice.js), [historyFilmSlice](https://github.com/Gordijonok/gordijonok/blob/main/src/redux/historyFilmSlice.js)
- Есть хотя бы одна кастомная мидлвара: [middlware](https://github.com/Gordijonok/gordijonok/blob/main/src/redux/middlware.js)
- Используется RTK Query: [movieApi](https://github.com/Gordijonok/gordijonok/blob/main/src/redux/movieApi.js)
- Используется Transforming Responses: [movieApi](https://github.com/Gordijonok/gordijonok/blob/main/src/redux/movieApi.js)
