import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import Fun from "./Fun"

ReactDom.render(<Router><Fun /></Router>,document.getElementById("root"));