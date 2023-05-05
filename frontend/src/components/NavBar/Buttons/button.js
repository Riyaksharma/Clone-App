import { Button, Stack } from "@mui/material";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Buttons = () => {
  return (
    <Stack spacing={2} direction="row" marginRight={8}>
      <Button variant="contained">Login</Button>
      <Button variant="text">Become a seller</Button>
      <Button variant="text">More</Button>
      <Button variant="text">
        Cart <ShoppingCartCheckoutIcon />
      </Button>
    </Stack>
  );
};

export default Buttons;
