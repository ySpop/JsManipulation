
//adicionando o evento de carregamento do documento (html)
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    //evento para chamar o alert
    // alert("A página foi totalmente carregada e js foi implantado!")

    const form = document.querySelector('form')
    form.addEventListener('submit', loadUserData)

    loadUserDataList();
})


function loadUserData(event) {
    event.preventDefault();

    let listUser = [] //array - vetores

    //capturando os valores e colocando eles dentro de um objeto (userData)
    const userData = {
        //capturando os valores e colocando eles dentro das propriedades ou também atributos
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    }

    if (localStorage.getItem('users')) {
          listUser = JSON.parse(localStorage.getItem('users'))  
    }

    listUser.push(userData)
    localStorage.setItem('users', JSON.stringify(listUser) )

    console.log(listUser);
    window.location.reload();
}

const loadUserDataList = () => {

    const tableData = document.getElementById('tableBodyList');

    if (localStorage.getItem('users')) {
        const listUsers = JSON.parse(localStorage.getItem('users'))

        

        let template = ''

        listUsers.forEach(user => {
           template +=  `
            <tr>
                <td> ${user.name} </td>
                <td> ${user.email} </td>
                <td> ${user.age} </td>
            <tr>
           `
        });

        tableData.innerHTML = template

    } else {
        alert("Nenhum usuário cadastrado!")
    }
}

// --------------------------------------- CÓDIGO QUE EU HAVIA FEITO --------------------------------------- 

// // FUNÇÃO EXECUTADA QUANDO A PÁGINA É CARREGADA
// document.addEventListener("DOMContentLoaded", (event) => {
//     // EVENTO PARA CHAMAR O ALERT
//     event.preventDefault()

//     const form = document.querySelector("form")
//     form.addEventListener("submit", loadUserData())

//     // alert("A página foi totalmente carregada e o js foi implantado!");

//     // CHAMANDO A FUNÇÃO PARA CARREGAR OS USUÁRIOS
//     // loadUserData()
// })

// function loadUserData(event) {
//     event.preventDefault()

//     const listUser = [] // ARRAY = conjunto de dados ( vetores )

//     // CAPTRUDANDO OSS VALORES E COLOCANDO ELES DENTRO DE UM OBJETO (userData)
//     const userData = {
//         // CAPTURANDO OS VALORES E COLOCANDO ELES DENTRO DAS PROPRIEDADES OU TAMBÉM ATRIBUTOS
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         age: document.getElementById("age").value
//     }
    
//     if (localStorage.getItem("users")) {
//         listUser = JSON.parse(localStorage.getItem("users"))
//     }

//         listUser.push(userData)
//         localStorage.setItem("users", JSON.stringify(listUser) )

//     console.log(userData);
//     // window.location.reload();
// }

