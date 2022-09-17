// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal


class Animal {
    constructor(name, ability){
        this.name = name;
        this.ability = ability;
    }


abilities() {
    console.log(`this is a ${this.name} ${this.ability}`);
}

}



class Cat extends Animal {
    
    constructor(name, ability){
        super(name, ability);
    }
    skill(){
        console.log(` he can ${this.ability}`)
    }

}

const dogg = new Cat("cat", "swim");

dogg.abilities();
dogg.skill();






// class Animal extends cat {

//     constructor(ability1, ability2){
//      super(ability1, ability2)

//     }
//     abilities(){
//         console.log(`${this.Power} ${this.Speed}`)
//     }
     
// }

// const dog = new cat("")