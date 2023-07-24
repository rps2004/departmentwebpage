import logo from './logo.svg';
import './App.css';
import aero from "./pics/aero.png"
import apmech from "./pics/applied mech.png"
import bio from "./pics/bio.png"
import chemical from "./pics/chemical.png"
import chemistry from "./pics/chemistry.png"
import civil from "./pics/civil.png"
import csc from  "./pics/csc.png"
import ed from "./pics/ed.png"
import elec from "./pics/elec.png"
import humanities from "./pics/humanities.png"
import management from "./pics/management.png"
import maths from "./pics/maths.png"
import meta from "./pics/meta.png"
import ocean from"./pics/ocean.png"
import mech from "./pics/mech.png"
import physics from "./pics/physics.png"
import AcademicInfo from './components/acads';
import { Card } from './components/cards';

const App = () => {
  const departments = [
    {
      image: aero,
      link: "https://www.iitm.ac.in/academics/departments/department-of-aerospace-engineering",
    },
    {
      image: apmech,
      link: "https://www.iitm.ac.in/academics/departments/department-of-applied-mechanics",
    },
    {
      image: bio,
      link: "https://www.iitm.ac.in/academics/departments/department-of-biotechnology",
    },
    {
      image: chemical,
      link: "https://www.iitm.ac.in/academics/departments/department-of-chemical-engineering",
    },
    {
      image: chemistry,
      link: "https://www.iitm.ac.in/academics/departments/department-of-chemistry",
    },
    {
      image: civil,
      link: "https://www.iitm.ac.in/academics/departments/department-of-civil-engineering",
    },
    {
      image: csc,
      link: "https://www.iitm.ac.in/academics/departments/department-of-computer-science-engineering",
    },
    {
      image: ed,
      link: "https://www.iitm.ac.in/academics/departments/department-of-engineering-design",
    },
    {
      image: elec,
      link: "https://www.iitm.ac.in/academics/departments/department-of-electrical-engineering",
    },
    {
      image: humanities,
      link: "https://www.iitm.ac.in/academics/departments/department-of-humanities-and-social-sciences",
    },
    {
      image: management,
      link: "https://www.iitm.ac.in/academics/departments/department-of-management-studies",
    },
    {
      image: maths,
      link: "https://www.iitm.ac.in/academics/departments/department-of-mathematics",
    },
    {
      image: mech,
      link: "https://www.iitm.ac.in/academics/departments/department-of-mechanical-engineering",
    },
    {
      image: meta,
      link: "https://www.iitm.ac.in/academics/departments/department-of-metallurgical-and-materials-engineering",
    },
    {
      image: ocean,
      link: "https://www.iitm.ac.in/academics/departments/department-of-ocean-engineering",
    },
    {
      image: physics,
      link: "https://www.iitm.ac.in/academics/departments/department-of-physics",
    },
  ];

  return (
    <div>
      <header>
        <div className="header-container">
          <h1 className="page-title">DEPARTMENTS</h1>
        </div>
      </header>
      <AcademicInfo />

      <div className="container">
        {departments.map((department, index) => (
          <Card
            key={index}
            image={department.image}
            link={department.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;