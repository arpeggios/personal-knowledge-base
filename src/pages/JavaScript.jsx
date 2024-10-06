import { Link as RouterLink } from "react-router-dom"
import { Typography, List, ListItem, Link } from "@mui/material"

export function JavaScript() {
  return (
    <>
      <Typography variant="h1">JavaScript</Typography>
      <List>
      <ListItem disablePadding>
          <Link component={RouterLink} to="/javascript/closure">
            <Typography>Closure</Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/javascript/destructuring">
            <Typography>Destructuring</Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/javascript/event-loop">
            <Typography>Event Loop</Typography>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link component={RouterLink} to="/javascript/promises">
            <Typography>Promises</Typography>
          </Link>
        </ListItem>
      </List>
    </>
  )
}