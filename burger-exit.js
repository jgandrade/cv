window.onload=()=>{
    let openLinks = document.getElementById("burger");
    let links = document.getElementById("nav2");
    let exit = document.getElementById("exit");
    let exit2 = document.getElementById("exitContainer");
    
    openLinks.addEventListener('click', () => {
        links.classList.add("showLinks");
    });
    exit.addEventListener('click', () => {
        links.classList.remove("showLinks");
    });
    exit2.addEventListener('click', () => {
        links.classList.remove("showLinks");
    });

}
    