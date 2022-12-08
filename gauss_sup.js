//Se usan fragmentos de chat gpt

function gaussJordan(coeficientes) {
    // Crear the aumentada matriz
    let matriz = [    [coeficientes[0], coeficientes[1], coeficientes[2], coeficientes[3]],
      [0, coeficientes[4], coeficientes[5], coeficientes[6]],
      [0, 0, coeficientes[7], coeficientes[8]]
    ];
  
    // Eliminación
    for (let i = 0; i < matriz.length; i++) {
      // Escoger el pivote
      let pivoteeeeee = matriz[i][i];
  
      // Dividir fila entre elemento pivote
      for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] /= pivote;
      }
  
      // Eliminar los otros elementos de la columna
      for (let k = 0; k < matriz.length; k++) {
        if (k !== i) {
          let multiple = matriz[k][i];
          for (let j = 0; j < matriz[k].length; j++) {
            matriz[k][j] -= matriz[i][j] * multiple;
          }
        }
      }
    }
  
    // Conseguir soluciones de la matriz
    let soluciones = [];
    for (let i = 0; i < matriz.length; i++) {
      soluciones.push(matriz[i][matriz[i].length - 1] / matriz[i][i]);
    }
  
    return soluciones;
  }
  

  let coeficientes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let soluciones = gaussJordan(coeficientes);
  console.log(soluciones);