# Wanted-pre-onboarding-frontend

- 원티드 프리온보딩 사전과제

<br/><br/>

## 설치, 환경설정 및 실행방법

```
1. git clone https://github.com/w00jinkim/wanted-pre-onboarding-frontend.git
2. cd [folder name]
3. cd client
4. npm install
5. npms start (리액트가 켜지길 기다립니다.)
6. ctrl + c (터미널)
7. npm build
8. 빌드되는걸 기다립니다.
9. cd ..
10. cd server
11. npm install
12. npm start (노드가 켜지길 기다립니다.)
13. ctrl + c (터미널)
14. cd ..
15. 경로가 최상위 디렉토리인지 확인
16. 최상위 디렉토리에서 npm install
17. 같은 디렉토리에서 npm start!
```
<br/><br/>

## 배포/ 데모영상 
- <a href="https://6439018c88cbe71b26c0f586--cute-crisp-d78737.netlify.app/">넷틀리파이링크<a/> 배포로 데모영상 대체

<br/><br/>
  
## 참여자

|                                                                Front-end                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                 김우진                                                                  |
|               <img width="95px" height="95px" src="https://avatars.githubusercontent.com/u/111094669?v=4" alt="avatar"/>                |
| [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/w00jinkim) |
  
<br/><br/>
  
## 구현사항 
  <br/>
1. 로그인 / 회원가입 <br/>
- [x] 각 input 및 button 속성부여 
  <br/>
- [x] Assignment 1 
  <br/>
회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요<br/>
&nbsp; 이메일 조건: @ 포함<br/>
&nbsp; 비밀번호 조건: 8자 이상<br/>
&nbsp; 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위, 비밀번호 확인 조건을 추가하는 행위 등은 지양해주세요)<br/>
&nbsp; 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요<br/>
<br/>
- [x] Assignment 2<br/>
회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요<br/>
- [x] Assignment 3<br/>
로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요<br/>
&nbsp;로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.<br/>
&nbsp;응답받은 JWT는 로컬 스토리지에 저장해주세요<br/>

- [x] Assignment 4 <br/>
로그인 여부에 따른 리다이렉트 처리를 구현해주세요<br/>

&nbsp;로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요<br/>
&nbsp;로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요<br/>

  
2. TODO LIST<br/>

- [x] Assignment 5<br/>
&nbsp;/todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요<br/>
&nbsp;목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.<br/>
&nbsp;TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요<br/>
&nbsp;TODO는 <li> tag를 이용해 감싸주세요<br/>

- [x] Assignment 6 <br/>
&nbsp;리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요 <br/>

&nbsp;TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해주세요 <br/>

&nbsp;TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해주세요 <br/>

&nbsp;<input data-testid="new-todo-input" /> <br/>
&nbsp;<button data-testid="new-todo-add-button">추가</button> <br/>
&nbsp;추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요 <br/>

&nbsp;TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다. <br/>

- [x] Assignment 7 <br/>
TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요. <br/>
  
- [x] Assignment 8 <br/>
TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요 <br/>

&nbsp;수정 버튼에는 data-testid="modify-button" 속성을 부여해주세요 <br/>

&nbsp;삭제 버튼에는 data-testid="delete-button" 속성을 부여해주세요 <br/>

- [x] Assignment 9 <br/>
&nbsp;투두 리스트의 삭제 기능을 구현해주세요 <br/>

&nbsp;투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요 <br/>
  
- [x] Assignment 10 <br/>
&nbsp;투두 리스트의 수정 기능을 구현해주세요 <br/>

&nbsp;TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요 <br/>

&nbsp;수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다. <br/>

&nbsp;수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요 <br/>

&nbsp;수정 input창에는 data-testid="modify-input" 속성을 부여해주세요 <br/>
&nbsp;수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요 <br/>

&nbsp;제출버튼에는 data-testid="submit-button" 속성을 부여해주세요 <br/>
&nbsp;취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요 <br/>
&nbsp;제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요 <br/>

&nbsp;취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요 <br/>

## 개발 기간

- 2023-04-03 ~ 2023-04-14

## TECH-STACKS

### Front-End

<p>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=TailwindCSS&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Netlify-00C7B7?logo=Netlify&logoColor=white&style=for-the-badge" />
