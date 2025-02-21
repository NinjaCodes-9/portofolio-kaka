/*==EMAIL JS==*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    console.log("Mengirim email...");

    // service ID - Template ID - Form - publickey
    emailjs.sendForm('service_k3qwjbd','template_xvv0pj8',contactForm,'EY1AJablFeJeQ7E3L')

    .then  (() =>{
        console.log("Email terkirim!");
        //show sent message
        contactMessage.textContent = 'Message sent succesfully ✅';

        //remove message after five seconds
        setTimeout (() => {
            contactMessage.textContent = '';
        }, 5000);

        //clear input fields
        contactForm.reset();
    })
    .catch((error) => {
        console.error("Error mengirim email:", error);
        contactMessage.textContent = 'Failed to sent message ❌';
    }); 
};  
contactForm.addEventListener('submit', sendEmail)     

/*==SHOW SCROLL UP==*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==SCROLL SECTIONS ACTIVE LINK==*/
const sections =  document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop -  58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active-link')
    }else{
        sectionClass.classList.remove('active-link')
        }
    } )
}
window.addEventListener('scroll', scrollActive)

/*==SCROLL REVEALING==*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    display: 400,
    //reset: true, //Animations repeat
}) 

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin: 'left', delay: 800})
sr.reveal('.skills', {origin: 'left', delay: 1000})
sr.reveal('.about', {origin: 'right', delay: 1200})
sr.reveal('.projects__card, .services__card, .experience__card', {interval: 100})