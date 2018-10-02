var materias = [
    ["Algebra lineal 1","A","Basica",16,"A2",1],
    ["Algebra lineal 2","A","Basica",16,"A2",2],
    ["Analisis complejo","A","Avanzada",12,"A7",3],
    ["Analisis de Fourier","A","Avanzada",12,"A7",4],
    ["Analisis numerico","A","Avanzada",12,"A7",5],
    ["Anillos y modulos","A","Intermedia",12,"A6",6],
    ["Calculo 1","A","Basica",16,"A1",7],
    ["Calculo 2","A","Basica",16,"A1",8],
    ["Calculo 3","A","Basica",16,"A1",9],
    ["Ecuaciones Diferenciales","A","Intermedia",12,"A5",10],
    ["Electiva Avanzada Matematica A5","A","Avanzada",12,"A5",11],
    ["Electiva intermedia Matematica","A","Intermedia",12,"",12],
    ["Funciones en variable compleja","A","Intermedia",12,"A5",13],
    ["Fundamentos de la matematica","A","Intermedia",12,"A6",14],
    ["Geometria Algebraica","A","Avanzada",12,"A8",15],
    ["Geometria de curvas y superficies","A","Intermedia",12,"A8",16],
    ["Geometria Plana","A","Basica",12,"",17],
    ["Grupos y teoria de Galois","A","Intermedia",12,"A6",18],
    ["Matematica Discreta","A","Basica",12,"",19],
    ["Medida e integracion","A","Intermedia",12,"A7",20],
    ["Probabilidad","A","Basica",12,"A3",21],
    ["Sistema Dinamicos","A","Avanzada",12,"",22],
    ["Teoria de numeros","A","Intermedia",12,"A6",23],
    ["Topicos de geometria","A","Basica",12,"",24],
    ["Topologia","A","Basica",16,"A4",25],
    ["Topologia Algebraica","A","Intermedia",12,"",26],
    ["Estadistica","A","Intermedia",12,"",27],
    ["Metodos numericos (Fing)","A","Intermedia",8,"",28],
    ["Programacion 1 (Fing)","B","Basica",10,"",29],
    ["Programacion 2 (Fing)","B","Basica",12,"",30],
    ["Programacion 3 (Fing)","B","Intermedia",15,"",31],
    ["Programacion 4 (Fing)","B","Intermedia",15,"",32],
    ["Introduccion investigacion operativa (Fing)","B","Intermedia",10,"",33],
    ["Introduccion programacion funcional (Fing)","B","Intermedia",7,"",34],
    ["Arquitectura de computadora  (Fing)","B","Intermedia",12,"",35],
    ["Programacion logica (Fing)","B","Intermedia",10,"",36],
    ["Teoria de lenguajes  (Fing)","B","Intermedia",12,"",37],
    ["Programacion funconal avanzada (Fing)","B","Avanzada",12,"",38],
    ["Fundamentos de base de datos (Fing)","B","Intermedia",15,"",39],
    ["Electiva Area C","C","Basica",8,"",40],
    ["Reconocimientos de patrones","B","Avanzada",12,"",41],
    ["Monografia","A","Basica",24,"",42],
    ["Electiva Avanzada Matematica A7","A","Avanzada",12,"A7",43],
    ["Electiva Avanzada Matematica A8","A","Avanzada",12,"A8",44],
    ["Fisica 1","B","Basica",13,"",45],
    ["Discreta 1 (Fing)","A","Basica",9,"",46],
    ["Discreta 2 (Fing)","A","Basica",9,"",47]
]
var semestres = ["sem_1","sem_2","sem_3","sem_4","sem_5","sem_6","sem_7","sem_8"];
var requerimientos = [[36,0]];
function No_cursar(numero,tabla_semestre){
  var tab = document.getElementById(tabla_semestre);

  tab.deleteRow(numero);
}

function Valor_Select(nombre_form){
  var e = document.getElementById(nombre_form);
  var strUser = e.options[e.selectedIndex].value;
  return strUser;
}


var grados = ["Basica", "Intermedias", "Avanzadas"];

function codigo_materia(nombre){
  var pos = 1;
  while(materias[pos][0] != nombre)
    pos = pos + 1;
  return pos;
}

