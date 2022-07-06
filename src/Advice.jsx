import React, { useEffect, useState } from "react";
import "./Advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) throw Error("Did not recived expected data");
      const data = await response.json();
      console.log(data.slip.advice);
      setAdvice(data.slip);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    (async () => await fetchAdvice())();
  }, []);

  return (
    <div className="drz">
      <div className="card">
        <h1 className="heading">{advice.advice}</h1>
        <button onClick={fetchAdvice}>GIVE ME ADVICE!</button>
      </div>
    </div>
  );
};

export default Advice;
