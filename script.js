const corso1 = {
    nome: "programmatore front-end",
    ore: 300,
    terminato: false,
  };
  
  const corso2 = {
    nome: "programmatore back-end",
    ore: 300,
    terminato: true,
  };
  
  const corso3 = {
    nome: "programmatore back-end",
    ore: 300,
    terminato: false,
  };
  
  const studente1 = {
    nome: "Polina",
    cognome: "Boretc",
    genere: "femmina",
    eta: 27,
    citta: "Chelyabinsk",
    sposato: false,
    corso: corso1,
  };
  
  const studente2 = {
    nome: "Christopher",
    cognome: "Limone",
    genere: "maschio",
    eta: 27,
    citta: "Genova",
    sposato: false,
    corso: corso2,
  };
  
  const studente3 = {
    nome: "Cinzia",
    cognome: "Ariotti",
    genere: "femmina",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente4 = {
    nome: "Giovanni",
    cognome: "Cambiaso",
    genere: "maschio",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente5 = {
    nome: "Mattia",
    cognome: "Dalla Mutta",
    genere: "maschio",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente6 = {
    nome: "Mirco",
    cognome: "Faro",
    genere: "maschio",
    eta: 26,
    citta: "Genova",
    sposato: false,
    corso: corso2,
  };
  
  const studente7 = {
    nome: "Paolo",
    cognome: "Foppiano",
    genere: "maschio",
    eta: 25,
    citta: "Genova",
    sposato: false,
    corso: corso3,
  };
  
  const studente9 = {
    nome: "Leslie",
    cognome: "Fritas Olaechea Stefanny",
    genere: "femmina",
    eta: 26,
    citta: "Lima",
    sposato: false,
    corso: corso3,
  };
  
  const studente10 = {
    nome: "Artem",
    cognome: "San Giorgio",
    genere: "maschio",
    eta: 26,
    citta: "San Pietroburgo",
    sposato: false,
    corso: corso2,
  };
  
  const studente11 = {
    nome: "Jessica",
    cognome: "Vitanzaq",
    genere: "femmina",
    eta: 26,
    citta: "Lima",
    sposato: false,
    corso: corso1,
  };
  
  const studenti = [
    studente2,
    studente3,
    studente4,
    studente5,
    studente6,
    studente7,
    studente9,
    studente10,
    studente11,
  ]; 

function createStudentsListHtml(studentArray) {
    const studContainer = document.getElementById("studenti-container"); 
  
    studContainer.innerHTML = ' '; 
//  chiedere;
  
    for (const studente of studentArray) {
      const li = document.createElement("li");
      const br = document.createElement("br");
  
      const nameDiv = document.createElement("div");
      const nameNode = document.createTextNode(studente.nome + " " + studente.cognome);
      nameDiv.appendChild(nameNode);
  
      const ageDiv = document.createElement("div");
      const ageNode = document.createTextNode("età: " + studente.eta);
      ageDiv.appendChild(ageNode);
  
      const corsoDiv = document.createElement("div");
      const corsoNode = document.createTextNode("corso: " + studente.corso.nome);
      corsoDiv.appendChild(corsoNode);
  
      li.appendChild(nameDiv);
      li.appendChild(ageDiv);
      li.appendChild(corsoDiv);
      li.appendChild(br);
  
      studContainer.appendChild(li);
  
    }
} 
//  creo funzione comune per creare lista studenti;  

function showStudents() {

    createStudentsListHtml(studenti); 
}
//  creo funzione per mostrare lista studenti;

// per mostrare solo studentesse;
function keepFemaleStudents(studente) { 
  
//  usando lambda:
//      const femaleStudents = studenti.filter((studente) => studente.genere === 'f'); 

//      createStudentsListHtml(femaleStudents); 
//  richiamo createStudentsListHtml, riferita a risultato femaleStudents;

    if (studente.genere === 'femmina') {
        return true; 
    } else { 
        return false;
    }
} 
//  creo funzione per filtrare studenti femmine; 

function showFemaleStudents() {
    const femaleStudents = studenti.filter(keepFemaleStudents); 

    createStudentsListHtml(femaleStudents);
} 
//  creo funzione per mostrare stundenti femmine; 

//  per ordinare student dal più giovane;
function compareStudentsByAge(studente1, studente2) {
    return studente1.eta - studente2.eta;
} 
//  creo funzione per creare array ordinato;

function showStudentsByAge() {

//  creo shallow copy: copio l'array, non i contenuti;
    const studentsCopy = [...studenti]; 
    
    studentsCopy.sort(compareStudentsByAge); 

    createStudentsListHtml(studentsCopy);
} 
//  creo funzione per mostrare nuovo array ordinato; funzione non pura, perche crea nuova funzione 
//  modificata; posso risolvere clonando array originale(shallow clone), e facendo sorting su quello; 

