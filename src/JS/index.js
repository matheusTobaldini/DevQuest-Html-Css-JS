const btnEnviar = document.getElementById('buttonEnviar');

const inputs = document.querySelectorAll('.inputForm');

const campoObrigatorio = document.querySelectorAll('.campoObrigatorio');

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()

    inputs.forEach(function(input) {   
                
        if (input.value) {
            input.classList.add('preenchido')
            input.classList.remove('vazio')
            input.nextElementSibling.classList.remove('erro')
        } else {
            input.classList.remove('preenchido')
            input.classList.add('vazio')
            input.nextElementSibling.classList.add('erro')
        }
    })
})

// function verificarInput() {
//     inputs.forEach(function (item) {
//         const inputVazio = item.value === '';

//         if (inputVazio) {
//             item.classList.add('vazio');
//             item.classList.remove('preenchido')

//         } else {
//             item.classList.remove('vazio');
//             item.classList.add('preenchido');
//         }
//     });

//     campoObrigatorio.forEach(function(item, index) {
//         const campoInput = inputs[index];

//         const estaVazio = campoInput.classList.contains('vazio');

//         if(estaVazio) {
//             item.classList.add('erro');
//         } else {
//             item.nextElementSibling.remove('erro')
//         }
//     })

// }


