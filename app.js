

let bollar = [
  {
    name: "Ulugbek",
    age: "16",
    jinsi : "erkak"
  },
  {
    name : "Ozod",
    age : 16,
    jinsi : "erkak"
  },
  {
    name : "Nodir",
    age : 17,
    jinsi : "erkak"
  },
  {
    name : "Doston",
    age : "18",
    jinsi : "erkak"
  },
  {
    name : "Ikrom",
    age : 14,
    jinsi : "erkak"
  }

];

let template = document.querySelector("template").content
let ul = document.querySelector("ul")

function renders(arr){
    for(let i = 0 ; i<arr.length; i++){
        let clone = template.cloneNode(true)
        let li = clone.querySelector("li")
        let ism = clone.querySelector("#ism")
        ism.appendChild(document.createTextNode(arr[i].name))
        let yosh = clone.querySelector("#yosh")
        yosh.textContent = arr[i].yosh
        ul.append(li)
    }
}
renders(bollar)

