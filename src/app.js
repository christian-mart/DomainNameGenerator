let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let y = 0; y < noun.length; y++) {
      console.log(pronoun[i] + adj[j] + noun[y] + ".com");
    }
  }
}
