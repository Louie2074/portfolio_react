import About from "./Sub_Components/About";
import Experience from "./Sub_Components/Experience";
import Education from "./Sub_Components/Education";

export default function Body(){
return (
  <div className="column ">
    <About />
    <Experience />
    <Education />
  </div>
);
}