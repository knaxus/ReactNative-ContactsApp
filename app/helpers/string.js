// Helper Functions

// Capitalizes first letter of string for better readability
export const capitalizeFirstLetter = (string = '') => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
// Converts text to phone number
export const toPhoneNumber = (text = '') => {
const modText = text.replace(/[^\d]/g, '');
return modText.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
};
  