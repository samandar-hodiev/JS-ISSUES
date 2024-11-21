"use strict";


/*---------------------------- 1-masala ----------------------------*/
//  Ushbu arraydagi string indeksini toping.!
const array = [[false, true], [1, 2], 99, true, 'Good.!'];

// first way
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
        console.log("tipi string bo'lgan element indekis raqami: " + i);
    };
};


// second way
array.forEach((el, indx, arr) => {
    if (typeof el === "string") {
        console.log("tipi string bo'lgan element indekis raqami: " + indx);
    };
});



/*---------------------------- 2-masala ----------------------------*/
//  Array ichidagi faqat arraylarni ajratiboling.!
const data = [[1, 2, 3], 'red', [4, 5, 6], true, false];

// first way
const newData = [];

data.forEach((el, indx, arr) => {
    const onlyArrays = Array.isArray(el);
    // console.log(onlyArrays);

    if (onlyArrays) {
        el.forEach((insiderElement) => {
            // console.log(insiderElement);
            newData.push(insiderElement);
        });
    };
});
console.log(newData);


// second way
const newData2 = [];

for (let i = 0; i < data.length; i++) {
    const onlyArrays = Array.isArray(data[i]);
    // console.log(onlyArrays);

    if (onlyArrays) {
        data[i].forEach((el) => {
            // console.log(el);
            newData2.push(el);
        });
    };
};
console.log(newData2);



/*---------------------------- 3-masala ----------------------------*/
// Array ichidagi [null, 0, '', false, undefined, NaN] qiymatlarni ajratiboladigan cod yozing.! 
const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];

// first way
const checkkedData = [];

checkData.forEach((el) => {
    if (!el) {
        checkkedData.push(el);
    };
});
console.log(checkkedData);


//  second way 
const checkkedData2 = [];

for (let i = 0; i < checkData.length; i++) {
    if (!checkData[i]) {
        checkkedData2.push(checkData[i])
    };
};
console.log(checkkedData2);






/*---------------------------- -masala ----------------------------*/





