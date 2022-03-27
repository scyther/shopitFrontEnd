export const checkServicability = (pincode) => {
  const pinCodes = [177026, 177001, 180001, 110001];
  const result = pinCodes.find((item) => item === parseInt(pincode));
  return result;
  //   let headersList = {
  //     "Content-Type": "application/json",
  //   };

  //   fetch("https://api.postalpincode.in/pincode/110001", {
  //     method: "GET",
  //     mode:'no-cors',
  //     headers: headersList,
  //   })
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));
};
