const btnEnviar = document.getElementById('buttonEnviar');

const inputs = document.querySelectorAll('.inputForm');

const campoObrigatorio = document.querySelectorAll('.campoObrigatorio');

console.log(inputs);


btnEnviar.addEventListener("click", verificarInput)

function verificarInput() {
    inputs.forEach(function (item) {
        const inputVazio = item.value === '';

        if (inputVazio) {
            item.classList.add('vazio');
            item.classList.remove('preenchido')
            
        } else {
            item.classList.remove('vazio');
            item.classList.add('preenchido');
        }
    });

    campoObrigatorio.forEach(function(item, index) {
        const campoInput = inputs[index];
        
        const estaVazio = campoInput.classList.contains('vazio');

        if(estaVazio) {
            item.classList.add('erro');
        } else {
            item.classList.remove('erro')
        }
    })
}