const avatarCardData = Array.from({ length: 20 }, (_, index) => ({
    src: `https://gravatar.com/avatar/${generateRandomHash()}?s=400&d=robohash&r=x`,
    fallback: `${index + 1}`,
  }));
  
  // Function to generate a random hash
  function generateRandomHash() {
    return Math.random().toString(36).substring(2, 10);
  }
  
  export { avatarCardData };