/*MÉDICOS
Los médicos son uno de los principales objetos del proyecto.
Tienen propiedades estátcas como nombre y lugares de atención y otras dinámicas que son las recomendaciones
y puntajes que les dan los pacientes que fueron atendidos por ellos*/

var doctor1 = {
  nombre: "Dr. Lucas Gonzalez",
  lugaresDeAtencion: ["Clínica 1", "Consultorio privado XX", "Hospital 1"], // Listado de lugares en donde atiende el médico
  recomiendan: 38, // Cantidad de pacientes que pusieron que recomiendan al médico
  noRecomiendan: 4, // Cantidad de pacientes que pusieron que no recomiendan al médico
  puntajesPuntualidad: [4, 2, 3, 5], // Listado de puntajes que pacientes ponen a la puntualidad dél médico en sus visitas
  promedioPuntualidad: 0, // Promedio de los puntajes de puntualidad
  puntajesAmbiente: [3, 2, 5, 1],
  promedioAmbiente: 0,
  puntajesTrato: [4, 5, 3, 4],
  promedioTrato: 0,
  puntajesResultado: [4, 2, 3, 5],
  promedioResultado: 0,
  promedioTotal: 0, // Promedio de todos los puntajes que recibió el médico, a modo de puntaje 
}

var doctor2 = {
  nombre: "Dra. Irma Perez",
  lugaresDeAtencion: ["Clínica 2", "Consultorio privado YY", "Hospital 2"],
  recomiendan: 50,
  noRecomiendan: 10,
  puntajesPuntualidad: [1, 2, 2, 3],
  promedioPuntualidad: 0,
  puntajesAmbiente: [2, 4, 5, 1],
  promedioAmbiente: 0,
  puntajesTrato: [5, 5, 4, 4],
  promedioTrato: 0,
  puntajesResultado: [2, 2, 3, 4],
  promedioResultado: 0,
  promedioTotal: 0,
}

/*PACIENTES
Los pacientes son la contracara de los médicos. Sus propiedades son datos básicos de la persona atendida*/

var paciente1 = {
  nombre: "Martín Gomez",
  edad: 25,
}

var paciente2 = {
  nombre: "Julia Algo",
  edad: 33,
}

/*VISITAS
Las visitas son los objetos que unen un médico con un paciente.
Tienen un lugar, una fecha, un médico, un paciente y todos los puntajes que el paciente le pone al médico.
Las visitar cuentan con constructor porque es lo que el usuario ingresa en la plataforma*/

var visita1 = {
  fecha: new Date(2020,08,25),
  lugar: doctor1.lugaresDeAtencion[1],
  doctor: doctor1,
  paciente: paciente1,
  puntajePuntualidad: 4,
  PuntajeAmbiente: 2,
  PuntajeTrato: 4,
  PuntajeResultado:5,
  recomienda: true,
}

var visita2 = {
  fecha: new Date(2020,09,22),
  lugar: doctor2.lugaresDeAtencion[0],
  doctor: doctor2,
  paciente: paciente2,
  puntajePuntualidad: 5,
  PuntajeAmbiente: 1,
  PuntajeTrato: 3,
  PuntajeResultado:2,
  recomienda: false,
} 

/* Funciones */

/* Constructora de visita: crea una nueva visita y luego asigna los puntajes al médico correspondiente*/
function nuevaVisita(fecha, lugar, doctor, paciente, puntualidad, ambiente, trato, resultado, recomienda) {
  this.fecha = new Date(fecha),
  this.lugar = lugar,
  this.doctor = doctor,
  this.paciente = paciente,
  this.puntajePuntualidad = puntualidad,
  this.puntajesAmbiente = ambiente,
  this.puntajesTrato = trato,
  this.puntajesResultado = resultado;
  switch (recomienda) {
    case 1:
      this.recomienda = true;
      break;
  
    case 0:
      this.recomienda = false;
  }
  
  doctor.puntajesPuntualidad.push(puntualidad)
  doctor.puntajesAmbiente.push(ambiente)
  doctor.puntajesTrato.push(trato)
  doctor.puntajesResultado.push(resultado)
  switch (recomienda) {
    case 1:
      doctor.recomiendan += 1;
      break;
    case 0:
      doctor.noRecomiendan += 1;
  } 
}

/* Para sacar el promedio de puntajes de un médico */
function promediarTodo(Doctor) {
  var acum = 0;
  for (let i = 0; i < Doctor.puntajesPuntualidad.length; i++) {
    acum += Doctor.puntajesPuntualidad[i];    
  }
  Doctor.promedioPuntualidad = acum / Doctor.puntajesPuntualidad.length   

  var acum = 0;
  for (let i = 0; i < Doctor.puntajesAmbiente.length; i++) {
    acum += Doctor.puntajesAmbiente[i];    
  }
  Doctor.promedioAmbiente = acum / Doctor.puntajesAmbiente.length
  
  var acum = 0;
  for (let i = 0; i < Doctor.puntajesTrato.length; i++) {
    acum += Doctor.puntajesTrato[i];    
  }
  Doctor.promedioTrato = acum / Doctor.puntajesTrato.length

  var acum = 0;
  for (let i = 0; i < Doctor.puntajesResultado.length; i++) {
    acum += Doctor.puntajesResultado[i];    
  }
  Doctor.promedioResultado = acum / Doctor.puntajesResultado.length;

}

/*Para mostrar los puntajes promediios actuales de un médico, para la sección Buscar.
Aún no la pude hacer
*/

/*Nuevo ingreso de visita a modo de ejemplo:
var visita3 = new nuevaVisita ("2020,07,06", "xxx", doctor1, "paciene", 999,888,777,666,1)
*/

