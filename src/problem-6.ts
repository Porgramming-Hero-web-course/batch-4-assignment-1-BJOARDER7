{
    //
    // Problem-6

interface MyProfile { 
    name: string;
    age: number;
    email: string 
};

function updateProfile(myProfile: MyProfile, updates: Partial<MyProfile>): MyProfile {
    return { ...myProfile, ...updates };
  }

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

updateProfile(myProfile, { age: 26 });

// console.log(updateProfile(myProfile, { age: 26 }));

    //
}