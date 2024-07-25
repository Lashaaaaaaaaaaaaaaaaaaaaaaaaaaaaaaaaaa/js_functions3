function processNumbers(...numbers) {
    if (numbers.length <= 2) {
        return 
    }
}    

const firstElement = numbers[0] + numbers[1];

let secondElement = 1;
for (let i = 2; i < numbers.length; i++) {
    secondElement *= numbers[i];
}

return [firstElement, secondElement];

console.log(processNumbers(1, 2, 3, 4, 5)); // [3, 60]
console.log(processNumbers(1, 8, 2, 3));  // [9, 6]
console.log(processNumbers(3, 3, 3));      // [6, 3]




const user = {
    banks: [
        {},
        {},
        {
            address: {
                city: 'New York'
            }
        }
    ]
};

function getCity(user) {
    const {banks} = user;
    if (banks && banks[2] && banks[2].address) {
        const {city} = banks[2].address;
        return city;
    }

    return undefined
}

console.log(user.banks[2].address.city);






const original = {
    name: 'Flacko',
    age: 21,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['have fun', 'listening to music'],
    nestedArray: [{ a: 1 }, { b: 2 }]
};


function deepClone(obj) {
    const clonedObj = {
        ...obj,
        address: {...obj.address},
        hobbies: {...obj.hobbies},
        nestedArray: {...obj.nestedArray}
    };
    return clonedObj;
};

const clone = deepClone(original);

console.log(clone);

console.log(clone === original); // false
console.log(clone.address === original.address); // false
console.log(clone.hobbies === original.hobbies); // false
console.log(clone.nestedArray === original.nestedArray); // false