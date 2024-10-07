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

  const links = [
    {
      path: '',
      text: 'PKB',
      icon: 'HomeIcon',
      iconColor: 'primary',

    },
    {
      path: 'html',
      text: 'HTML'
    },
    {
      path: 'css',
      text: 'CSS'
    },
    {
      path: 'javascript',
      text: 'JavaScript'
    },
    {
      path: 'react',
      text: 'React'
    }
  ]

  return (
    <Box>
      <List component={"nav"}>
        {links.map((item, index) => {
          return <ListItemButton key={Math.floor(Math.random() * 10000)}
            selected={selected === index}
            onClick={() => handleClick("/" + item.path, index)}
          >
            {item.icon === "HomeIcon" && (
              <ListItemIcon><HomeIcon color={item.iconColor} /></ListItemIcon>
            )}
            <ListItemText primary={item.text} />
          </ListItemButton>
        })}
      </List>
    </Box>
  )
}