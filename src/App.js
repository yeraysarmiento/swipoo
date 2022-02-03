import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import dateFormat from "dateformat";
import CarsList from "./components/CarsList/CarsList";

function App() {
  const initialData = {
    brand: "",
    fuel: "",
    enrollmentDate: "",
  };
  const [data, setData] = useState(initialData);

  let carsList = [
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.9 Gasolina 375kW (510CV) Quadrifogl Q4",
      period: "2020-",
      cc: "2891",
      cylinders: "6",
      fuel: "G",
      kw: "375",
      cvf: "19,54",
      cv: "510",
      value: "88700",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.9 V6 Bi-Turbo 510 HP AT8 Q4 Quadrifoglio",
      period: "2018-",
      cc: "2891",
      cylinders: "5",
      fuel: "G",
      kw: "375",
      cvf: "18,17",
      cv: "510",
      value: "81100",
    },
    {
      brand: "Alfa Romeo",
      model: "4C 1.7 Tbi TCT / 1.75 6V 240",
      period: "2013-",
      cc: "1742",
      cylinders: "4",
      fuel: "G",
      kw: "177",
      cvf: "12,26",
      cv: "241",
      value: "42100",
    },
    {
      brand: "Alfa Romeo",
      model: "4C SPIDER 1.7 Tbi TCT / 1.75 6V 240",
      period: "2015-",
      cc: "1742",
      cylinders: "4",
      fuel: "G",
      kw: "177",
      cvf: "12,26",
      cv: "240",
      value: "62000",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.0 Aut. /Turbo 8v 200",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "30000",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.0 Super Aut. / JTDm S&S 8V 200",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "31200",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.0 Veloce Q4 Aut. / JTDm S&S 8V 280",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "42100",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.9 T Quadrifoglio / Bi-turbo 6V 510",
      period: "2016-",
      cc: "2891",
      cylinders: "6",
      fuel: "G",
      kw: "375",
      cvf: "19,54",
      cv: "510",
      value: "67500",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.9 T Quadrifoglio Aut. / Bi-turbo 8 V 510",
      period: "2016-",
      cc: "2891",
      cylinders: "6",
      fuel: "G",
      kw: "375",
      cvf: "19,54",
      cv: "510",
      value: "69500",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.0 G Sprint AT (8v) 147kW",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "39400",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.0 G Super AT (8v) 147kW",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "35500",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.0 GME T4 Veloce ATX (8v) 206kW",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "47200",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIA 2.9T V6 Quadrifoglio AT (8v) 375kW",
      period: "2020-",
      cc: "2891",
      cylinders: "6",
      fuel: "G",
      kw: "375",
      cvf: "19,54",
      cv: "510",
      value: "76600",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.4 TB / S&S 6V 120",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "88",
      cvf: "10,61",
      cv: "120",
      value: "18100",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.4 TB Super / S&S 6V 120",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "88",
      cvf: "10,61",
      cv: "120",
      value: "19500",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.4 TB M-Air / S&S 6V 150",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "110",
      cvf: "10,61",
      cv: "150",
      value: "19400",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.4 TB M-Air Super / S&S 6V 150",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "110",
      cvf: "10,61",
      cv: "150",
      value: "20800",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.4 TB M-Air TCT / S&S 6V 170",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "125",
      cvf: "10,61",
      cv: "170",
      value: "21800",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.4 TB M-Air Super TCT / S&S 6V 170",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "125",
      cvf: "10,61",
      cv: "170",
      value: "23200",
    },
    {
      brand: "Alfa Romeo",
      model: "Giuliietta 1.4 TB 120CV GIULIETTA",
      period: "2018--",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "88",
      cvf: "10,61",
      cv: "120",
      value: "18900",
    },
    {
      brand: "Alfa Romeo",
      model: "Giuliietta 1.4 TB 120CV SPORT",
      period: "2018--",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "88",
      cvf: "10,61",
      cv: "120",
      value: "20100",
    },
    {
      brand: "Alfa Romeo",
      model: "Giuliietta 1.4 TB 120CV SUPER",
      period: "2018--",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "88",
      cvf: "10,61",
      cv: "120",
      value: "20100",
    },
    {
      brand: "Alfa Romeo",
      model: "GIULIETTA 1.7 TB Veloce TCT 6V 240",
      period: "2016-",
      cc: "1742",
      cylinders: "4",
      fuel: "G",
      kw: "177",
      cvf: "12,26",
      cv: "240",
      value: "29500",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 0.9 Twinair 6V 105",
      period: "2016-",
      cc: "875",
      cylinders: "2",
      fuel: "G",
      kw: "77",
      cvf: "6,15",
      cv: "105",
      value: "14000",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 0.9 Twinair Super 6V 105",
      period: "2016-",
      cc: "875",
      cylinders: "2",
      fuel: "G",
      kw: "77",
      cvf: "6,15",
      cv: "105",
      value: "14900",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 1.4 Mito 78",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "57",
      cvf: "10,61",
      cv: "78",
      value: "13200",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 1.4 Super 78",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "57",
      cvf: "10,61",
      cv: "78",
      value: "14100",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 1.4 TB MultiAir Super TCT 6V 140",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "103",
      cvf: "10,61",
      cv: "140",
      value: "18000",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 1.4 TB MultiAir Veloce TCT 6V 170",
      period: "2016-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "125",
      cvf: "10,61",
      cv: "170",
      value: "20700",
    },
    {
      brand: "Alfa Romeo",
      model: "MITO 1.4 78 Urban",
      period: "2018-",
      cc: "1368",
      cylinders: "4",
      fuel: "G",
      kw: "57",
      cvf: "10,61",
      cv: "78",
      value: "10900",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Turbo 200 Super Q4 Aut.",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "36600",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Turbo 200 Executive Q4 Aut. 8V",
      period: "2018-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "39500",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Turbo 280 Executive Q4 Aut. 8V",
      period: "2018-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "43200",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 GASOLINA 200 CV STELVIO Q4",
      period: "2018-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "36800",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 GASOLINA 200 CV SUPER Q4",
      period: "2018-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "38400",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 First Edition Q4",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "48400",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Launch Edition Q4",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "44600",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 PETROL 280 CV SPECIALE AWD",
      period: "2017-",
      cc: "1995",
      cylinders: "5",
      fuel: "G",
      kw: "206",
      cvf: "14,54",
      cv: "280",
      value: "45000",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 PETROL 280 CV EXECUTIVE AWD",
      period: "2018-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "44600",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Turbo 280 First Edit.II Q4 Aut.",
      period: "2017-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "44600",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Gasolina 147kW (200CV) Sprint Q4",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "44200",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Gasolina 148kW (200CV) Super Q4",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "147",
      cvf: "13,3",
      cv: "200",
      value: "40700",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Gasolina 206kW (280CV) TI Q4",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "51000",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.0 Gasolina 206kW (280CV) Veloce Q4",
      period: "2020-",
      cc: "1995",
      cylinders: "4",
      fuel: "G",
      kw: "206",
      cvf: "13,3",
      cv: "280",
      value: "50400",
    },
    {
      brand: "Alfa Romeo",
      model: "Stelvio 2.2 diesel 180 CV SUPER ADV. EFFICIENCY",
      period: "2017-",
      cc: "2143",
      cylinders: "5",
      fuel: "G",
      kw: "132",
      cvf: "15,18",
      cv: "180",
      value: "35400",
    },
  ];

  const getDeprecationValues = (car) => {
    let deprecationValues = [];
    let deprecatedValue;
    const carAge = car.age;
    const venalValue = car.venalValue;

    for (let i = 0, index = 0.1; i < carAge + 1; i++, index += 0.1) {
      deprecatedValue = venalValue * (1 - index);
      deprecationValues.push(Math.trunc(deprecatedValue));
    }

    return { ...car, deprecationValues };
  };

  const getVenalValue = (car) => {
    let venalValue;

    const date = new Date();
    const actualYear = date.getFullYear();
    const enrollmentValue = +car.value;
    const enrollmentDate = car.period.includes("--")
      ? +car.period.replace("--", "")
      : +car.period.replace("-", "");
    const carAge = actualYear - enrollmentDate;

    switch (true) {
      case carAge <= 1:
        venalValue = enrollmentValue;
        break;
      case carAge <= 2:
        venalValue = enrollmentValue * 0.84;
        break;
      case carAge <= 3:
        venalValue = enrollmentValue * 0.67;
        break;
      case carAge <= 4:
        venalValue = enrollmentValue * 0.56;
        break;
      case carAge <= 5:
        venalValue = enrollmentValue * 0.57;
        break;
      case carAge <= 6:
        venalValue = enrollmentValue * 0.39;
        break;
      case carAge <= 7:
        venalValue = enrollmentValue * 0.34;
        break;
      case carAge <= 8:
        venalValue = enrollmentValue * 0.28;
        break;
      case carAge <= 9:
        venalValue = enrollmentValue * 0.24;
        break;
      case carAge <= 11:
        venalValue = enrollmentValue * 0.17;
        break;
      case carAge <= 12:
        venalValue = enrollmentValue * 0.13;
        break;
      case carAge > 12:
        venalValue = enrollmentValue * 0.1;
        break;
      default:
        venalValue = enrollmentValue;
        break;
    }

    return { ...car, venalValue: Math.trunc(venalValue), age: carAge };
  };

  const getCarsValue = (car) => {
    let updatedCar;
    updatedCar = getVenalValue(car);
    updatedCar = getDeprecationValues(updatedCar);
    return updatedCar;
  };

  carsList = [...carsList.map((car) => getCarsValue(car))];

  useEffect(() => {
    if (data.brand !== "" && data.fuel !== "" && data.enrollmentDate !== "") {
      data.enrollmentDate = dateFormat(data.EnrollmentDate, "yyyy/mm/dd");
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
      <CarsList cars={carsList} />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
