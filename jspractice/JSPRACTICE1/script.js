let center = document.querySelector(".center")

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
    center.addEventListener("mousemove",
    throttleFunction((dets) => {
        console.log(dets)
       let div = document.createElement("div")
        div.classList.add('imageDiv')
        div.style.left = dets.clientX +'px'
        div.style.top = dets.clientY +'px'
        document.body.appendChild(div)

    }, 500));