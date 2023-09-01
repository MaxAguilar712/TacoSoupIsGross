var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

let i = 0
while(i < harryPotterTitles.length){
    console.log("Harry Potter " + harryPotterTitles[i]);
    i++;
}


//THE END OF HARRY POTTAH
console.log("")
//VARIABLES


let totalGrades = []
let gradeA = 0
let gradeB = 0
let grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]


//LOOP

for(let g=0; g < grades.length; g++){
let grade = grades[g];
if (grade >= 0 && grade <= 69){
    totalGrades.push('F')
    console.log("You got an F");
  } else if (grade >= 70 && grade <= 76){
    totalGrades.push('D')
    console.log("You got a D");
  } else if (grade >= 77 && grade <= 84){
    totalGrades.push('C')
    console.log("You got a C");
  } else if (grade >= 85 && grade <= 92){
    totalGrades.push('B')
    gradeB = gradeB + 1
    console.log("You got a B");
  } else {
    totalGrades.push('A')
    gradeA = gradeA + 1
    console.log('You got an A');
  };
  
}
//FINAL LOGGING

console.log(totalGrades)
console.log(gradeA)
console.log(gradeB)


function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(grades));

let mf = 1;
let m = 0;
let item;
for (let i=0; i<totalGrades.length; i++)
{
        for (let j=i; j<totalGrades.length; j++)
        {
                if (totalGrades[i] == totalGrades[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = totalGrades[i];
                }
        }
        m=0;
}
console.log(`${item} ( ${mf} times ) `) ;

//END OF GRADES
console.log("")
//start of cheer

let cheer = 0
for(let c=0; c < 4; c++){
    cheer = cheer + 2;
console.log(cheer)
}
if(cheer = 8){
    cheer--
    console.log("Who do we appreciate?!")};
    console.log("")
    // END OF CHEER

    // start of cow
    //first attempt (no modulus)
//     var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let moo = 0;
// sentenceArray.splice(3, 0, 'MOOOOOOOO ')
// sentenceArray.splice(7, 0, 'MOOOOOOOO ')
// sentenceArray.splice(11, 0, 'MOOOOOOOO ')
// while(moo < sentenceArray.length){
   
//     console.log(sentenceArray[moo])
//     moo++;   
// }

const MooMooArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let Cowords = ""
for(let i=0; i < MooMooArray.length; i++ ){
    if(( i %  3) === 0 && i !== 0){
        Cowords += `MOOOOOOOOOOO ${MooMooArray[i]} `
    }
    else{
        Cowords += `${MooMooArray[i]} `
    }
}
console.log(Cowords)
console.log("")
//end of cow

//start of the bottles and their trip to strawberry fields

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
       
} 
// console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the ${beatles.albums[0]} Album.`) 

for(let b=0; b < 4; b++){
    console.log(`${beatles.members[b].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[b].birth}. He contributed heavily to the ${beatles.albums[b]} Album.`)
    console.log("")
}
// here comes the sun... finally