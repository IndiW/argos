import { useState } from "react";
import "./App.css";
import {
  Box,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

function App() {
  const [powerValue, setPowerValue] = useState(12);

  const [alignment, setAlignment] = useState("positive"); // Initial state as positive

  const computeVertexAdjusted = () => {
    let sign = 1;
    if (alignment === "negative") {
      sign = -1;
    }
    return (
      Math.round(((sign * powerValue) / (1 - powerValue * 0.12 * sign)) * 100) /
      100
    );
  };
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Allow negative numbers and numbers only
    const regex = /^\d*$/;

    // Validate the input against the regex
    if (regex.test(inputValue) || inputValue === "") {
      setPowerValue(inputValue);
    }
  };

  const getSign = () => {
    return alignment === "positive" ? "+" : "-";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <Typography variant="h4">Vertex Adjustment Calculator</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="positive-negative-toggle"
            color="primary"
            size="large"
          >
            <ToggleButton value="positive" aria-label="positive">
              +
            </ToggleButton>
            <ToggleButton value="negative" aria-label="negative">
              -
            </ToggleButton>
          </ToggleButtonGroup>
          <TextField
            label="Enter a number"
            variant="outlined"
            value={powerValue}
            onChange={handleChange}
            inputProps={{ inputMode: "numeric", pattern: "-?[0-9]*" }}
          />
        </Box>
        <Box>
          <Typography variant="h6">
            Power: {getSign()}
            {powerValue}
          </Typography>
          <Typography variant="h6">
            Vertex-adjusted:
            {computeVertexAdjusted()}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
