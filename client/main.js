







import { 
  xhrData, 
  insertLast, 
  xhrPromise, 
  power 
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

async function render(){
  
  let response = await power.get('https://jsonplaceholder.typicode.com/users/1')


  console.log(response.data);
}

render()