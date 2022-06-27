const { check } = require("../services/rooftop");
const rooftopClient = require("./../clients/rooftop");

jest.mock("./../clients/rooftop", () => jest.fn());

rooftopClient.checkBlocks = jest.fn(async (block1, block2, token) => {
  const sorted = [
    "CAnt1fIi8ttZQdwMgawcJgzwgH8fC7JzgGsE5i1aIoo1sy7fKaKrCjZJrWAcDMYFpdFEaRKTsm5jswKk3FOknbbsuPPROhILtirN",
    "rrKlvIPe7Z7QUzQwfFnINOdLTU0o2wVnCe9l5bWPdZiSfVf6senxx6PSaAZD1lgCSk6lfySa0kRJ087s9GTZAhrS5Ek8b1cFTqAg",
    "CPRphT5Kv6ZrarrCa0nMdQZq0kXE174JUObwHUM7wZgGQAtYWu3x2OkHn6CPEv37Zg7g0LERNNjtT6hvrQ4rV2c4MNf38S7zv6oE",
    "nC8Y72MT9nrSWOMnOGOdmD55rmf1pkNcCC6D83eJUwBHNOZSfhgPC2DjBIampgqCBEs4M7LAiL1mtjq9UyYqzQziPsmw04gXnMHe",
    "FTmZpz6Uk7JL26QHL2TpeFWBYTKHQDGvdhqGcbLdVsiKkS5p82qB014dH88WqWeelWT0LxSmq1Oup5X90k857mn3mXoowE8SrRYx",
    "guTQ9C4db0LKpdv7q4EuNN67iIimJjq29E1QIjCzq0f9QeyCrTy4cYUyvxaQln1ZyPJUezlsrM7Eeq8R8H2Y0h1ohxPCsc0wJOD0",
    "1MlgNOXcVakAZnGpVqVizS9pBhLrBCJrFhRRAehoXrt9jbSnQGkqSDGNKNBWuFJwEKOnLrK7Q57UQxElRIYu5Ww4LDIb6BRM5cQ5",
    "9r6273tmVthcJmUosJc7HKVVe8v3q6oMZtTKB3RQEo3iif9QkbVaKz9rx0Vqs8HjPbL7AWte8FjsO9Lit75X41fYtnFS6TQ4le0H",
    "7eUvLqts1BJkuFprAaBqgaZymvGjUAOF9YkJKYFGw85vtjnElEI38fI2A8NQ0uID8sipAp71uEBX31s88jbz4tj9Lsbwog23B6lf",
  ];

  const posBlock1 = sorted.indexOf(block1);
  if (posBlock1 === sorted.length - 1) return false;

  const posBlock2 = posBlock1 + 1;

  return sorted[posBlock2] === block2;
});

describe("rooftop services", () => {
  test("check", async () => {
    const blocks = await check(
      [
        "CAnt1fIi8ttZQdwMgawcJgzwgH8fC7JzgGsE5i1aIoo1sy7fKaKrCjZJrWAcDMYFpdFEaRKTsm5jswKk3FOknbbsuPPROhILtirN",
        "guTQ9C4db0LKpdv7q4EuNN67iIimJjq29E1QIjCzq0f9QeyCrTy4cYUyvxaQln1ZyPJUezlsrM7Eeq8R8H2Y0h1ohxPCsc0wJOD0",
        "7eUvLqts1BJkuFprAaBqgaZymvGjUAOF9YkJKYFGw85vtjnElEI38fI2A8NQ0uID8sipAp71uEBX31s88jbz4tj9Lsbwog23B6lf",
        "FTmZpz6Uk7JL26QHL2TpeFWBYTKHQDGvdhqGcbLdVsiKkS5p82qB014dH88WqWeelWT0LxSmq1Oup5X90k857mn3mXoowE8SrRYx",
        "1MlgNOXcVakAZnGpVqVizS9pBhLrBCJrFhRRAehoXrt9jbSnQGkqSDGNKNBWuFJwEKOnLrK7Q57UQxElRIYu5Ww4LDIb6BRM5cQ5",
        "CPRphT5Kv6ZrarrCa0nMdQZq0kXE174JUObwHUM7wZgGQAtYWu3x2OkHn6CPEv37Zg7g0LERNNjtT6hvrQ4rV2c4MNf38S7zv6oE",
        "rrKlvIPe7Z7QUzQwfFnINOdLTU0o2wVnCe9l5bWPdZiSfVf6senxx6PSaAZD1lgCSk6lfySa0kRJ087s9GTZAhrS5Ek8b1cFTqAg",
        "9r6273tmVthcJmUosJc7HKVVe8v3q6oMZtTKB3RQEo3iif9QkbVaKz9rx0Vqs8HjPbL7AWte8FjsO9Lit75X41fYtnFS6TQ4le0H",
        "nC8Y72MT9nrSWOMnOGOdmD55rmf1pkNcCC6D83eJUwBHNOZSfhgPC2DjBIampgqCBEs4M7LAiL1mtjq9UyYqzQziPsmw04gXnMHe",
      ],
      "d9222287-0b63-42a9-9d04-f6bde294441a" // test token
    );

    expect(blocks).toStrictEqual([
      "CAnt1fIi8ttZQdwMgawcJgzwgH8fC7JzgGsE5i1aIoo1sy7fKaKrCjZJrWAcDMYFpdFEaRKTsm5jswKk3FOknbbsuPPROhILtirN",
      "rrKlvIPe7Z7QUzQwfFnINOdLTU0o2wVnCe9l5bWPdZiSfVf6senxx6PSaAZD1lgCSk6lfySa0kRJ087s9GTZAhrS5Ek8b1cFTqAg",
      "CPRphT5Kv6ZrarrCa0nMdQZq0kXE174JUObwHUM7wZgGQAtYWu3x2OkHn6CPEv37Zg7g0LERNNjtT6hvrQ4rV2c4MNf38S7zv6oE",
      "nC8Y72MT9nrSWOMnOGOdmD55rmf1pkNcCC6D83eJUwBHNOZSfhgPC2DjBIampgqCBEs4M7LAiL1mtjq9UyYqzQziPsmw04gXnMHe",
      "FTmZpz6Uk7JL26QHL2TpeFWBYTKHQDGvdhqGcbLdVsiKkS5p82qB014dH88WqWeelWT0LxSmq1Oup5X90k857mn3mXoowE8SrRYx",
      "guTQ9C4db0LKpdv7q4EuNN67iIimJjq29E1QIjCzq0f9QeyCrTy4cYUyvxaQln1ZyPJUezlsrM7Eeq8R8H2Y0h1ohxPCsc0wJOD0",
      "1MlgNOXcVakAZnGpVqVizS9pBhLrBCJrFhRRAehoXrt9jbSnQGkqSDGNKNBWuFJwEKOnLrK7Q57UQxElRIYu5Ww4LDIb6BRM5cQ5",
      "9r6273tmVthcJmUosJc7HKVVe8v3q6oMZtTKB3RQEo3iif9QkbVaKz9rx0Vqs8HjPbL7AWte8FjsO9Lit75X41fYtnFS6TQ4le0H",
      "7eUvLqts1BJkuFprAaBqgaZymvGjUAOF9YkJKYFGw85vtjnElEI38fI2A8NQ0uID8sipAp71uEBX31s88jbz4tj9Lsbwog23B6lf",
    ]);
  });
});
