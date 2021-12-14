# Issues

## 001: tsc를 사용할 시 import에 .js extension이 자동으로 붙지 않는 문제

작성일 : 21/12/14

```ts
import App from "./App";
```

위의 코드를 컴파일 하면, `"./App.js`가 아니라 `"./App` 그대로다. 아무래도 typescript는 type만 검사하는 용도로 사용하고, 컴파일은 `babel`이나 `swc`를 사용해 보아야겠다. `swc`를 요새는 많이 사용하고, 만든 사람이 한국인(...)이라고 하니까 한 번 사용해 보면 좋을 것 같다. 아니면 아예 `webpack`같은 bundler를 사용해야 하는 걸까? `react`에서는 import를 extension없이 가능하게 만드는 건 무엇일까

typescript의 `github`에 나와 [같은 내용에 대한 이슈](https://github.com/microsoft/TypeScript/issues/16577)가 이미 존재한다.
