import { React, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const EditDialog = ({ editItem, item }) => {
  const [open, setOpen] = useState(false);
  const [editedItem, setEditedItem] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setEditedItem(item.content);
  };

  const handleClose = () => {
    setOpen(false);
    setEditedItem("");
  };

  const handleEditItem = () => {
    if (editedItem.trim()) {
      editItem(item.id, editedItem);
      handleClose();
    }
  };

  return (
    <>
      <IconButton onClick={handleClickOpen} color="primary">
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update a task</DialogTitle>
        <DialogContent>
          <Box sx={{ "& button": { m: 1 } }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              value={editedItem}
              onChange={(e) => setEditedItem(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" onClick={handleEditItem}>
              Confirm Edit
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditDialog;
