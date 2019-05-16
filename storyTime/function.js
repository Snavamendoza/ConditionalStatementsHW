var character = 'female'
if (character =='male'){
    console.log('You are a warrior!');
}
else if (character == 'female'){
    console.log('You are a powerful Queen!');
}
function sidekick(){
    var randomSk1 = Math.floor(Math.random ()*5);
    var randomSk2 = Math.floor(Math.random ()*5);
    var Title = ['The Mighty','The Powerful','The Fearful','The Mischievous','The Clumsy'];
    var Sidekick = ['Ogre','Dragon','Witch','Wizard','Fairy'];
    var chosenSidekick = Title [randomSk1] + ' ' + Sidekick [randomSk2];
    console.log(chosenSidekick);
}
sidekick();

var yourSidekick = 'Witch'
if (yourSidekick == 'Ogre'){
    console.log('Congratulations your Sidekick is an Ogre!');
}
else if (yourSidekick == 'Dragon'){
    console.log('Congratulations your Sidekick is a Dragon!');
}
else if (yourSidekick == 'Witch'){
    console.log('Congratulations your Sidekick is a Witch!');
}
else if (yourSidekick == 'Wizard'){
    console.log('Congratulations your Sidekick is a Wizard!');
}
else if (yourSidekick == 'Fairy'){
    console.log('Congratulations your Sidekick is a Fairy!');
}
else {
    console.log('please insert given Sidekick');
}
function firstAdventure(){
var randomAdv1 = Math.floor(Math.random()*5);
var randomAdv2 = Math.floor(Math.random()*5);
var action = ['Cross','Destroy','Create','Leave','Fly Over'];
var place = ['Mountain','Lava Lake','Ocean','Tower','Village'];
var task = action [randomAdv1] + ' ' + place [randomAdv2];
console.log(task);
}
firstAdventure();

var adventureCompleted = 'Failure'
if (adventureCompleted == 'Success'){
    console.log('You have successfully completed your first adventure! But beware, the challenges will only get tougher. Trust in yourself and rely on your Sidekick. Be Brave!');
}
else if (adventureCompleted == 'Failure'){
    console.log('You have been defeated in this task but you may try again! Believe in yourself and Rely on your Sidekick but most importantly remember to be Brave!');
}