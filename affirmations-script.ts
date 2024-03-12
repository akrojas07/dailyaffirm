const AFFIRMATION_TITLE = [
    'I am adaptable',
    'I am adventurous',
    'I am aligned',
    'I am ambitious',
    'I am authentic',
    'I am awesome',
    'I am balanced',
    'I am centered',
    'I am committed',
    'I am compassionate',
    'I am confident',

]

const AFFIRMATION_DESC = [
    'I accept changes as they come and can adjust to any situation',
    'I enjoy new experiences and am willing to take chances',
    'My thoughts, actions, and words reflect who I am',
    'I set high goals for myself and achieve them with purpose',
    'I live as me and my genuine nature is valued',
    'I share my energy with the world',
    'I remain upright and stead in body and mind',
    'I focus on my breath and stabilize my emotions',
    'I understand the value of hard work and pursue my goals relentlessly',
    'I am conscious of my movements and practice self-forgiveness to love myself as I am',
    'I believe in myself and my abilities'
]



const getTodaysDate = () =>{
    const now = new Date();
    const todayElement = document.getElementById('todaysDate');

    if(todayElement){
        todayElement.innerHTML = now.toLocaleDateString(undefined, {weekday:"long", month:"long", day:"2-digit", year: "numeric"});
    }
}

const getAffirmation = () => {
    // generate random number between 0 and array length
    const randomAffirmIndex = Math.floor(Math.random()*AFFIRMATION_TITLE.length);

    // pull the affirmation
    const randomAffirmation = AFFIRMATION_TITLE[randomAffirmIndex];
    const randomAffirmDesc = AFFIRMATION_DESC[randomAffirmIndex];

    // add to html
    const affirmElement = document.getElementById('affirmation');
    const affirmDescElement = document.getElementById('affirmationDesc');

    if(affirmElement){
        affirmElement.innerHTML = randomAffirmation;
    }
    if(affirmDescElement){
        affirmDescElement.innerHTML = randomAffirmDesc;
    }
}

getTodaysDate();
getAffirmation();
