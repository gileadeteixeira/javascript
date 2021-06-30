let amigo = {
    nome: 'Gileade',
    sexo: 'M',
    peso: 77.5,
    engordar(peso=0){
        this.peso += peso;
        console.log(`Engordou ${peso}kg!`);
    }
}
amigo.engordar(10);
console.log(`${amigo.nome} pesa ${amigo.peso}kg!`);