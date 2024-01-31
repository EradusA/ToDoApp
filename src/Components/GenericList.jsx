import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";

const GenericList = ({
  title,
  items,
  updateItem,
  DelItem,
  readableDate,
  editItem,
}) => {
  return (
    <div className={title}>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <label>
                <Checkbox
                  checked={item.completed}
                  onChange={() => updateItem(item.id)}
                />
                {item.content}: {readableDate(item)}
              </label>
              <Box>
                <IconButton onClick={() => editItem()} color="primary">
                  <EditIcon />
                </IconButton>
                {!item.completed && (
                  <IconButton onClick={() => DelItem(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenericList;
