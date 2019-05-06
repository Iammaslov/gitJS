/*Даны координаты трёх точек в декартовой системе. Определить какая из них ближе к четвёртой точке с координатами x,y. Примечания:

координаты точек генерировать случайным образом
решение должно выглядеть в виде функции
формат хранения координат точек продумать самостоятельно, но не тратить на каждую ось по отдельной глобальной переменной
рассмотреть вариант с трёхмерной системой координат */




//задаю параметры 4ой точки
let points4 = 0;
function Point4(x,y,z,d){
  this.x=x;
  this.y=y;
  this.z=z;
  this.d1=((x*x+y*y+z*z)**0.5);
}
function rand(n,m){
  return Math.round(Math.random()*(m-n)+n);
}
  points4 =new Point4(rand(1,99),rand(1,99),rand(1,99));

console.log(points4);

//задаю массив остальных точек

let points =[];
function Point(x,y,z,c){
  this.x=x;
  this.y=y;
  this.z=z;
 // this.d=((x*x+y*y+z*z)**0.5);
  
//задаю модуль разницы расстояния между точками
  this.c=Math.abs(points4.d1-((x*x+y*y+z*z)**0.5))
}
function rand(n,m){
  return Math.round(Math.random()*(m-n)+n);
}
for(let i=0; i<3; i++){
  points[i] =new Point(rand(1,99),rand(1,99),rand(1,99));
}

//точки сортируются по удаленности от 4 точки

points.sort(function(a, b){
  return (a.c-b.c);
});
console.log(points);
