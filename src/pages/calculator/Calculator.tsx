import { Box, Typography } from "@mui/material";
import { useState } from "react";
import NumericButton from "./NumericButton";
import OperationButton from "./OperationButton";

const Calculator = () => {
  const [operationIsClicked, setOperationIsClicked] = useState(false);
  const [firstValue, setFirstValue] = useState<number>(0);
  const [value, setValue] = useState<string>("0");
  const [operation, setOperation] = useState<string>();

  function numberClicked(num: number) {
    if(value === "0" || operationIsClicked) {
      setOperationIsClicked(false);
      setValue(num.toString());
    } else {
      setValue(value + num);
    }
  }

  function operationClicked(operationValue: string) {
    switch(operationValue) {
      case "C":
        setFirstValue(0);
        resetValue();
        break;
      case "DEL":
        if(value.length == 1) {
          resetValue();
        }else if(Number(value) > 0) {
          setValue(value.substring(0, value.length - 1));
        }
        break;
      case "%":
        setFirstValue(0);
        setValue((Number(value) / 100).toString());
        break;
      case "+":
        setFirstValue(Number(value));
        setOperationIsClicked(true);
        setOperation("+");
        break;
      case "-":
        setFirstValue(Number(value));
        setOperationIsClicked(true);
        setOperation("-");
        break;
      case "/":
        setFirstValue(Number(value));
        setOperationIsClicked(true);
        setOperation("/");
        break;
      case "X":
        setFirstValue(Number(value));
        setOperationIsClicked(true);
        setOperation("X");
        break;
      case ".":
        if(!value.includes(".")) {
          setValue(value + ".");
        }
        break;
      case "=":
        switch(operation) {
          case "+":
            setValue((firstValue + Number(value)).toString());
            break;
          case "-":
            setValue((firstValue - Number(value)).toString());
            break;
          case "/":
            setValue((firstValue / Number(value)).toString());
            break;
          case "X":
            setValue((firstValue * Number(value)).toString());
            break;
        }
        setOperationIsClicked(false);
        setOperation(undefined);
        setFirstValue(Number(value));
        break;
    }
  }

  function resetValue() {
    setValue("0");
  }


  return <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#E9FBFA'}}>
    <Box sx={{ 
        borderRadius: '10px', width: '300px',
        overflow: 'hidden', backgroundColor: '#fff'
      }}>
      <Typography variant="h2" sx={{backgroundColor: '#A300DB', padding: '5px 5px', color: '#fff', textAlign: 'right'}}>{value}</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr'}}>
        <OperationButton clickHandler={() => operationClicked("C")} value={"C"} />
        <OperationButton clickHandler={() => operationClicked("DEL")} value={"DEL"} />
        <OperationButton clickHandler={() => operationClicked("%")} value={"%"} />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <NumericButton clickHandler={() => numberClicked(7)} value={7} />
        <NumericButton clickHandler={() => numberClicked(8)} value={8} />
        <NumericButton clickHandler={() => numberClicked(9)} value={9} />
        <OperationButton clickHandler={() => operationClicked("/")} value={"/"} />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <NumericButton clickHandler={() => numberClicked(4)} value={4} />
        <NumericButton clickHandler={() => numberClicked(5)} value={5} />
        <NumericButton clickHandler={() => numberClicked(6)} value={6} />
        <OperationButton clickHandler={() => operationClicked("X")} value={"X"} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <NumericButton clickHandler={() => numberClicked(1)} value={1} />
        <NumericButton clickHandler={() => numberClicked(2)} value={2} />
        <NumericButton clickHandler={() => numberClicked(3)} value={3} />
        <OperationButton clickHandler={() => operationClicked("-")} value={"-"} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <NumericButton clickHandler={() => numberClicked(0)} value={0} />
        <OperationButton clickHandler={() => operationClicked(".")} value={"."} />
        <OperationButton clickHandler={() => operationClicked("+")} value={"+"} />
        <OperationButton clickHandler={() => operationClicked("=")} value={"="} />
      </Box>
    </Box>
  </div>
}

export default Calculator;