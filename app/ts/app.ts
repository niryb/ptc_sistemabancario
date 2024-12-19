let contaController = new ContaController();
let clienteController = new ClienteController()

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


const clientes: Clientes = new Clientes()

const c2 = new Conta('2', 200);
const c3 = new Conta('3', 300)

const cliente1: Cliente = new Cliente("Mariana", "131.000.111-13");
const cliente2: Cliente = new Cliente("David", "130.820.240-00");
const cliente3: Cliente = new Cliente("Hermione", "383.154.003-22");

clientes.inserir(cliente1)
clientes.inserir(cliente2)
clientes.inserir(cliente3)

console.log('\nLista de Clientes: ')
console.log(clientes.listar())

console.log('\nRemovendo a cliente Mariana: ')
clientes.remover('131.000.111-13')
console.log(clientes.listar())

console.log('\nPesquisando pelo cpf 130.820.240-00')
console.log(clientes.pesquisar('130.820.240-00'))

