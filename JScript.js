let i = 0;
const myJobs = [
  "UI designer",
  "front end web designer",
  "UI developer",
  "front end web developer",
];
const aboutMe = [
  "Name: Saba Shakeraneh",
  "Birthday: 15 February 1991",
  "Degree: Bachelor",
  "Field of Study: Computer Engineering",
  "Phone: +12 345 6789",
  "Email: saba_sana1395@yahoo.com",
  "Country: Tehran, Iran",
];
const SkillPercentage = [
  { title: "HTML", value: "95%", color: "pink" },
  { title: "Javascript", value: "75%", color: "aqua" },
  { title: "CSS", value: "90%", color: "red" },
  { title: "Angular JS", value: "45%", color: "yellow" },
  { title: "PHP", value: "70%", color: "green" },
  { title: "Wordpress", value: "55%", color: "purple" },
];
const reviews = [
  {
    id: 1,
    img: "assets/customers/IMG1.jpeg",
    name: "Susan Smith",
    text:
      "Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil.",
  },
  {
    id: 2,
    img: "assets/customers/IMG2.jpeg",
    name: "peter jones",
    text:
      "To watch the dancing is a breathtaking experience. Lombok has some impressive points of interest – the majestic Gunung Rinjani is an active volcano. It is the second highest peak in Indonesia. Art is a Balinese passion. Batik paintings and carved statues make popular souvenirs.",
  },
  {
    id: 3,
    img: "assets/customers/IMG3.jpeg",
    name: "anna johnson",
    text:
      "Artists can be seen whittling and painting on the streets, particularly in Ubud. It is easy to appreciate each island as an attractive tourist destination. Majestic scenery; rich culture; white sands and warm, azure waters draw visitors like magnets every year.",
  },
  {
    id: 4,
    img: "assets/customers/IMG4.jpeg",
    name: "bill anderson",
    text:
      "Snorkelling and diving around the nearby Gili Islands is magnificent. Marine fish, starfish, turtles and coral reef are present in abundance. Bali and Lombok are part of the Indonesian archipelago. Bali has some spectacular temples. The most significant is the Mother Temple, Besakih. The inhabitants of Lombok are mostly Muslim with a Hindu minority.",
  },
  {
    id: 5,
    img: "assets/customers/IMG5.jpeg",
    name: "donald knuth",
    text:
      "Knuth is the author of the multi-volume work The Art of Computer Programming. He contributed to the development of the rigorous analysis of the computational complexity of algorithms and systematized formal mathematical techniques for it. In the process, he also popularized the asymptotic notation.",
  },
];

const MyJob = document.getElementById("my-job");
const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");
let jobNum = 0;
let openedMenu = false;

function typeEraser() {
  MyJob.style.animation = "none";
  if (i >= 0) {
    let t = MyJob.textContent;
    MyJob.textContent = t.substring(0, i);
    i--;
    setTimeout(typeEraser, 30);
  } else {
    if (jobNum < myJobs.length - 1) {
      jobNum++;
    } else {
      jobNum = 0;
    }
    i = 0;
    setTimeout(typeWriter, 100);
  }
}

function typeWriter() {
  let txt = myJobs[jobNum];
  if (i >= 0 && i < txt.length) {
    MyJob.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else if (i === txt.length) {
    MyJob.style.animation = "Cursor .5s ease-in-out infinite";
    setTimeout(typeEraser, 1000);
  }
}

menuBtn.addEventListener("click", function () {
  const firstLine = document.getElementById("line1");
  const secondLine = document.getElementById("line2");
  const thirdLine = document.getElementById("line3");
  if (!openedMenu) {
    secondLine.style.opacity = 0;
    firstLine.style.transformOrigin = "-7px 10px";
    firstLine.style.transform = "translateY(-8px)rotate(45deg)";
    thirdLine.style.transform = "translateY(-8px)rotate(-45deg)";
    document.getElementById("Hdr").classList.toggle("column-menu");
    menuList.style.display = "flex";
    openedMenu = true;
  } else {
    secondLine.style.opacity = 1;
    firstLine.style.transform = "none";
    thirdLine.style.transform = "none";
    menuList.style.display = "none";
    document.getElementById("Hdr").classList.remove("column-menu");
    openedMenu = false;
  }
});
window.onscroll = function () {
  setTimeout(scrollFunction, 300);
};

function scrollFunction() {
  const percentDisplay = document.querySelectorAll(".skill-percent>div");
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    percentDisplay.forEach((element) => {
      element.style.width = element.getAttribute("percent");
      element.style.transition = "width 2s ease-in-out";
    });
  } else {
    percentDisplay.forEach((element) => {
      element.style.width = 0;
    });
  }
}

