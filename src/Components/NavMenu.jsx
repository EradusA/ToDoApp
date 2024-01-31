import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChecklistIcon from "@mui/icons-material/Checklist";

export default function NavMenu() {
  const [navIndex, setNavIndex] = React.useState(1);

  const handleListItemClick = (index) => {
    setNavIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav">
        <ListItemButton
          selected={navIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <ChecklistIcon />
          </ListItemIcon>
          <ListItemText primary="To Do List" />
        </ListItemButton>
        <ListItemButton
          selected={navIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemButton>
      </List>
    </Box>
  );
}
