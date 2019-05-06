/* Напишите функцию копирования многомерного массива. Примечание: используйте рекурсию.*/


let massive = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
function arrayClone( massive ) {

    if( Array.isArray( massive ) ) {
      
        let copy = Object.assign([], massive);
      
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else {
        return massive;
    }
}
console.log(arrayClone( massive ));
