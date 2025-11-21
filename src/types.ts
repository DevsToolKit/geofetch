export interface Country {
  code: string; // "IN"
  name: string; // "India"
  dialCode: string; // "+91"
  currency: string; // "INR"
}

export interface State {
  countryCode: string; // "IN"
  code: string; // "MH"
  name: string; // "Maharashtra"
}

export interface District {
  countryCode: string; // "IN"
  stateCode: string; // "MH"
  name: string; // "Pune"
}
