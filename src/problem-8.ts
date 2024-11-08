{
    //
    // Problem-8

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.reduce((allKeys, key) => allKeys && (key in obj), true);
    }
  
  const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
  };
  
  validateKeys(user, ["name", "age"]);

  // console.log(validateKeys(user, ["name", "age"])); 
  // console.log(validateKeys(user, ["name", "year"])); 

    //
}