const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const backButton = document.getElementById("backButton");

if(signUpButton){
    document.getElementById("signUpButton").addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "signup.html";
    });
}

if(signInButton){
    document.getElementById("signInButton").addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "signin.html";
    });
}

if(backButton){
    document.getElementById("backButton").addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "signin.html";
    });
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".modal__button");
const openTerms = document.querySelector("#openTermsOfService");
const openPrivacy = document.querySelector("#openPrivacyPolicy");

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

openTerms.addEventListener('click', openModal);
openPrivacy.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