function eliminar_creditos(id_materia){
  area =  materias[id_materia][1];
  creditos = materias[id_materia][3];
  sub_area = materias[id_materia][4];
  if(sub_area != ""){
    valor = document.getElementById(sub_area+"actuales");
    valor.innerHTML = Number(valor.innerText) - creditos;
    valor2 = document.getElementById(sub_area+"faltan");
    valor2.innerHTML = Number(valor2.innerText) + creditos;
  }
  tipos_mat = document.getElementById(area);
  tipos_mat.innerHTML = Number(tipos_mat.innerText) - creditos;
  tipos_mat2 = document.getElementById("totales");
  tipos_mat2.innerHTML = Number(tipos_mat2.innerText) - creditos;
}

function myFunction(id_materia,semestre) {
    nombre_materia = materias[id_materia][0];
    area =  materias[id_materia][1];
    tipo = materias[id_materia][2];
    creditos = materias[id_materia][3];
    sub_area = materias[id_materia][4];
    if(sub_area != ""){
      valor = document.getElementById(sub_area+"actuales");
      valor.innerHTML = creditos  + Number(valor.innerText);
      valor2 = document.getElementById(sub_area+"faltan");
      if ((Number(valor2.innerText) - creditos) < 0) {
                valor2.innerHTML = 0;
            } else {
                valor2.innerHTML = Number(valor2.innerText) - creditos;
            }
    }

    tipos_mat = document.getElementById(area);
    tipos_mat.innerHTML = creditos  + Number(tipos_mat.innerText);
    tipos_mat2 = document.getElementById("totales");
    tipos_mat2.innerHTML = Number(tipos_mat2.innerText) + creditos;


    var table = document.getElementById(semestre);
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = nombre_materia;
    cell2.innerHTML = creditos;
    if(sub_area != ""){
            cell3.innerHTML = sub_area;
    }
    else {
            cell3.innerHTML = area;
    }
    cell4.innerHTML = tipo;
}

function Agregar_A_Materias(codigo,nombre) {
  var Opciones_Materias = document.getElementById("codigo");
  var Opcion_Agregar=document.createElement("option");
  Opcion_Agregar.setAttribute("value",codigo);
  Opcion_Agregar.text = nombre;
  Opciones_Materias.appendChild(Opcion_Agregar);
}

function prepareTables(){
    for(j = 1; j < materias.length ; j++ ){
      Agregar_A_Materias(j,materias[j]);
    }
    var requisitos, text, fLen, i,j,posibles;

    posibles = ["relleno","relleno","minimos","actuales","faltan"];

    requisitos = [
    ["A1","Calculo diferencial e integral",36],
    ["A2","Algebra Lineal",18],
    ["A3","Probabilidad y estadistica",12],
    ["A4","Topologia",12],
    ["A5","Cálculo diferencial e integral INTERMEDIO",18],
    ["A6","Algebra, fundamentos, teoria de numeros",24],
    ["A7","Analisis,analisis numerico,ecuaciones diferenciales",24],
    ["A8","Geometria. Sistemas dinamicos. Topologia",24]];

    reLen = requisitos.length;
    text = "<table id= \" objetivos \">";
    text += "<tr><th>Area</th><th>Curso</th><th>Minimos</th><th>Tienes</th><th>Faltan</th></tr>";

    for (i = 0; i < reLen; i++){
        text += "<tr>"
        for (j = 0; j < requisitos[i].length; j++) {
            text += "<td>" +requisitos[i][j] + "</td>";
        }
        text += "<td id=" + requisitos[i][0] + posibles[3] + "> 0 </td>";
        text += "<td id=" + requisitos[i][0] + posibles[4] + ">" + requisitos[i][2] + "</td>";
        text += "</tr>"
    }


    document.getElementById("demo").innerHTML = text;
    var estado = "";

    estado = "<table id= \" tipos_mat \">";
    estado += "<tr><th>Categoria</th><th>Tipo A</th><th>Tipo B</th><th>Tipo C</th><th>Tipos D</th><th>Totales</th></tr>";
    estado += "<tr>";
    estado += "<td id=" + '"s"' + "> Creditos </td>";
    estado += "<td id=" + '"A"' + "> 0 </td>";
    estado += "<td id=" + '"B"' + "> 0 </td>";
    estado += "<td id=" + '"C"' + "> 0 </td>";
    estado += "<td id=" + '"D"' + "> 0 </td>";
    estado += "<td id=" + '"totales"' + "> 0 </td>";
    estado += "</tr></table>"
    document.getElementById("est_actual").innerHTML = estado;
} 

window.onload = function() {
    prepareTables();
};

var button1 = document.getElementById("btn1");

button1.addEventListener("click", function() {
    var index = document.getElementById('codigo').value;
    myFunction(Array(index), Valor_Select('sem'));
});