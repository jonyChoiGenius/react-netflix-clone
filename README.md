# 따라하며 배우는 리액트 A-Z
넷플릭스 클론코딩 만들기  
[링크](https://www.inflearn.com/course/따라하는-리액트)   

### TMBD api
(https://developers.themoviedb.org/3)  

API키 8506b3753519abc3454b87370bbc859a

Get Movie BY Latest : https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

Get Movie Detail : https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

Get Movie Reviews : https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

Get Trending : https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>  
https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>


### Axios 설치
`npm install axios --save`

#### 인스턴스 생성
api폴더 생성, 폴더 안에
axios.js, requests.js 생성

axios.js
instance라는 변수에 axios.create로 baseURL, params로 인스턴스 생성.
인스턴스에서 다른 부분만 requests.js에서 생성.

```js
//axios.js
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "asdf"
        language: "ko-KR"
    },
})
```

```js
const requests= {
    fetchnNowPlaying: "movie/now_playing",
    fetchNetflixOriginals: "/discover/tv?with_networks=213",
}

export default requests;
```

## 넷플릭스 어플리케이션 전체 구조
네비게이션바
배너
장르별 rows
푸터










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
