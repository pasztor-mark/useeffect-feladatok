import { useEffect, useState } from "react";
import { Cars, Car } from "./Cars";
import "./App.css";

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function fetchCars() {
      const response = await fetch("olcsoAutok.json");
      const cars: Cars = await response.json();
      setCars(cars.cars);
    }
    fetchCars();
  }, []);
  useEffect(() => {
    if (cars.length > 0) {setCurrentIndex(cars[cars.length -1].id + 1)}
  }, [cars]);

  const szurt = cars.filter((car: Car) =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );
  function handleAddCar(e: any) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formFields = {
      brand: formData.get("brand"),
      price: formData.get("price"),
    }
    const newCar:Car = {
      id: currentIndex,
      brand: formFields.brand as string,
      price: parseInt(formFields.price as string)
    }
    setCars([
      ...cars,
      newCar
    ])
  } 
  function handleDelete(id: number) {
    setCars(cars.filter((car: Car) => car.id != id))
  }
  

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sorszám</th>
              <th>Név</th>
              <th>Ár</th>
            </tr>
          </thead>
          <tbody>
            {szurt.map((car: Car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.brand}</td>
                <td>{car.price} Ft.</td>
                <td><button onClick={() => handleDelete(car.id)}>X</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="search"
          placeholder="Keresés"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <form onSubmit={handleAddCar}>
          <label htmlFor="brand">Típus</label>
          <input type="text" name="brand" id="brand" />

          <label htmlFor="price">Ár</label>
          <input type="number" name="price" id="price" />

          <button type="submit">Hozzáadás</button>
        </form>
      </div>
    </>
  );
}

export default App;
