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
    "Diesel",
    "Gasolina",
    "Eléctrico",
    "S",
    "Diesel y Eléctrico",
    "Gasolina y Eléctrico",
  ];

  return (
    <>
      <h2 className="form-title">Encuentra tu vehículo</h2>
      <form className="form" noValidate autoComplete="off">
        <select id="brand" defaultValue="default" onChange={onChange}>
          <option value="default" disabled>
            Marca
          </option>
          {brands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
        <select id="fuel" defaultValue="default" onChange={onChange}>
          <option value="default" disabled>
            Combustible
          </option>
          {fuelTypes.map((fuel) => (
            <option key={fuel}>{fuel}</option>
          ))}
        </select>
        <input type="date" id="enrollmentDate" onChange={onChange} />
      </form>
    </>
  );
}

export default Form;
