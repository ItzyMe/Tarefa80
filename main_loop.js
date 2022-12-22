//Nova versão do javascript com laços de repetição


nameOfTheStudentArray = [];
    
function submit()
{
    var displayStudentArray = [];

    for (var j = 1; j <= 4; j++) 
    {
     var nameOfTheStudent= document.getElementById("nameOfTheStudent"+j).value;
    console.log(nameOfTheStudent);
   nameOfTheStudentArray.push(nameOfTheStudent)
    };
 
    console.log(nameOfTheStudentArray);
var tamanhoDoNameofStudentArray= nameOfTheStudentArray.length;
console.log(tamanhoDoNameofStudentArray);
    

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++); 
    { 
        displayStudentArray.push("<h4>Nome: "+nameOfTheStudentArray[k]+"</h4>");
        console.log(displayStudentArray);
        
    }
 console.log(displayStudentArray)
   document.getElementById("displayNameWithCommas").innerHTML= displayStudentArray
   var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas); 
    document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas; 
    document.getElementById("submitButton").style.display="none";
     document.getElementById("sortButton").style.display="inline-block";
   
}

function sorting()

{
    nameOfTheStudentArray.sort()
    displayStudentArraysort=[] // displayStudentArraysort= aqui este array irá o receber em ordem alfabética
   
    for (var k = 0; k < nameOfTheStudentArray.length; k++) ;
    { displayStudentArraysort.push("<h4>NAME - " + nameOfTheStudentArray[k] + "</h4>")

           }
document.getElementById("displayNameWithoutCommas").innerHTML=displayStudentArraysort
    
}

