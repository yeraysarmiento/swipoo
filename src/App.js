import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import dateFormat from "dateformat";
import CarsList from "./components/CarsList/CarsList";
import useCars from "./hooks/useCars";

function App() {
  const initialData = {
    brand: "",
    fuel: "",
    enrollmentDate: "",
  };
  const [data, setData] = useState(initialData);
  const { cars, loadCars } = useCars();

  const onFilter = (event) => {
    // console.log(1, event);
    // const selectedModel = event.target.value;
    // if (selectedModel === "Todos los modelos") {
    //   setCarsList([...cars]);
    // } else {
    //   setCarsList([...cars.filter((car) => car.model === selectedModel)]);
    // }
  };

  useEffect(() => {
    const { brand, fuel, enrollmentDate } = data;
    if (brand !== "" && fuel !== "" && enrollmentDate !== "") {
      const updatedEnrollmentDate = dateFormat(enrollmentDate, "yyyy/mm/dd");
      loadCars(
        `https://api-sandbox.swipoo.com/itp/cars?brand=${brand}&enrollmentDate=${updatedEnrollmentDate}&fuel=${fuel}`
      );
    }
  }, [data, loadCars]);

  const onChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="App">
      <Header />
      <Form onChange={onChange} />
      <CarsList cars={cars} onFilter={onFilter} />
      <footer className="footer">Swipoo Challenge</footer>
    </div>
  );
}

export default App;
