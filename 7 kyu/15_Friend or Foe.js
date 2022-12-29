// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  //   1. Create an empty array for storing our friends list.
  const closeFriends = [];
  //   2. Now loop all the friends list.
  friends.forEach((item) => {
    //   3. Check if the length is 4 or not on a particular item of the array.
    //   4. If yes, then push them into newly created array.
    if (item.length === 4) closeFriends.push(item);
  });
  //   5. Finally return all list of the friends.
  return closeFriends;
}
