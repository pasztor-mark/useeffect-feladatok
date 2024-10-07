export interface Books {
    books: Book[]
}

export interface Book {
    id: number
    title: string
    author: string
    price: number
    genre: string
    pages: number
    publisher: string
}


// vagy dolgozhatunk typeScript type-okkal is,
// jelen feladatban nincs különbség a kettő között
//
// type Root = {
//     books: Book[];
// };

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     price: number;
//     genre: string;
//     pages: number;
//     publisher: string;
// };
