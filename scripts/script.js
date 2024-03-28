
// FUNÇÃO EXECUTADA QUANDO A PÁGINA É CARREGADA
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault()

    alert("A página foi totalmente carregada e o js foi implantado!");

    loadUserData()
})

function loadUserData(event) {
    event.preventDefault()


    // DECLARAÇÃO DE UM OBJETO
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value
    }
    
}

