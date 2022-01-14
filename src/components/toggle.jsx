import { Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components';

function Toggle () {
    return (
        <Dropdown>
       <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>    
</Dropdown>
    );
}


export default Toggle;
