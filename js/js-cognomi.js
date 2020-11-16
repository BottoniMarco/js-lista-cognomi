var cognomi = ["bottoni","mauri","pardini","fumagalli","brenna"];

var cognomeAggiunto = (prompt("inserire cognomi"));

cognomi.push(cognomeAggiunto);

console.log(cognomi.sort());

console.log("il cognome aggiunto è: " ,cognomeAggiunto);

i="";
j=0;
while(i != cognomeAggiunto) {
  i = cognomi[j];
  j++;
}

console.log("il cognome agginto è il " , j);
