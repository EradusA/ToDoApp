import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const MyTabs = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        {tabs.map((tab, index) => (
          <Tab label={tab.name} key={tab.name} value={index} /> 
        ))}
      </Tabs>
      {tabs.length > 0 && tabs[value]?.content ? tabs[value].content() : null}
    </>
  );
};

export default MyTabs;
