import { useState, useEffect } from "react";
import "./App.css";
import { Phones, Phone } from "./technikaiKutyuk";
function App() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchPhones() {
      const response = await fetch("technikaiKutyuk.json");
      const phones: Phones = await response.json();
      setPhones(phones.phones);
    }
    fetchPhones();
  }, []);
  useEffect(() => {
    if (phones.length > 0) {
      setCurrentIndex(phones[phones.length - 1].id + 1);
    }
  }, [phones]);

  const szurt = phones.filter((p: Phone) =>
    p.model.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddPhone(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formFields = {
      brand: formData.get("brand"),
      model: formData.get("model"),
      price: formData.get("price"),
      storage: formData.get("storage"),
      camera: formData.get("camera"),
      battery: formData.get("battery")
    };
    const newPhone: Phone = {
      id: currentIndex,
      brand: formFields.brand as string,
      model: formFields.model as string,
      price: parseInt(formFields.price as string),
      features: {
        storage: formFields.storage as string,
        camera: formFields.camera as string,
        battery: formFields.camera as string
      }
    };
    setPhones([...phones, newPhone]);
  }

  function deletePhone(id: number) {
    setPhones(phones.filter((phone: Phone) => phone.id != id))
  }
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sorszám</th>
              <th>Márka</th>
              <th>Modell</th>
              <th>Ár</th>
              <th>Részletek</th>
            </tr>
          </thead>
          <tbody>
            {szurt.map((phone) => (
              <tr key={phone.id}>
                <td>{phone.id}</td>
                <td>{phone.brand}</td>
                <td>{phone.model}</td>
                <td>{phone.price}</td>
                <td>
                  <ul>
                    <li>Tárhely: {phone.features.storage}</li>
                    <li>Kamera: {phone.features.camera}</li>
                    <li>Akku: {phone.features.battery}</li>
                  </ul>
                </td>
                <td>
                  <button onClick={() => deletePhone(phone.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="search"
          placeholder="Keresés"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
        />
        <form onSubmit={handleAddPhone} style={{display: "flex", flexDirection: "column"}}>
          <label htmlFor="brand">Márka</label>
          <input type="text" name="brand" id="brand" />

          <label htmlFor="model">Modell</label>
          <input type="text" name="model" id="model" />

          <label htmlFor="price">Ár</label>
          <input type="text" name="price" id="price" />

          <label htmlFor="storage">Tárhely</label>
          <input type="text" name="storage" id="storage" />

          <label htmlFor="camera">Kamera</label>
          <input type="text" name="camera" id="camera" />

          <label htmlFor="battery">Akkumulátor</label>
          <input type="text" name="battery" id="battery" />

          <button type="submit">Hozzáad</button>
        </form>
      </div>
    </>
  );
}

export default App;
