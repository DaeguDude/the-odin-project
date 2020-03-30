### Constructor 

A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.

```javascript
function Account() {}

//This is the use of the Account constructor to create the userAccount object 
var userAccount = new Account();
```

```javascript
// The constructor in this example is Object()
var myObj = new Object()

// If you later want to find the myObj constructor:
console.log(myObj.constructor);
```

Prototype Attribute of Objects Created with new Object() or Object Literal All objects created with object literals and with the Object constructor inherits from Object.prototype.

```javascript
// The userAccount object inherits from Object.
// its prototype attribute is Object.prototype.
var userAccount = new Object()

// This demonstrates the user of an object literal to create the userAccount object; the userAccount object inherits from Object; therefore, its prototype attribute is Object.prototype just as the userAccount object does above.
var userAccount = {name: "Mike"}
```