// Comments
// Proper naming makes comments redundant


// Bad comments




// Redundant information
// Using proper names makes the code self explanatory, thus making comments not needed.

// Reset selectedAttributes
this.selectedAttributes = [];



// Markers
// If you feel that you need to use markers, you have too much code in that file.



// Material
import { MatSidenavModule } from '@angular/material/sidenav';
//...


// Commented out code

// Keeping commented out code for reference is ok, but it should not be kept long term - use version control



// Good Comments:


// Legal info

// © 2021 Company Name


// Explanations that can't be replaced by good naming.

// accepts [text]@[text].[text], i.e. it simply requires an "@" and a dot
const emailRegex = /\S+@\S+\.\S+/;


// Warnings

// Only works in browser environment
localStorage.setItem('user', 'test@test.com')


// TODOs

const findOne = (id) => {
  // Todo: Needs to be implemented
}


// Documentation

/**
* @param {string} email
* @returns {Promise}
*/
const login = (email) => {
  // ...
}
