const btnEnviar = document.getElementById('buttonEnviar');

const inputs = document.querySelectorAll('.inputForm');

const campoObrigatorio = document.getElementsByClassName('campoObrigatorio');

btnEnviar.addEventListener("click", verificarInput())

function verificarInput() {
    inputs.forEach(function (item) {
        const inputVazio = inputs.value == null;

        if (inputVazio) {
            item.classList.add('vazio')

        } else {
            item.classList.remove('vazio');
        }
    });
}

