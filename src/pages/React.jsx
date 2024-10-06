import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, List, ListItem } from "@mui/material";

export function React() {
  return (
    <>
      <Typography variant="h1">React</Typography>
      <List>
        <ListItem disablePadding>
          <Typography variant="h2">State Management</Typography>
        </ListItem>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/react/useState">
            <Typography>useState()</Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/react/context-api">
            <Typography>Context API</Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/react/reducers">
            <Typography>Reducers</Typography>
          </Link>
        </ListItem>
      </List>
    </>
  )
}