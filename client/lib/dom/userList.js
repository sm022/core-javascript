import { insertLast } from "./insert"



  
  const createUserCard = ({
    id = '',
    name = '',
    email = '',
    website:site = ''
  } = {}) => {

  return /* html */`
      <article class="user-card" data-index="user-${id}">
        <h3 class="user-name">${name}</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:${email}">${email}</a>
            </div>
            <div>
              <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
            </div>
          </div>
          <button class="delete">삭제</button>
      </article>
      `
}
  // createUserCard(1,'power','power@goggle.com','power.com')


  const createSpinner = (size=100, loadingMessage = '유저 정보를 가져오는 중..') => {
  return /* html */`
    <figure class="loadingSpinner">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(241, 242, 243); display: block;" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" preserveAspectRatio="xMidYMid">
      <g>
        <circle cx="60" cy="50" r="4" fill="#e048d6">
          <animate attributeName="cx" repeatCount="indefinite" dur="1.1494252873563218s" values="95;35" keyTimes="0;1" begin="-0.5829000000000001s"></animate>
          <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.1494252873563218s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.5829000000000001s"></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#e048d6">
          <animate attributeName="cx" repeatCount="indefinite" dur="1.1494252873563218s" values="95;35" keyTimes="0;1" begin="-0.2871s"></animate>
          <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.1494252873563218s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.2871s"></animate>
        </circle>
        <circle cx="60" cy="50" r="4" fill="#e048d6">
          <animate attributeName="cx" repeatCount="indefinite" dur="1.1494252873563218s" values="95;35" keyTimes="0;1" begin="0s"></animate>
          <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1.1494252873563218s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
        </circle>
      </g><g transform="translate(-15 0)">
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#e6c035" transform="rotate(90 50 50)"></path>
        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#e6c035">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.1494252873563218s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
        </path>
        <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#e6c035">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.1494252873563218s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
        </path>
      </g>
    </svg>

    <<figcaption>${loadingMessage}</figcaption>
    </figure>
    `
  }


 export const renderSpindder = (target) => {
    insertLast(target, createSpinner()); 
  }


  // renderSpinner

  const renderUserCard = (target,data) => {
    
    insertLast(target, createUserCard(data));
  }