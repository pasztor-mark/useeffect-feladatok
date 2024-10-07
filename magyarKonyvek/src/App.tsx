import { useEffect, useState } from "react";
import { Book, Books } from "./magyarKonyvek";
import "./App.css";

function App() {
  const [data, setData] = useState<Book[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("magyarKonyvek.json");
      const books: Books = await response.json();
      setData(books.books);
    }
    fetchBooks();
  }, []);
  useEffect(() => {
    if (data.length > 0) {setCurrentIndex(data[data.length -1].id + 1)}
    console.log(data);
  }, [data]);

  const szurt = data.filter((book: Book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddBook(e: any) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formFields = {
      title: formData.get('title'),
      author: formData.get('author'),
      price: formData.get('price'),
      genre: formData.get('genre'),
      pages: formData.get('pages'),
      publisher: formData.get('publisher')
      
    }
    const newBook: Book = {
      id: currentIndex,
      title: formFields.title as string,
      author: formFields.author as string,
      price: parseInt(formFields.price as string),
      genre: formFields.genre as string,
      pages: parseInt(formFields.pages as string),
      publisher: formFields.publisher as string,
      
    }
    setData([
      ...data,
      newBook
    ])
  }

  function deleteBook(id: number) {
    setData(data.filter((book: Book) => book.id != id))
  }

  return (
    <>
      <h1>Magyar könyvek</h1>
      <table>
        <thead>
          <tr>
            <th>Sorszám</th>
            <th>Cím</th>
            <th>Szerző</th>
            <th>Ár</th>
            <th>Műfaj</th>
            <th>Oldalszám</th>
            <th>Kiadó</th>
          </tr>
        </thead>
        <tbody>
          {szurt.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.price}</td>
              <td>{b.genre}</td>
              <td>{b.pages}</td>
              <td>{b.publisher}</td>
              <td>
                <button style={{color: "red", backgroundColor: "transparent", border: 0, fontSize: 24, fontWeight: "bold"}} onClick={() => deleteBook(b.id)}>X</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="search"
        placeholder="Keresés (cím alapján)"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div style={{display: "flex", justifyContent: "space-around"}}>

      <form onSubmit={handleAddBook} style={{display:"flex", flexDirection: "column", maxWidth:"300px"}}>
      Új könyv
        <label htmlFor="title">Cím</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="author">Szerző</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="price">Ár</label>
        <input type="number" name="price" id="price" />

        <label htmlFor="genre">Műfaj</label>
        <input type="text" name="genre" id="genre" />

        <label htmlFor="pages">Oldalak száma</label>
        <input type="number" name="pages" id="pages" />

        <label htmlFor="publisher">Kiadó</label>
        <input type="text" name="publisher" id="publisher" />

        <button type="submit">Hozzáadás</button>
      </form>
      </div>
    </>
  );
}

export default App;
