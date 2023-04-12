function main(heading){
    let li = document.createElement("li")
    text = document.createTextNode(heading)
    li.appendChild(text)
    let ul = document.getElementById("ul")
    ul.appendChild(li)
}