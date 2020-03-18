import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import SelectAllIcon from '@material-ui/icons/SelectAll';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function Layout(props) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className='d-flex justify-content-center'>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          history.push(`/${newValue}`);
          setValue(newValue);
        }}
        showLabels
        className={classes.root} 
      >
        <h5 className='mt-2'>Sorting Algorithms</h5>
        <BottomNavigationAction
          value="bubble"
          label="Buble"
          icon={<BubbleChartIcon />}
        />
        <BottomNavigationAction
          value="selection"
          label="Selection"
          icon={<SelectAllIcon />}
        />
        <BottomNavigationAction label="Coming Soon.." icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}
