const tabs= document.querySelectorAll('[data-target]'),
 tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach((tab)  => {
    tab.addEventListener('click' ,() => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
        tabContent.classList.remove('tab__active');    
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
    

 });
 });

 /* ======================CONTACT FORM================*/

 const contactForm =document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name'),
   contactEmail = document.getElementById('contact-email'),
   contactSubject = document.getElementById('contact-subject'),
   contactMessage = document.getElementById('contact-message'),
   errorMessage = document.getElementById('error-message');

 const sendEmail  = (e) => {
    e.preventDefault();

    // check if the field has a value
    if(contactName.value === '' || 
        contactEmail.value == '' ||
        contactSubject.value == '' ||
        contactMessage.value == '' ) {
     
      //show message
         errorMessage.textContent   = 'Write all the input fields'
        }
    else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_hhgjoir',
            'template_sfdovaw',
            '#contact-form',
            'ilD1_Vpq1_YlWdmNC')
            .then(()=>{
                //show message and add color, windows + dot to open emoji
            errorMessage.classList.add('color-first');  
            errorMessage.textContent = 'Message sent ✔️'; 

            // remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent= '';
            }, 5000);
            },
            (error)=>{
              alert('OOPs! Something went  wrong...', error);  
            } 
        );

        //clean input fields
        contactName.value ='';
        contactEmail.value ='';
        contactSubject.value ='';
        contactMessage.value ='';
    }
 }

 contactForm.addEventListener('submit', sendEmail);
 