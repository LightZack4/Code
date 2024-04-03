import React from 'react';
const DropdownMenu = ({ open }) => {
    function DropdownItem(props){
        return (
            <div className="menu-item">
                {props.children}
            </div>
        )
    }
  return (
    <div className={`dropdown ${open ? 'active' : 'inactive'}`}>
  <DropdownItem>Report</DropdownItem>
</div>

  );
}

export default DropdownMenu;
