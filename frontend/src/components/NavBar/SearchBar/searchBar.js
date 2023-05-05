import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Box, styled } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Search = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <TextField
        fullWidth
        id="filled-start-adornment"
        sx={{ m: 1, width: isMobile ? "100%" : 500, background: "white" }}
        placeholder="Search for items"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
