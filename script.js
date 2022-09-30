const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
function calcularFecha() {
  // Valores de entrada
  const dayInput = document.getElementById("dia").value;
  const monthInput = document.getElementById("mes").value; //probar
  const yearInput = document.getElementById("año").value;
  // Obtener la fecha 
  const date = new Date(yearInput, monthInput - 1, dayInput);
  const dayIndex = date.getDay();
  const mesIndex =date.getMonth();  //probar
  const dayLabel = diasSemana[dayIndex]; 
  const mesLabel=meses[mesIndex]; //probar
console.log(mesLabel);
  let message = "";
  switch (dayIndex) {
    case 0: case 6: // 0 al 6 debido al L a D
      message = "No es dia laboral"; // Sabado y Domingo
      break;
    default: 
      message = "Dia laboral"; // Serian L, M , M, J V
      break;
  }
  // Resultados en HTML y consola
  const resultElement = document.getElementById('final'); // hacemos la conexion con HTML al input 
  resultElement.value = `${dayLabel},${mesLabel},${message}`; // Se 
  console.log(resultElement);
  }
  