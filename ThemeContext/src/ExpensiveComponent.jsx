import { useMemo, useState } from "react";
import { Button, Typography } from "@mui/material";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += num;
    }
    return total;
  };

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <Typography variant="h6">Result: {memoizedValue}</Typography>

      <Button
        variant="contained"
        onClick={() => setCount(count + 1)}
        sx={{ mt: 2 }}
      >
        Increment
      </Button>
    </>
  );
}

export default ExpensiveComponent;
