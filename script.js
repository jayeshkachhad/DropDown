const mainDrop = document.querySelector("#mainDrop");
const mainOps = document.querySelectorAll(".mainOps");
const mid2 = document.getElementById("mid2");

// mainDrop.onclick = () => {

//     console.log("dshjdsg");
//     mainOps.forEach(op => op.style.display = "block")
// }


let values = []

for (let i = 0; i < 15; i++) {
    values.push(i)
}

// console.log(values);

// mid2.innerHTML = "";
// values.forEach(function (v) {
//     let tile = document.createElement("div")
//     tile.classList.add("tiles")

//     tile.innerHTML = `
//                 <div class="tileHeading">
//                 <h5>Heading ${v}</h5>
//                 <img src="/down.svg" alt="Down" height="40px">
//             </div>
//             <ul> Menu ${v} <img src="/down.svg" alt="subMenu" height="20px"> 
                
//             </ul>
// `
//     mid2.appendChild(tile)
// })


// document.getElementsByTagName("select")[0].selectedIndex = 2;