function AddMyInfo() {
  const myInfo = document.getElementById("my-info");
  aboutMe.forEach((item) => {
    myInfo.innerHTML += `<p>${item}</p>`;
  });
}

function AddSkillsChart() {
  const Skills = document.getElementById("skills-chart");
  SkillPercentage.forEach((skill) => {
    Skills.innerHTML += `<div class="skill-chart">
    <div class="skill-name-percent"><h3>${skill.title}</h3><span>${skill.value}</span></div>
    <div class="skill-percent"><div percent=${skill.value} style="background-color:${skill.color};"></div></div>
  </div>`;
  });
}

// const magnifier = document.querySelectorAll(".magnifier-img>span");
//  const magnifierPic = document.getElementById("big-pic");
// magnifier.forEach((item, number) => {
//   item.addEventListener("click", function () {
//     const pic = document.querySelector(`#img${number + 1}>img`);
//     const picSrc = pic.getAttribute("src");

//     magnifierPic.style.visibility = "visible";
//     magnifierPic.innerHTML = `<img src="${picSrc}" alt="pic" />`;
//   });
// });

// magnifierPic.addEventListener("click", function(){
//   magnifierPic.style.visibility = "hidden"
//     magnifierPic.innerHTML = "";
// });
function addCircles() {
  for (let i = 0; i < reviews.length; i++) {
    document.getElementById(
      "circles"
    ).innerHTML += `<div class='circle' id="C${i}" onclick="showReviewWithCircle(${i})"></div>`;
  }
}

function OnOffCircles(OnCircle) {
  for (let i = 0; i < reviews.length; i++) {
    document.getElementById(`C${i}`).style.backgroundColor = "#2930403b";
  }
  document.getElementById(`C${OnCircle}`).style.backgroundColor = "#293040";
}

let userNumber = -1;
let lastUserNumber = -1;
function showReview(userNum) {
  // if (lastUserNumber >= 0) {
  //   document.getElementById(`R${lastUserNumber}`).style.animation ="come-out-review 2.5s ease-in-out 1";
  //     console.log(`R${lastUserNumber}`);
  // }
  
  document.getElementById(
    "reviews-container"
  ).innerHTML = `<div class="review-customer" id="R${userNum}">
<img src="${reviews[userNum].img}" alt="customer-img" />
<p>${reviews[userNum].text}<br/><span>${reviews[userNum].name}</span></p>
</div>`;
  // document.getElementById(`R${userNum}`).style.animation =
  //   "come-in-review 2.5s ease-in-out 1";
  OnOffCircles(userNum);
}

function showAllReview() {
  showReview(userNumber);
  document.getElementById("next-btn").addEventListener("click", function () {
    if (
      userNumber >= 0 &&
      userNumber < reviews.length - 1 &&
      reviews[userNumber + 1]
    ) {
      lastUserNumber = userNumber;
      userNumber++;
      showReview(userNumber);
    } else if (userNumber == reviews.length - 1) {
      lastUserNumber = userNumber;
      userNumber = 0;
      showReview(userNumber);
    }
  });
  document.getElementById("back-btn").addEventListener("click", function () {
    if (
      userNumber <= reviews.length - 1 &&
      userNumber > 0 &&
      reviews[userNumber - 1]
    ) {
      lastUserNumber = userNumber;
      userNumber--;
      showReview(userNumber);
    } else if (userNumber == 0) {
      lastUserNumber = userNumber;
      userNumber = reviews.length - 1;
      showReview(userNumber);
    }
  });
}

function showReviewWithCircle(circleNumber) {
  lastUserNumber = userNumber;
  userNumber = circleNumber;
  showReview(userNumber);
}

function autoShowReview() {
  if (userNumber < reviews.length - 1) {
    lastUserNumber = userNumber;
    userNumber++;
  } else if (userNumber == reviews.length - 1) {
    lastUserNumber = userNumber;
    userNumber = 0;
  }
  showReview(userNumber);
  setTimeout(autoShowReview, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeWriter, 1000);
  AddMyInfo();
  AddSkillsChart();
  addCircles();
  autoShowReview();
  showAllReview();
});
