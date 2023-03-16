const another = ({ name, age, profession }) => {
    var _name = name;
    var _age = age;
    var _profession = profession;
    return {
        getname: () => _name,
        getage: () => _age,
        getprofession: () => _profession,

        setname: newName => _name = newName
    }
}
const pass = another({ name: "sarthak", age: "25", profesiion: "billionaire" });
console.log(pass.getage());
pass.setname("Sarthak The Great");
console.log(pass.getname())