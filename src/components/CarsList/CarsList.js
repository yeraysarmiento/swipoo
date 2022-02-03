import { useEffect, useState } from "react";
import Car from "../Car/Car";
import "./CarsList.css";

function CarsList({ cars, onFilter, isMessage }) {
  const modelOptions = cars.map((car) => car.model);
  const filteredModelOptions = [...new Set(modelOptions)];
  const [foundMessage, setFoundMessage] = useState("");

  useEffect(() => {
    setFoundMessage(
      cars.length > 1
        ? `Hay un total de ${cars.length} vehículos`
        : cars.length < 1
        ? "No se ha encontrado ningún vehículo"
        : "Se ha encontrado 1 vehículo:"
    );
  }, [cars]);

  return (
    <section className="list-container">
      {cars.length !== 0 && (
        <form className="form" noValidate autoComplete="off">
          <select
            id="model"
            defaultValue="default"
            onChange={(event) => onFilter(event.target.value)}
            data-testid="model"
          >
            <option value="default" disabled>
              Modelo
            </option>
            <option value="Todos los modelos">Todos los modelos</option>
            {filteredModelOptions.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </form>
      )}
      {isMessage && <h3 className="list__info">{foundMessage}</h3>}
      <ul className="list">
        {cars.map((car, index) => (
          <Car car={car} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default CarsList;
