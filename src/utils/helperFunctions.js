import { Base64 } from "js-base64";
import ms from "ms";

export const timeSpan = (val) => {
  const errStr =
    '"expires_in" argument should be a number of milliseconds or a string representing a timespan eg: "1d", "20h", 60';

  if (typeof val === "string") {
    const milliseconds = ms(val);

    if (typeof milliseconds === "undefined") {
      throw new Error(errStr);
    }

    return new Date(Date.now() + milliseconds).toUTCString();
  } else if (typeof val === "number") {
    return new Date(Date.now() + val).toUTCString();
  } else {
    throw new Error(errStr);
  }
};

export const signMessage = (signature, expires_in = "1d", dataToSpend) => {
  const expiresInDate = timeSpan(expires_in);

  const data = {
    "Web3-Token-Version": 1,
    "Expire-Date": expiresInDate,
    ...dataToSpend,
  };

  const token = Base64.encode(
    JSON.stringify({
      signature,
      body: data,
    })
  );
  return token;
};

export const formatWalletAddress = (address, sDigits, eDigits) => {
  return address.slice(0, sDigits) + "..." + address.slice(address.length - eDigits, address.length);
};
