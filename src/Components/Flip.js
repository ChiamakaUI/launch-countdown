import React, { useEffect } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

const Flip = ({ value }) => {
//   console.log(Tick);
  const tickRef = React.createRef();

  useEffect(()=>{
    const tickInstance = Tick.DOM.create(tickRef.current, {
        value: value
      })
      if (!tickInstance) return;
      tickInstance.value = value;

    //   Tick.DOM.destroy(tickRef.current);
    //return () => Tick.DOM.destroy(tickRef.current);
  }, [tickRef,value])

  return (
    <div ref={tickRef} className="tick">
      <div data-repeat="true" aria-hidden="true">
        <span data-view="flip">Tick</span>
      </div>
    </div>
  );
};

export default Flip;
