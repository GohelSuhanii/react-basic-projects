import { Container, Typography, List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alex" },
];

function User() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Users Page
      </Typography>

      <List>
        {users.map((user) => (
          <ListItemButton
            key={user.id}
            component={Link}
            to={`/users/${user.id}`}
          >
            {user.name}
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
}

export default User;
