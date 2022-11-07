import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  const [arr,setarr]=useState (initialArray)

  function Printarr(){
    console.log(arr)
  }
  return {Printarr}

};

export default useNumberList;
