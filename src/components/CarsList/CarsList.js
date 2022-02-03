import { useEffect, useState } from "react";
import Car from "../Car/Car";
import "./CarsList.css";

function CarsList({ cars }) {
  const modelOptions = cars.map((car) => car.model);
  const filteredModelOptions = [...new Set(modelOptions)];

  const [carsList, setCarsList] = useState(cars);
  const [foundMessage, setFoundMessage] = useState("");

  const onChange = (event) => {
    const selectedModel = event.target.value;

    if (selectedModel === "Todos los modelos") {
      setCarsList([...cars]);
    } else {
      setCarsList([...cars.filter((car) => car.model === selectedModel)]);
    }

    console.log(carsList.length);
  };

  useEffect(() => {
    setFoundMessage(
      carsList.length > 1
        ? `Hay un total de ${carsList.length} vehículos`
        : carsList.length < 1
        ? "No se ha encontrado ningún vehículo"
        : "Se ha encontrado 1 vehículo:"
    );
  }, [carsList]);

  return (
    <section className="list-container">
      {cars.length !== 0 && (
        <>
          <form className="form" noValidate autoComplete="off">
            <select
              id="model"
              defaultValue="default"
              onChange={onChange}
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
          <h3 className="list__info">{foundMessage}</h3>
          <ul className="list">
            {carsList.map((car) => (
              <Car car={car} key={car.model} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default CarsList;
