import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import GenericList from "./GenericList";
import MyTabs from "./Tabs";
import AddDialog from "./Dialogue";
import useToDoList from "./useToDoList";

const TodoList = ({ searchTerm }) => {
  const { toDoItems, doneItems, addItem, delItem, updateItem, editItem } = useToDoList();

  const readableDate = (item) => {
    const date = new Date(item.id);
    return date.toDateString();
  };

  const filterItems = (items) => {
    return items.filter((item) =>
      item.content.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
  };

  const filteredToDoItems = filterItems(toDoItems);
  const filteredDoneItems = filterItems(doneItems);
  const showTabs = searchTerm === "";

  return (
    <Grid container spacing={0} sx={{ padding: "40px" }}>
      <Grid item xs={true} />
      <Grid item sx={{ minWidth: 450 }}>
        <Paper elevation={1} sx={{ padding: "10px" }}>
          {showTabs ? (
            <MyTabs
              tabs={[
                {
                  name: "To Do",
                  content: () => (
                    <GenericList
                      title="To Do"
                      items={toDoItems}
                      updateItem={updateItem}
                      DelItem={delItem}
                      readableDate={readableDate}
                      editItem={editItem}
                    />
                  ),
                },
                {
                  name: "Done",
                  content: () => (
                    <GenericList
                      title="Done"
                      items={doneItems}
                      updateItem={updateItem}
                      DelItem={delItem}
                      readableDate={readableDate}
                      editItem={editItem}
                    />
                  ),
                },
              ]}
            />
          ) : (
            <>
              {filteredToDoItems.length > 0 && (
                <>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    To Do
                  </Typography>
                  <GenericList
                    title="To Do"
                    items={filteredToDoItems}
                    updateItem={updateItem}
                    DelItem={delItem}
                    readableDate={readableDate}
                    editItem={editItem}
                  />
                </>
              )}
              {filteredDoneItems.length > 0 && (
                <>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Done
                  </Typography>
                  <GenericList
                    title="Done"
                    items={filteredDoneItems}
                    updateItem={updateItem}
                    DelItem={delItem}
                    readableDate={readableDate}
                    editItem={editItem}
                  />
                </>
              )}
            </>
          )}
        </Paper>
      </Grid>
      <AddDialog addItem={addItem} />
    </Grid>
  );
};

export default TodoList;
