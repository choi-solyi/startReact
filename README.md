# React

## React 신규 프로젝트 생성

- 신규 프로젝트 설치

```git
$ npx create-react-app [프로젝트 이름]
```

## React 서버

- 개발모드 실행

```git
$ npm start
```

- 프로덕션 모드 실행

```git
$ npm run build
$ (npx) serve -s build
```

- 테스트 모드 실행

```git
$ npm test
```

- eject - CRA를 제거하는것. 되돌릴수없다. CRA로 해결이 안되는 경우에 제거

```git
$ npm eject
```

## 플러그인 설치

- SASS

```git
$ npm i sass
```

- class Names

```git
$ npm i classnames
```

- Styled Component

```git
$ npm i styled-components
```

- react-shodow

```git
$ npm i react-shodow
```

- antd

```git
$ npm i antd
```

- antd icons

```git
$ npm i --save @ant-design/icons
```

## 학습일자 및 내용

- 2021년 11월 1일 월요일

  - Part10_Ch1.react 개념 및 라이브러리

- 2021년 11월 2일 화요일

  - Part10_Ch3. 리액트 프로젝트 시작

- 2021년 11월 3일 수요일

  - Part10_Ch4. React Router
    - exact
    - /about:name 처럼 param 경로로 이동하는 방법과 query-string을 사용해서 동하는 방법
    - Not Found 페이지
    - Link
    - NavLink
    - JS로 라우팅 이동하기
      1. HOC (withRouter)
      1. Hook
    - [Github에서 확인하기](https://github.com/choi-solyi/startReact/tree/master/react-router-example)

- 2021년 11월 4일 목요일

  - Part10_Ch5. React Compnent Styling

    - Style Loader
      - BEM : http://getbem.com/
      - [Github에서 확인하기](https://github.com/choi-solyi/startReact/tree/master/style-loaders-example)
    - CSS Module, SASS Module
    - Styled Component 1, 2
      - [Github에서 확인하기](https://github.com/choi-solyi/startReact/tree/master/styled-components-example)
    - React Shadow
      - [Github에서 확인하기](https://github.com/choi-solyi/startReact/tree/master/react-shadow-example)
    - Ant Design : https://ant.design/
      - [Github에서 확인하기](https://github.com/choi-solyi/startReact/tree/master/antd-example)
