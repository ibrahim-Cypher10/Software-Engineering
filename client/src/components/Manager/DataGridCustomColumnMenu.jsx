import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { GridColumnMenuContainer, useGridApiRef } from '@mui/x-data-grid';

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn } = props;
  const apiRef = useGridApiRef();

  const handleHideColumn = () => {
    apiRef.current.setColumnVisibility(currentColumn.field, false);
    hideMenu();
  };

  return (
    <GridColumnMenuContainer {...props}>
      {/* Assuming the default filter option is automatically included */}
      {/* Custom Hide Column Menu Item */}
      <MenuItem onClick={handleHideColumn}>Hide Column</MenuItem>
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
