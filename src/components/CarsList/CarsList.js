import { useEffect, useState } from "react";
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
          <li key={car.model} className="car">
            <h4>{car.brand}</h4>
            <h5>{car.model}</h5>
            <table className="car__features">
              <tbody>
                <tr>
                  <td className="car__title-feature">Cilindrada:</td>
                  <td className="car__info-feature">{car.cc}</td>
                </tr>
                <tr>
                  <td className="car__title-feature">Cilindros:</td>
                  <td className="car__info-feature">{car.cylinders}</td>
                </tr>
                <tr>
                  <td className="car__title-feature">Combustibles:</td>
                  <td className="car__info-feature">{car.fuel}</td>
                </tr>
                <tr>
                  <td className="car__title-feature">Potencia (kW):</td>
                  <td className="car__info-feature">{car.kw}</td>
                </tr>
                <tr>
                  <td className="car__title-feature">Potencia fiscal:</td>
                  <td className="car__info-feature">{car.cvf}</td>
                </tr>
                <tr>
                  <td className="car__title-feature">Potencia (CV):</td>
                  <td className="car__info-feature">{car.cv}</td>
                </tr>
              </tbody>
            </table>
            <table className="car__value">
              <tbody>
                <tr>
                  <td className="car__title-value">
                    Valoración según Hacienda (BOE-A-2017-15284):
                  </td>
                  <td className="car__info-value">XX</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CarsList;
