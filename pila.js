class pila {
    constructor() {
      this.pilita = {};
      this.contador = 0;
    }
  
    //metodo para añadir elementos
    push(elemento) {
      this.pilita[this.contador] = elemento;
      this.contador++;
      return this.pilita;
    }
  
    //leer el ultimo elemento y poder sacarlo
    pop() {
      this.contador--;
      const elemento = this.pilita[this.contador];
      delete this.pilita[this.contador];
      return elemento;
    }
  
    //Retorna el último valor ingresado a la pila, sin sacarlo de ésta
    peek() {
      return this.pilita[this.contador - 1];
    }
  
    //metodo que retorna los elementos
    size() {
      return this.contador;
    }
  
    //mostrar en consola
    print() {
      console.log(this.pilita);
    }
  }
  
  const stack = new pila();
  console.log(pilita.size()); // 0
  console.log(pilita.push('Annelis')); // { '0': 'Annelis' }
  console.log(pilita.size()); // 1
  console.log(pilita.peek()); // Annelis
  console.log(pilita.push('Sacalxot')); // { '0': 'Annelis', '1': 'Sacalxot' }
  console.log(pilita.size()); // 2
  stack.print(); // { '0': 'Annelis', '1': 'Sacalxot' }
  console.log(pilita.peek()); // Sacalxot
  console.log(pilita.pop()); // Sacalxot
  stack.print(); // { '0': 'Annelis' }
  console.log(pilita.size()); // 1
  console.log(pilita.peek()); // Annelis