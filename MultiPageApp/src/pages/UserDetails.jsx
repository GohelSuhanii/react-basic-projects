import { Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>

      <Typography>User ID: {id}</Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => navigate("/user")}
      >
        Back to Users
      </Button>
    </Container>
  );
}

export default UserDetails;
