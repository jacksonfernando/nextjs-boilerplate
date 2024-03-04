import { connectToDataBase } from "./mongodb";

const middlewareHandler = (...asyncFunctions) => {
  let results = [];
  async function processSequentially() {
    for (let i = 0; i < arguments.length; i++) {
      let result = await arguments[i];
      results.push(result);
    }
    return results[arguments.length - 1];
  }
  return processSequentially(...asyncFunctions);
}

const connectToDatabaseMiddleware = async () => {
  return connectToDataBase();
}

export {
  middlewareHandler,
  connectToDatabaseMiddleware
}

