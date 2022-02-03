import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import dateFormat from "dateformat";
import CarsList from "./components/CarsList/CarsList";
import useCars from "./hooks/useCars";

function App() {
  const { cars, loadCars, filterCars } = useCars();
  const [url, setUrl] = useState("");

  const onFilter = (value) => {
    if (value === "Todos los modelos") {
      loadCars(url);
    } else {
      filterCars(value);
    }
  };

  const onFetch = (data) => {
    const { brand, fuel, enrollmentDate } = data;

    const updatedEnrollmentDate = dateFormat(enrollmentDate, "yyyy/mm/dd");

    const url = `https://api-sandbox.swipoo.com/itp/cars?brand=${brand}&enrollmentDate=${updatedEnrollmentDate}&fuel=${fuel}`;
    setUrl(url);
    loadCars(url);
  };

  return (
    <div className="App">
      <Header />
      <Form onFetch={onFetch} />
      <CarsList cars={cars} onFilter={onFilter} />
      <footer className="footer">Swipoo Challenge</footer>
    </div>
  );
}

export default App;
