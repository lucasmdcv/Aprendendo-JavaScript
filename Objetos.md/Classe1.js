/*class Lancamentos {
    constructor(nome = 'Genérico', valor = 0 ){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    
    addLancamentos(...Lancamento){
        Lancamento.forEach(l => this.Lancamento.push(l))
    }
    
    Sumario(){
        let ValorConsolidao= 0
        this.Lancamento.forEach(l=> {
            ValorConsolidao += l.valor
        })
        return
    }
    
}

const salario = new Lancamento('salario', 45000)
const contaDeLuz = new Lancamento('conta de luz', -3000)

const contas = new CicloFinanceiro(6 , 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.Sumario());
*/

//------------------------------------------------------------

//Para criar herança no Javascript vamos utilizar prototype, vamos transferir propriedades e métodos de um objeto para outro.

function Pessoa() {
    var nome;

    this.getNome = function () {
        return nome;
    };

    this.setNome = function (value) {
        nome = value;
    };
}

function PessoaJuridica() {
    var cnpj;

    this.getCNPJ = function () {
        return cnpj;
    };

    this.setCNPJ = function (value) {
        cnpj = value;
    };
}

function PessoaFisica() {
    var cpf;

    this.getCPF = function () {
        return cpf;
    };

    this.setCPF = function (value) {
        cpf = value;
    };
}

PessoaFisica.prototype = new Pessoa();
PessoaJuridica.prototype = new Pessoa();

function document_OnLoad() {
    oPessoaFisica = new PessoaFisica();
    oPessoaJuridica = new PessoaJuridica();

    oPessoaFisica.setCPF('111111');
    oPessoaFisica.setNome('João');

    oPessoaJuridica.setCNPJ('222222');
    oPessoaJuridica.setNome('Empresa');

    alert(oPessoaFisica.getNome() + '\n' +
          oPessoaFisica.getCPF() + '\n' +
          oPessoaJuridica.getNome() + '\n' +
          oPessoaJuridica.getCNPJ());
}
