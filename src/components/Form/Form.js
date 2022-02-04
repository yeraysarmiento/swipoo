import { useEffect, useState } from "react/cjs/react.development";
import "./Form.css";

function Form({ onFetch, setMessage }) {
  const initialData = {
    brand: "",
    fuel: "",
    enrollmentDate: "",
  };
  const [data, setData] = useState(initialData);
  const [isDisabled, setIsDisabled] = useState(true);

  const brands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Citroen",
    "Cupra",
    "Dacia",
    "DS",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Lexus",
    "Lotus",
    "Maserati",
    "Mazda",
    "Mercedes",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Piaggio",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tata",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const fuelTypes = [
    { fuelAbreviation: "D", fuelName: "Diesel" },
    { fuelAbreviation: "G", fuelName: "Gasolina" },
    { fuelAbreviation: "Elc", fuelName: "Eléctrico" },
    { fuelAbreviation: "S", fuelName: "S" },
    { fuelAbreviation: "DyE", fuelName: "Diesel y Eléctrico" },
    { fuelAbreviation: "GyE", fuelName: "Gasolina y Eléctrico" },
  ];

  const onChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFetch(data);
    setMessage(true);
  };

  useEffect(() => {
    const { brand, fuel, enrollmentDate } = data;
    if (brand !== "" && fuel !== "" && enrollmentDate !== "") {
      setIsDisabled(false);
    }
  }, [data]);

  return (
    <section className="form-box">
      <h2 className="form-title">Encuentra tu vehículo</h2>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
        aria-label="form"
      >
        <select
          id="brand"
          defaultValue="default"
          onChange={onChange}
          data-testid="brand"
        >
          <option value="default" disabled>
            Marca
          </option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          id="fuel"
          defaultValue="default"
          onChange={onChange}
          data-testid="fuel"
        >
          <option value="default" disabled>
            Combustible
          </option>
          {fuelTypes.map((fuel) => (
            <option key={fuel.fuelAbreviation} value={fuel.fuelAbreviation}>
              {fuel.fuelName}
            </option>
          ))}
        </select>
        <label htmlFor="enrollmentDate">Fecha de matriculación:</label>
        <input
          type="date"
          id="enrollmentDate"
          onChange={onChange}
          aria-label="enrollmentDate"
        />
        <button className={isDisabled ? "disabled" : ""} disabled={isDisabled}>
          Buscar
        </button>
      </form>
    </section>
  );
}

export default Form;
