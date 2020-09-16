// CHALLENGE 13
// @param {any} secret
// @return {object}
function createSecretHolder(secret) {
  // declare variable and assign it the secret
  let privateValue = secret;
  // return an object with 2 methods
  // getSecret should return the secret
  // setSecret should set the secret
  return {
    getSecret: function () {
      return privateValue;
    },
    setSecret: function (newSecret) {
      privateValue = newSecret;
    },
  };
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2
