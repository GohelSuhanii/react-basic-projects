import { Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container>
      <Typography variant="h3" color="error">
        404
      </Typography>
      <Typography>Page Not Found</Typography>
    </Container>
  );
}

export default NotFound;
