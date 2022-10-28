const nome = prompt('Qual seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

perguntaSeGosta();

function perguntaSeGosta() {
	opcao = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.`)
	if (opcao == 1) {
		console.log('Muito bom! Continue estudando e você terá muito sucesso.');
	}
	else if (opcao == 2) {
		console.log('Ahh que pena... Já tentou aprender outras linguagens?');
	}
	else {
		console.log('Opção inválida. Digite 1 para SIM ou 2 para NÃO.');
		perguntaSeGosta();
	}
}