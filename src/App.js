import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import dateFormat from "dateformat";

function App() {
  const initialData = {
    brand: "",
    fuel: "",
    enrollmentDate: "",
  };
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (data.brand !== "" && data.fuel !== "" && data.enrollmentDate !== "") {
      data.enrollmentDate = dateFormat(data.EnrollmentDate, "yyyy/mm/dd");
      console.log(data);
    }
  });

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
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
