import React, { useState, useRef, useEffect } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddDialog = ({ addItem }) => {
  const [open, setOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewItem("");
    inputRef.current = null;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCreateItem();
    }
  };

  const handleCreateItem = () => {
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem("");
      handleClose();
    }
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        style={{ position: "fixed", bottom: "20px", right: "10px" }}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new task</DialogTitle>
        <DialogContent>
          <Box sx={{ "& button": { m: 1 } }}>
            <TextField
              id="outlined-basic"
              label="Enter a new task"
              variant="outlined"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter a new item"
              fullWidth
              margin="normal"
              inputRef={inputRef}
            />
            <Button variant="contained" onClick={handleCreateItem}>
              Add Item
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

export default AddDialog;
