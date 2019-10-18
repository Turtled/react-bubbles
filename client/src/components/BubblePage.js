import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../authentication/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      setColorList(res.data);
    })
    .catch((err) => console.log(err))
  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  if(!colorList) return (<p>Loading Colors...</p>)

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
