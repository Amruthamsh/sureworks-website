const template = document.createElement('template');

template.innerHTML = `
<div class="contact-info">
	    <img src="icons/phone.svg">
            <a href="tel:1800-889-3916">1800-889-3916</a>
            <img src="icons/mobile.svg">
            <a href="tel:+91 - 80 35712085">+91 - 80 35712085</a>
            <img src="icons/mail.png">
            <a href="mailto:info@sureworks.in">info@sureworks.in</a>
</div>
`;

document.body.appendChild(template.content);

