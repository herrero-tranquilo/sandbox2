### yarn berry로 버전변경

```shell

    # yarn version
    yarn -v

    # yarn version 변경
    yarn set version berry
    # or
    yarn set version stable
    # or RC
    yarn set version 4

    # yarn 버전 확인
    yarn -v
```

### yarn workspace 패키지 만들기

```shell

    # packages 디렉토리 생성 // 루트 초기화
    # https://yarnpkg.com/cli/init
    yarn init -w
```

### root package.json 수정

```

    # apps package 추가
    # package.json

    "workspaces": [
        "apps/*", //추가
        "packages/*"
    ]

```

### apps 폴더에 next 프로젝트 추가

```shell

    mkdir apps
    cd apps
    yarn create next-app

    Typescript: yes Enter
    ESLint: yes Enter




```

```
    # apps/web/package.json
    {
     "name": "@arhan/web", // 변경 패키지의 이름이 겹칠 가능성이 있어 네임스페이스화
    }

    # 패키지 관리는 항상 root에서
    # 설정이 바뀌면 root에서 yarn을 한번 실행해서 설정파일을 최신화

```

```shell

   # root
   yarn workspace @arhan/web dev

   # 2022.12.20 현재기준 Create Next App에 추가 된 @next/font의 의존성 때문에 실행이 되지 않음
   # @next/font tried to access next, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.
   # https://woong-jae.com/projects/220711-pnp-dependency-error

   # .yarnrc.yml에 pnpMode: loose 추가


```

### packages/lib 추가

```shell

    mkdir packages/lib
    mkdir packages/lib/src
    cd packages/lib
    yarn init


```

```
    # package.json

    {
        "name": "@arhan/lib",
        "packageManager": "yarn@3.3.0",
        "main": "src/index.ts",
        "devDependencies": {
            "typescript": "^4.9.4"
        }
    }

```

### 변경사항 적용

```shell

    # at root
    yarn
```

### packages/lib typescript 설치

```shell

    yarn workspace @arhan/lib add typescript -D
```

```
    # lib/tsconfig.json
    {
        "$schema": "https://json.schemastore.org/tsconfig",
        "compilerOptions": {
            "strict": true,
            "useUnknownInCatchVariables": true,
            "allowJs": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,
            "isolatedModules": true,
            "newLine": "lf",
            "module": "ESNext",
            "moduleResolution": "node",
            "target": "ESNext",
            "lib": ["ESNext", "dom"],
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "baseUrl": "./src",
            "noEmit": false,
            "incremental": true,
            "resolveJsonModule": true,
            "paths": {}
        },
        "exclude": ["**/node_modules", "**/.*/", "./dist", "./coverage"],
        "include": ["**/*.ts", "**/*.js", "**/.cjs", "**/*.mjs", "**/*.json"]
    }
```

### apps/web/package.json에 패키지 의존 추가 web -> lib

```shell
    yarn workspace @arhan/web add @arhan/lib

    # web/package.json에 "@arhan/lib": "workspace:^",가 추가됨
```

### apps/web typescript error 해결

```shell

    # ./apps/web/pages/index.tsx를 보면 typescript error가 발생
    # yarn berry가 npm과 모듈을 불러오는 방식이 다르기 때문에 생기는 문제
    # https://yarnpkg.com/getting-started/editor-sdks
    yarn add -D typescript
    yarn dlx @yarnpkg/sdks vscode

    # .yarn/sdks가 추가됨

    # apps/web/tsconfig.json paths 추가
    {
        "compilerOptions": {
            ...
            "paths": { "@arhan/lib/*": ["../../../packages/lib/src/*"] }
        }
    }
```

### yarn PnP 사용을 위한 vscode extension 설치 arcanis.vscode-zipfs

```
    # .vscode/extensions.json에 추가
    {
        "recommendations": ["arcanis.vscode-zipfs"]
    }
```

yarn dlx @yarnpkg/sdks -h

yarn1 node_modules 에서 마이그레이션 브릿지: https://yarnpkg.com/configuration/yarnrc/#nodeLinker
