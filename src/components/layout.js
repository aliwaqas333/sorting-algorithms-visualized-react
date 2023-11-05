import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import SelectAllIcon from "@material-ui/icons/SelectAll";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import { useNavigate } from "react-router-dom"; // Updated import

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Layout(props) {
  const navigate = useNavigate(); // Updated hook
  const classes = useStyles();
  const [value, setValue] = React.useState("bubble"); // Initialize to the default path

  return (
    <div className="d-flex justify-content-center">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          navigate(`/${newValue}`); // Updated function
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <h5 className="mt-2">Sorting Algorithms</h5>
        <BottomNavigationAction
          value="bubble"
          label="Bubble" // Fixed typo in label
          icon={<BubbleChartIcon />}
        />
        <BottomNavigationAction
          value="selection"
          label="Selection"
          icon={<SelectAllIcon />}
        />
        <BottomNavigationAction
          value="insertion"
          label="Insertion"
          icon={<SelectAllIcon />}
        />
        <BottomNavigationAction
          value="radix"
          label="Radix"
          icon={<SelectAllIcon />}
        />
        <BottomNavigationAction
          label="Coming Soon.."
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
