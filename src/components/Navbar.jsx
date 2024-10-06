import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Box, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export function Navbar() {
  const [selected, setSelected] = useState(0)
  const navigate = useNavigate()

  const handleClick = (to, selectedIndex) => {
    setSelected(selectedIndex)
    navigate(to)
  }

  return (
    <Box>
      <List component={"nav"}>
        <ListItemButton
          selected={selected === 0}
          onClick={() => handleClick("/", 0)}
        >
          <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
          <ListItemText primary="PKB" />
        </ListItemButton>
        <ListItemButton
          selected={selected === 1}
          onClick={() => handleClick("/css", 1)}
        >
          <ListItemText primary="CSS" />
        </ListItemButton>
        <ListItemButton
          selected={selected === 2}
          onClick={() => handleClick("/javascript", 2)}
        >
          <ListItemText primary="JavaScript" />
        </ListItemButton>
        <ListItemButton
          selected={selected === 3}
          onClick={() => handleClick("/react", 3)}
        >
          <ListItemText primary="React" />
        </ListItemButton>
      </List>
    </Box>
  )
}