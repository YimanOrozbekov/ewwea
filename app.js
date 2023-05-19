function filterBooks(books) {
    let booksU = [];
    let noU = [];

    for (let i = 0; i < books.length; i++){
        let book = books[i];
        if (book.includes('у')) {
            booksU.push(book);
        }else {
            noU.push(book);
        }
    }
    console.log('книги с буквой "у":', booksU);
    console.log('книги без буквы"у"', noU)
}

let bookList = ['БОБ не обычный кот', 'Самурай без меча', 'cтань счастливым за 21 день', 'лягушка под дожем', 'луч']
filterBooks(bookList);

function calculateAverage(...numbers) {
    if(numbers.length === 0){
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    let Average = sum / numbers.length;
    return Average
}
let resoult = calculateAverage(5, 10, 15, 20);
console.log('среднее Аривматическое', resoult);


