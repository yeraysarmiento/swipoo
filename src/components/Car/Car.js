import "./Car.css";

function Car({ car }) {
  return (
    <li className="car">
      <h4 className="car__brand">{car.brand.toUpperCase()}</h4>
      <h5 className="car__model">{car.model}</h5>
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
      <h4 className="car__value-title">Valoración venal</h4>
      <table className="car__value">
        <tbody>
          <tr>
            <td className="car__title-value">
              Valoración según Hacienda <br />
              (BOE-A-2017-15284)
            </td>
            <td className="car__venal-value">{car.venalValue}€</td>
          </tr>
          {car.deprecationValues.map((value, index) => (
            <tr className="car__deprecation-box" key={index}>
              <td className="car__deprecation-title">
                {90 - 10 * index}% del valor venal
              </td>
              <td className="car__deprecation-value">{value}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </li>
  );
}

export default Car;
