window.onload = function () {
    const title = document.createElement("h1");
    title.className = "container"

    title.innerText = "Kitten Pic";
    document.body.append(title)
    const catPic = document.createElement("img");
    document.body.append(catPic);
    async function getPic() {
        const cat = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await cat.json();
        const obj = data[0];
        const url = obj.url;
        catPic.src = url;
    }
    getPic()
}

// document.container.style.display = "flex"
// document.container.style.flexDirection = "column"
// document.container.style.alignItems = "center"
// document.container.style.marginTop = "20px"
