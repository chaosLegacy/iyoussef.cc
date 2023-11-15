import { ICountryData } from 'countries-list';
import { Timestamp } from 'firebase/firestore';
import { PHONE_REGEX } from 'lib/constants';
import { SelectOption } from 'lib/types';
import moment from 'moment';
import phone from 'phone';

const getInitials = (str?: string): string => {
  if (!str) return '';
  const words = str.split(' ');
  const initials = words.map((word) => word.charAt(0));
  return initials.join('').toUpperCase();
};

const capitalizeFirstLetter = (str?: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const objectToString = (params: {
  [x: string]: string | number | boolean;
}): string => {
  return (
    '?' +
    Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&')
  );
  // return '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
};

function convertTimestampToDate(timestamp: Timestamp) {
  if (!timestamp || typeof timestamp !== 'object' || !timestamp.seconds) {
    return null;
  }

  const { seconds, nanoseconds } = timestamp;

  const milliseconds = seconds * 1000 + nanoseconds / 1000000;

  const date = moment(milliseconds).toDate();
  return moment(date).format('dd, DD MMM YYYY HH:mm:ss');
}

const phoneValidator = (value: string) => {
  // Use npm phone library to parse and validate the phone number
  const { isValid } = phone(value);
  // Check if the phone number is valid
  if (!isValid) {
    return false;
  }
  return true; //[phoneNumber, countryCode];
};

const convertArrayToSelectOptions = <T>(
  element: T[],
  keyLabel: keyof T,
  keyValue: keyof T,
): SelectOption[] => {
  if (Array.isArray(element))
    return element.map((item) => ({
      label: String(item[keyValue]),
      value: String(item[keyLabel]),
    }));
};
const convertItemToOption = <T>(
  item: T,
  keyLabel: keyof T,
  keyValue: keyof T,
): SelectOption => {
  return {
    label: String(item[keyValue]),
    value: String(item[keyLabel]),
  };
};

// const getKeyByValue = (value: string) => {
//   const indexOfS = Object.values(Sizes).indexOf(value as unknown as Sizes);

//   const key = Object.keys(Sizes)[indexOfS];

//   return key;
// }

export {
  getInitials,
  capitalizeFirstLetter,
  objectToString,
  convertTimestampToDate,
  phoneValidator,
  convertArrayToSelectOptions,
  convertItemToOption,
};
