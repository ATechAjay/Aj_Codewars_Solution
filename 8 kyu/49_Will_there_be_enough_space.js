// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus!

// 1. Write a simple program telling him if he will be able to fit all the passengers.

// 2. You have to write a function that accepts three parameters:

// 3. "cap" is the amount of people the bus can hold excluding the driver.
// 4. "on" is the number of people on the bus excluding the driver.
// 5. "wait" is the number of people waiting to get on to the bus excluding the driver.
// 6. If there is enough space, return 0

// 7.  And if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  // 1. finc the available space on the bus by subtracting b/w total cap and passenger on the bus.
  const availableSpaceOnBus = cap - on;

  // 2. Check if the total available space is greater than or equal to the waiting passenger.
  // a. If yes then return 0
  // b. Otherwise return extra waiting passenger.

  // 40 >= 50 -- Available space >= waiting passenger.
  // 5 >= 5 -- Available space >= waiting passenger.
  // 15 >= 5 -- Available space >= waiting passenger.
  if (availableSpaceOnBus >= wait) return 0;
  else return wait - availableSpaceOnBus;
}

// enough(10, 5, 5); //, 0);
enough(100, 60, 50); //, 10);
// enough(20, 5, 5); //, 0);
