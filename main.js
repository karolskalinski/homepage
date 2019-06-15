const age = 31;
const name = 'Karol';

console.log(`Hej tu ${name} mam ${age} lat cieszę się, że zaglądasz w to miejsce, dzięki temu mogę Cię poinformować, że jest to moja pierwsza strona internetowa w życiu !`);

const heading = document.querySelector('.main__heading--js');
console.log(heading.innerHTML);



const daily__pharagraph = document.querySelectorAll('.daily__pharagraph');
console.log(daily__pharagraph);
console.log(daily__pharagraph[0]);

const testjs = document.querySelector('.about__box--js')
testjs.innerHTML = 'Zapełniamy ten element z poziomu JS';
