// Matchers
export const testToBe = (a, b) => {
  return a + b;
};

export const testToEqual = (key, value) => {
  let data = { firstName: "Jagan" };
  data[key] = value;
  return data;
};

export const testToBeFalsy = (data) => {
  return data;
};

export const testToBeTruthy = (data) => {
  return data;
};

export const testToThrow = (numericValue) => {
  if (typeof numericValue !== "number") {
    throw new Error("Invalid Input");
  }
};

// Asynchronous
export const testCallback = (callback) => {
  setTimeout(() => {
    callback("Bonjour");
  }, 1000);
};

export const testPromise = (shouldReject = false) => {
  return new Promise((resolve, reject) => {
    if (shouldReject) {
      reject("Error");
    } else {
      setTimeout(() => {
        resolve("Konnichiwa");
      }, 1000);
    }
  });
};
