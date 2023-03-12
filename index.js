const heroDOM = document.querySelector(".hero-section");
const card = document.querySelector(".card");

async function fetchdata() {
  try {
    const res = await fetch("https://valorant-api.com/v1/agents");
    const jsq = await res.json();

    let info = jsq.data;

    info = info.map((inf) => {
      const { description, displayName, fullPortrait } = inf;
      //   const { role } = inf?.role?.displayName;
      return { description, displayName, fullPortrait };
    });
    console.log(info);

    return info;
  } catch (e) {
    console.log(e);
  }
}
function displaydata(data) {
  data.forEach((data) => {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src=${data.fullPortrait} alt="img" height="200px" />
    <div class="container">
      <h3>Character Name: ${data.displayName}</h3>
      <p>Description:${data.description}</p>
      <p>Role:</p>`;
    heroDOM.appendChild(div);
  });
}
let info = fetchdata();

info.then((data) => displaydata(data));

// getData("https://valorant-api.com/v1/agents");
// function getData(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.results);
//       showData(data.results);
//     });
// }
// function showData(d) {
//   heroDOM.innerHTML = "";
//   data.forEach((info) => {
//     const { description, displayName, fullPortrait } = info;
//     const mainel = document.createElement("div");
//     mainel.classList.add("card");
//     mainel.innerHTML = ``;
//   });
// }

// const heroDOM = document.querySelector(".hero-section");
// const card = document.querySelector(".card");

// async function fetchdata() {
//   try {
//     const res = await fetch("https://valorant-api.com/v1/agents");
//     const jsq = await res.json();

//     let info = jsq.data;

//     info = info.map((inf) => {
//       const { description, displayName, fullPortrait } = inf;
//       //   const { role } = inf?.role?.displayName;
//       return { description, displayName, fullPortrait };
//     });
//     console.log(info);

//     return info;
//   } catch (e) {
//     console.log(e);
//   }
// }
// function displaydata(data) {
//   data.forEach((data) => {
//     console.log(data);
//   });
// }
// let info = fetchdata();
// info.then(() => displaydata(info));
