import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Teams from "./Teams/Teams";
import Stadiums from "./Stadiums/Stadium";
library.add(faLongArrowAltLeft);
export default class Dashboard extends Component {}
