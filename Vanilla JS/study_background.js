// 명언
const quotes = [
    {
        quote: "뛰어남이란 항상 더 잘하려고 노력하는 데에서 나온 꾸준한 결과이다.",
        author: "Pat Riley"
    },
    {
        quote: "긴 인내 후의 실패는 충분히 노력하지 않은 것보다 훨씬 더 위대하다.",
        author: "George Eliot"
    },
    {
        quote: "당신의 최대 기적에 가장 가까울 때, 당신은 가장 최대 역경을 마주하게 될 것이다.",
        author: "Shannon L. Alder"
    },
    {
        quote: "나는 실패한 적이 없다. 그저 작동하지 않는 10,000개의 방법들을 발견했을 뿐이다.",
        author: "Thomas A. Edison"
    },
    {
        quote: "이 세상에서 당신은 오직 당신이 잡으려고 손을 뻗은 것만을 얻는다.",
        author: "Giovanni Boccaccio"
    },
    {
        quote: "성공하기 전에는 항상 그것이 불가능한 것처럼 보이기 마련이다.",
        author: "Nelson Mandela"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// 배경사진
const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; // img folder
document.body.appendChild(bgImage);
