import '/imports/startup/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import popper from 'popper.js';
global.Popper = popper;

BlazeLayout.setRoot('body');