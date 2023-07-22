/**
 * Task file to Create a Person Class, Objects & Properties.
 */
class Person{
constructor(firstName,lastName,age,height,weight,address,gender,profession){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.address = address;
    this.gender = gender;
    this.profession = profession;
}
getSelfIntro(){
console.log(`Hi I am ${this.firstName} ${this.lastName}`);
}
moreAboutYou(){
    console.log(`I am ${this.height} tall`);
    console.log(`I weighs ${this.weight} Kgs`);
    console.log(`I stay at ${this.address} area`);
    console.log(`I am a  ${this.gender}!`);
    console.log(`I works as  ${this.profession}!`);
}

}
const giveIntro = new Person('Johhny','Depp','30',6.2,70,'Boston','Male','Actor');
giveIntro.getSelfIntro();
giveIntro.moreAboutYou();