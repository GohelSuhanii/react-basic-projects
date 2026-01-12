import { useEffect, useRef } from "react";
import { TextField } from "@mui/material";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <TextField
      label="Auto Focus Input"
      variant="outlined"
      fullWidth
      margin="normal"
      inputRef={inputRef}
    />
  );
}

export default AutoFocusInput;
