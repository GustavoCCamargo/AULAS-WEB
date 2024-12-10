

const cidadesPR = [
    'Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel', 'Foz do Iguaçu', 'São José dos Pinhais'
    // Adicione mais cidades conforme necessário
];

const select = document.getElementById("searchType")
// select.onchange = 

select.value

// Função para consultar o CEP via ViaCEP API
async function consultarCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            throw new Error("CEP não encontrado.");
        }
        return data;
    } catch (error) {
        throw new Error("Erro ao consultar o CEP.");
    }
}

// Função para consultar o nome da rua
async function consultarRua(rua, cidade) {
    try {
        // Aqui estamos utilizando uma API fictícia para consulta por rua. Caso use outra API, adapte.
        const response = await fetch(`https://viacep.com.br/ws/PR/${cidade}/${rua}/json/`);
        const data = await response.json();
        if (data.erro || !data) {
            throw new Error("Rua não encontrada ou dados inválidos.");
        }
        return data;
    } catch (error) {
        throw new Error("Erro ao consultar a rua.");
    }
}

// Função para validar se a cidade está no Paraná
function validarCidadeParana(cidade) {
    return cidadesPR.includes(cidade);
}

// Função para tratar o submit do formulário
$('#cepForm').submit(async function (event) {
    event.preventDefault();
    const searchType = $('#searchType').val();
    const cep = $('#cep').val().trim();
    const rua = $('#street').val().trim();
    const cidade = $('#city').val().trim();
    const resultadoElement = $('#result');
    resultadoElement.text('Consultando...');

    try {
        if (!validarCidadeParana(cidade)) {
            throw new Error("A cidade deve ser do estado do Paraná (PR).");
        }

        let dados;

        if (searchType === 'cep') {
            if (!cep) {
                throw new Error("Por favor, insira um CEP.");
            }
            dados = await consultarCEP(cep);
        } else if (searchType === 'street') {
            if (!rua) {
                throw new Error("Por favor, insira o nome da rua.");
            }
            dados = await consultarRua(rua, cidade);
        }

        resultadoElement.text(JSON.stringify(dados, null, 2));

    } catch (error) {
        resultadoElement.text("Erro: " + error.message);
    }
});

$(document).ready(function () {
    // Função para alternar entre os campos de pesquisa
    $('#searchType').change(function () {
        var selectedValue = $(this).val();
       
        if (selectedValue === 'cep') {
            console.log("cep");
            $('#streetSection').hide();
            $('#cepSection').show();

        }else if (selectedValue === 'street') {
            console.log("street");
            $('#cepSection').hide();
            $('#streetSection').show();
        }

    }
    )
});     