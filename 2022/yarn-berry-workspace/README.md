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

```json

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

```json
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

yarn1 node_modules 에서 마이그레이션 브릿지: https://yarnpkg.com/configuration/yarnrc/#nodeLinker
