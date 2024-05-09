// const cuenta1: Cuenta = new Cuenta("Pedro", 2000);
// const cuenta2: Cuenta = new Cuenta("Juan");

// // Las cuentas se inician con los valores del constructor
// cuenta1.mostrar();
// cuenta2.mostrar();

// // Ingresamos 300€ a la cuenta 1
// cuenta1.ingresar(300);
// cuenta1.mostrar();

// // Ingresamos un número negativo a la cuenta 2 haciendo que salte un error por consola
// cuenta2.ingresar(-200);
// cuenta2.mostrar();

// // Retiramos 500€ de la cuenta 1 y la vemos tras la operación
// cuenta1.retirar(500);
// cuenta1.mostrar();

// // Retiramos una cantidad mayor a la que hay en la cuenta por lo que se queda a 0.
// cuenta1.retirar(4000);
// cuenta1.mostrar();

// // ----------------------------------------------------------------

// const juan: Persona = new Persona("Juan", 100000);
// const maria: Persona = new Persona("María", 120000);
// const paula: Persona = new Persona("Paula", 30000);
// const chalet1: Casa = new Casa(80000, TipoCasa.CHALET);
// const piso1: Casa = new Casa(60000, TipoCasa.PISO);

// // Situación de cada uno antes de comprar
// juan.getInfo();
// maria.getInfo();
// paula.getInfo();

// // Transaccioens
// chalet1.comprar([juan, maria]); // Debería comprar el chalet
// piso1.comprar([paula]); // Debería fallar, no tiene dinero suficiente

// // Situación de cada uno después de comprar
// juan.getInfo();
// maria.getInfo();
// paula.getInfo();
