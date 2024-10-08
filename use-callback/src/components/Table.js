import { useEffect, useState } from "react";

const Table = ({ calculationNumber }) => {
  const [selectNum, setSelectNum] = useState([]);

  useEffect(() => {
    console.log("Table rendered!!");
    setSelectNum(calculationNumber);
  }, [calculationNumber]);

  return (
    <div>
      {selectNum && selectNum.map((row) => (
        <p>
          {row}
        </p>
      ))}
    </div>
  );
};
export default Table;
