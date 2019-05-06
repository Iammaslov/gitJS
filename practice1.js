/*Сортировка карточек
Вам дана стопка посадочных карточек на различные виды транспорта, которые доставят вас из точки A в точку B. Карточки перепутаны, и вы не знаете, где начинается и где заканчивается ваше путешествие. Каждая карточка содержит информацию о том, откуда и куда вы едете на данном отрезке маршрута, а также о типе транспорта (номер рейса, номер места и прочее).
Предоставьте JavaScript API, который отсортирует такой список карточек и вернет словесное описание, как проделать ваше путешествие. API должен принимать на вход несортированный список карточек в формате придуманном вами и возвращать, например, такое описание:
• Take train 78A from Madrid to Barcelona. Seat 45B.
• Take the airport bus from Barcelona to Gerona Airport. No seat assignment.
• From Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.
• From Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg.
Требования:
• Алгоритм должен работать с любым количеством карточек, если все карточки образуют одну неразрывную цепочку.
• Время прибытия и отправления неизвестно и не важно. Подразумевается, что средство передвижения для следующего отрезка дожидается вас.
• Структура кода должна быть расширяема для использования любых типов транспорта и информации, которая может быть связана с каждым типом транспорта.
• API будет вызываться из других частей JavaScript-кода без необходимости дополнительных запросов между браузером и сервером.
• Не используйте библиотеки и фреймворки, напишите все с нуля.
• Задокументируйте в коде формат входных и выходных данных.
*/


let cards=[{
  transport: 'Take train 78A',
  from: 'Madrid', 
  to: 'Barcelona', 
  seat: 'Seat 45B.'
},
{
  transport: 'Take the airport bus',
  from: 'Barcelona',
  to: 'Gerona Airport', 
  seat: 'No seat assignment.'
},
{
  transport: 'Take flight SK455',
  from: 'Gerona Airport', 
  to: 'Stockholm', 
  seat: 'Gate 45B. Seat 3A. Baggage drop at ticket counter 344.'
},
{
  transport: 'Take flight SK22', 
  from: 'Stockholm',
  to: 'New York JFK',
  seat: 'Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg.'},
{
  transport: 'Take flight SK735', 
  from: 'Moscow',
  to: 'Madrid', 
  seat: 'Gate 47B. Seat 3A.'
},
{
  transport: 'Take flight SK222',
  from: 'Roman', 
  to: 'Moscow',
  seat: 'Gate 36C. Seat 3A.'
},
{
  transport: 'Take flight SK222', 
  from: 'Montgomery', 
  to: 'Rom', 
  seat: 'Gate 36C. Seat 3A.'
},
{
  transport: 'Take flight SK222',
  from: 'Rom',
  to: 'Roman', 
  seat: 'Gate 36C. Seat 3A.'
}]

function createCard(card){
    return `
   
    ${card.transport};
    from ${card.from} to ${card.to};
    ${card.seat}
   
`   
} 

//сортировка по плейсменту, позволяет при появлении любой или нескольких карт встраивать их в т.ч и в середину маршрута
/* cards.sort(function(a, b){
  return a.placement-b.placement;
})*/
/*
cards.sort(function (a, b){
   return (a.to == b.from) ? -1  : 1;
})
*/
function accumulate(accumulator, current, arr) {
  for(let i in arr) {
      if(current.to == arr[i].from) {
        accumulator.priority++
        accumulate(accumulator, arr[i], arr)
      }
  }
}


function assignPriority(arr) {
  for(let i = 0; i < arr.length; i++) {
    let accumulator = arr[i]
    accumulator.priority = 0
    accumulate(accumulator, arr[i] , arr)
  }
}

assignPriority(cards)

cards.sort(function (a, b) {
   if(a.priority > b.priority) {
     return -1
   } else if(a.priority < b.priority) {
     return 1
   }
  return 0
})

console.log(cards)

let cardsmassive= cards.map(card => createCard(card))

let html = cardsmassive.join(' ')
//document.querySelector('.list').innerHTML = html;
console.log(html)
