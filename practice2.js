/*Создайте массив объектов users. Каждый объект — элемент массива — должен иметь имя сотрудника, его возраст и рост. Отсортируйте массив по возрасту сотрудников (по свойству age объектов).

изначально массив не должен быть упорядочен
количество элементов не должно быть менее 5
предусмотреть возможность сортировки по разным свойствам с использованием замыкания   */


let users=[];

users[1]={name: 'Billy', age: '21', height:'189', gender:'male'};
users[2]={name: 'Milligan', age: '15', height:'165', gender:'male'};
users[3]={name: 'Britney', age: '27', height:'170', gender:'female'};
users[4]={name: 'Spears', age: '18', height:'171', gender:'female'};
users[5]={name: 'Danny', age: '19', height:'192', gender:'male'};
users[6]={name: 'Sally', age: '19', height:'152', gender:'female'};
users[7]={name: 'Gloria', age: '19', height:'142', gender:'female'};
users[8]={name: 'Kate', age: '19', height:'132', gender:'female'};
users[9]={name: 'Mary', age: '19', height:'152', gender:'female'};
users[10]={name: 'Sebastian', age: '19', height:'154', gender:'male'};
users[11]={name: 'John', age: '19', height:'146', gender:'male'};
users[12]={name: 'James', age: '19', height:'163', gender:'male'};
users[13]={name: 'Katarina', age: '19', height:'164', gender:'female'};
users[14]={name: 'Mily', age: '19', height:'151', gender:'female'};
users[15]={name: 'Peter', age: '19', height:'157', gender:'male'};
users[16]={name: 'Dustin', age: '19', height:'160', gender:'male'};
users[17]={name: 'Sarah', age: '19', height:'139', gender:'female'};
users[18]={name: 'Conor', age: '19', height:'143', gender:'male'};
users[19]={name: 'Many', age: '19', height:'145', gender:'male'};
users[20]={name: 'Sally', age: '19', height:'149', gender:'female'};
users[21]={name: 'Igor', age: '19', height:'148', gender:'male'};


// первый способ
users.sort(function(a, b){
  return a.age-b.age
})
console.log(users)

// второй способ, с использованием замыкания

console.log(users.sort(letssort('age')));

function letssort(prop){
  return function (obj1, obj2){
    return obj1[prop] - obj2[prop];
    
  }
}
