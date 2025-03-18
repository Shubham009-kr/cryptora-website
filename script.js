document.addEventListener("mousemove", (event)=>{
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element)=>{
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})

const signinButton = document.getElementById("signinButton");
const signinPage = document.getElementById("signinPage");
const closeSignIn = document.getElementById("closeSignIn");

signinButton.addEventListener("click", function(){
    signinPage.classList.remove("closeSignIn");
    signinPage.classList.add("openSignIn");
})

closeSignIn.addEventListener("click", function(){
    signinPage.classList.remove("openSignIn");
    signinPage.classList.add("closeSignIn");
})