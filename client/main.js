







import { 
  insertLast, 
  power,
  delayP,
  getNode,
  renderUserCard
} from "./lib/index.js";



/*
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
   (res)=>{
     insertLast('body',JSON.stringify(res))
   },
   (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
   }
  )
*/

// rendingUserList
// ajax get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

// 1. userList.js -> renderUserCard 함수를 만들기
// 2. 만들어진 함수 안에 createUserCard를 던지고 
// 3. renderUserCard함수를 사용했을 때 랜더링이 잘 될 수 있도록

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList(){

  let response = await power.get('https://jsonplaceholder.typicode.com/users/1')

  let userData = response.data;

  console.log(userData);

  renderUserCard(userCardContainer, userData)

}


rendingUserList();