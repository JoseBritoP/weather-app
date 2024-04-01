export const formatTemperature = (temp:number):number => {
  const kelvin = 275.15;
  return parseInt((temp - kelvin).toString());
};