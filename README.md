# webpack-basic
<hr>

## NPM
### npm init 
>- 기본적인 프로젝트 세팅을 한다. 명령어를 입력 후에 package.json 생성
>- package.json에서 설정값 수정.
### npm init -y
>- 기본값을 바로 생성해줌

### 라이브러리 다운로드
 > - npm install 
 > - ex ) npm install jquery ==> node_modules에 라이브러리가 생김
 > - 보통 노드모듈 밑에 라이브러리 밑에 dist에 있음

### npm 장점
> 1. 라이브러리를 관리 하지 않으면 라이브러리 충돌이나 의존관계가 엇갈리게 된다
> --> ```npm```으로 깔끔하게 관리 할 수 있음
> 2. 해당 ```CDN```을 직접 들고 오지 않아도 된다


### npm 설치 명령어
 #### 1. uninstall
> - ```npm install gulp```를 설치.
> - ```npm uninstall gulp```로 삭제
 #### 2. --global
>- ```--global``` 로 설치 하면 전역으로 설치된다. 로컬 시스템 어딘가에 설치됌
>- *%userprofile/AppData/Roaming/npm/node_modules* 에 설치된다
>- 시스템레벨에 설치할 수 있는 라이브러리가 따로 있음

 ##### 3.  지역설치
>- ```--save-dev``` 혹은 ```-D``` 로 설치하면 package.json 에서 `devDependencies` 로 설치 됨
>- `dependencies` 와 `devDepenencies` 의 차이
>- dependencies : 화면 로직과 직접적으로 관련된 라이브러리 (배포라이브러리)
>- devDepenencies : 배포에 필요하지 않은 라이브러리 ex) `wepback` `eslint` `imagemin`
>- 라이브러리를 구분하지 않으면 빌드할 때 시간이 오래 걸린다. 잘 구분해서 의존성을 추가해야함 
 <hr>

## Webpack
- 모듈 번들러 -> 수많은 파일들을 별합 및 압충해서 하나로 합친다 ( 모듈 번들링 )
 
