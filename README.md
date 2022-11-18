# Peer Dev

이 프로젝트는 코드리뷰를 포함해 다양한 기능의 개발자 커뮤니티를 제작해보고자 만들어졌습니다.

## 사용한 기술

### [React](https://ko.reactjs.org/)
SPA를 위해 리액트를 사용했습니다.
라이브러리이기에 다른 SPA 프레임워크보다 자유도가 높아 선택하게 되었습니다.

### [TypeScript](https://www.typescriptlang.org/)
미리 타입을 지정해 성능을 높일 수 있고,컴파일 단계에서 오류를 파악할 수 있어
개발에 용이하기에 Typescript를 사용하게 되었습니다.

### [Yarn Berry](https://yarnpkg.com/)
npm이 제공하지 못하는 PnP와 zero-install을 통해
더 빠른 설치, 효율적인 의존성 관리, 가벼운 용량을 사용할 수 있도록 Yarn Berry를 사용했습니다.

### [Emotion.js](https://emotion.sh/docs/introduction)
JS와 CSS의 상태 공유, CSS 로드 우선순위, CSS클래스 네이밍 최소화를 위해
CSS-In-JS 라이브러리 중 Css-props를 제공하고 후에 SSR로 설정하기 용이한
Emotion.js를 사용하게 되었습니다.

### [React-Hook-Form](https://react-hook-form.com/)
React에서의 Form 사용을 효율적으로 하고, 가독성을 높이기 위해
React-Hook-Form 라이브러리를 사용하게 되었습니다.

### [Toast UI Editor](https://ui.toast.com/tui-editor)
Markdown과 WYSIWYG모드의 텍스트 편집기 중 가장 사용하기 편하다 느낀
Toast UI Editor를 사용하게 되었습니다. Viewer 또한 제공합니다.

### [Craco](https://www.npmjs.com/package/@craco/craco)
Emotion.js를 사용하기 위한 Pragma를 제거하기 위해 babel이 필요했습니다.
이를 위해 CRA의 eject가 아닌, 커스터마이징을 Craco로 진행했습니다.

## 사용하기

### `yarn start`
로컬 환경에서 개발 모드로 서비스를 실행합니다.
코드가 수정되면 페이지가 새로고침 됩니다.

### `yarn build`
Production용 앱을 'build'폴더에 배포가 가능하도록 빌드합니다.
React를 번들로 묶고, 높은 성능으로 빌드를 최적화합니다.