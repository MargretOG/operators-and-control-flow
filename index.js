
//What is the result when the following program is executed?

for (let i = 1; i < 20; i += 7){
            console.log(i);
        }


// write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 


let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

let classGroup = 'artsSubjects';

if (classGroup === 'artsSubjects') {
    console.log( generalSubjects + ' '+artsSubjects);
} 
else if (classGroup === 'Social-Science'){
    console.log( generalSubjects + ' '+socialScienceSubjects);
} 
else if (classGroup === 'Arts'){
    console.log(generalSubjects + ' '+artsSubjects);
}
 else {
    console.log( generalSubjects);
}



//5 Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr.



function nearestPowerOf2(num) {
    let pwr = Math.pow(2, Math.round(Math.log2(num)));
    if (Math.abs(pwr - num) > Math.abs(pwr/2 - num)) {
      pwr = pwr/2;
    }
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  }
nearestPowerOf2(40)
nearestPowerOf2(50)