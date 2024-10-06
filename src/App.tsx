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
  const [powerValue, setPowerValue] = useState<number | null>(12);

  const [alignment, setAlignment] = useState("positive"); // Initial state as positive

  const computeVertexAdjusted = () => {
    if (powerValue == null) {
      return 0;
    }
    let sign = 1;
    if (alignment === "negative") {
      sign = -1;
    }

    return (
      Math.round(
        ((sign * powerValue) / (1 - powerValue * 0.012 * sign)) * 100
      ) / 100
    );
  };

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Allow negative numbers and numbers only
    const regex = /^-?\d*\.?\d*$/;

    if (inputValue === "") {
      setPowerValue(null);
      return;
    }

    // Validate the input against the regex
    if (regex.test(inputValue)) {
      setPowerValue(parseFloat(inputValue));
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
            type="number"
            label="Enter a number"
            variant="outlined"
            value={powerValue}
            onChange={handleChange}
            inputProps={{}}
          />
        </Box>
        <Box>
          <Typography variant="h6">
            Power: {getSign()}
            {powerValue === null ? 0 : powerValue}
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
