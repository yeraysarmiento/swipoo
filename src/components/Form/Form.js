import "./Form.css";

function Form({ onChange }) {
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

  return (
    <>
      <h2 className="form-title">Encuentra tu vehículo</h2>
      <form className="form" noValidate autoComplete="off">
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
        <select id="fuel" defaultValue="default" onChange={onChange}>
          <option value="default" disabled>
            Combustible
          </option>
          {fuelTypes.map((fuel) => (
            <option key={fuel.fuelAbreviation} value={fuel.fuelAbreviation}>
              {fuel.fuelName}
            </option>
          ))}
        </select>
        <label htmlFor="enrollmentDate">Enrollment Date</label>
        <input type="date" id="enrollmentDate" onChange={onChange} />
      </form>
    </>
  );
}

export default Form;
