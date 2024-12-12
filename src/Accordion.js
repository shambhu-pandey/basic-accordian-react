import React, { useState }  from "react"
import {questions}  from "./Api"
import "./index.css"
import Myaccordion  from "./Myaccordion"

const Accordion = () => {
  // Api wala data array of an object hai toh hm direct toh access nhi kar sakte isliye  map function use karenge aur useState

  const [data , setData] = useState(questions);
  return(
    <>
    <section className="main_div">
      <div className="center_div">
      <h2>React interview question</h2>
            {
              data.map((curElem)  => {
                const {id} = curElem;
                return < Myaccordion key = {id}  {...curElem} />
              })
            }
            </div>
        </section>
    </>
  );
}

export default Accordion;