// template_bqra2iw

// service_0px83op

// tAMWjxI7hvu3SVlgs


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
     loading.classList += " modal__overlay--visible";

     emailjs
       .sendForm(
           'service_0px83op',
            'template_bqra2iw',
            event.target,
            'tAMWjxI7hvu3SVlgs'
        ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on email@email.com"
            );

        })
       
}