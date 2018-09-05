import moment from "moment"

// ***************************************************************
// Helpers
// ***************************************************************
// Get output of basic inline calculations

// truncate text
export const truncate = (word) => {
       if (word.length > 200)
      return word.substring(0,200)+'...';
   else
      return word;
}

// Outputs e.g. 12 days ago or 2 hours ago
export const showTimeAgo = date => {
  return !date ? "" : moment(date).fromNow()
}

// Outputs e.g. Jan, 2013
export const showMonthYear = date => {
  return !date ? "" : moment(date).format("MMM, YYYY")
}

// Outputs e.g. 12th Jan, 2013
export const showDayMonthYear = date => {
  return !date ? "" : moment(date).format("Do MMM, YYYY")
}

// Outputs August 30th 2014, 5:33:46 pm
export const showPrettyTimestamp = date => {
  return !date ? "" : moment(date).format("MMMM Do YYYY, h:mm a")
}

// Outputs August 30th 2014, 5:33:46 pm
export const showTimeAgoTimestamp = date => {
  return !date ? "" : moment(date).fromNow()
}

// Get profile image or placeholder image
export const getProfileImage = image => {
  let imagePlaceholder = "/img/profile_placeholder.png"
  if (!image || image === "") {
    return imagePlaceholder
  } else {
    return image
  }
}

// Outputs results of basic calculations
export const math = () => {
  return {
    mul ( a, b ) { return isNaN(a * b) ? 0 : a * b; },
    div ( a, b ) { return isNaN(b ? a / b : 0) ? 0 : b ? a / b : 0; },
    sum ( a, b ) { return isNaN(a + b) ? 0 : a + b; },
    sub ( a, b ) {
      a = a || 0
      b = b || 0

      return isNaN(a - b) ? 0 : a - b
    },
  }
}

// converts array to a comma seperated sentence, 
// replaces comma with `and` before the last element
export const to_sentence = (arr) => {
  return arr.reduce((prev, curr, i) => { 
    return prev + curr + ( (i===arr.length-2) ? ' and ' : ', ' )
  }, '').slice(0, -2);
}
