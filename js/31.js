const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('FUCK YOU');
// }

// btn.addEventListener('click', () => {
//    alert('FUCK YOU');
// });

// btn.addEventListener('click', () => {
//     alert('SMART ASS');
// });
// let i = 0;
// const deleteElement = (e) => {
//     // e.target.remove();
//     console.log(e.target);
//     i++;
//     if (i === 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// btn.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.remove();
//     // console.log('FUCK YEAH♂');
// });

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i === 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement)

// btn.forEach(btn => {
//     btn.addEventListener('click', deleteElement(), {once: true});
// });

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

