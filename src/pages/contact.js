import { useEffect } from 'react'

export default function Contact(){
    useEffect(() => {
        document.querySelector("#__next").className = "contact-page";    
      }, []);

    return (
        <div id="main" className="content">
            <div className="contact-form">
                <form name="form1" id="ff" method="post" action="https://formspree.io/f/mgerdqnr">

                <label>
                    <span>Name*:</span>
                    <input placeholder="Please enter your name" name="name" id="name" required="" type="text" />
                </label>

                <label>
                    <span>Email*:</span>
                    <input placeholder="youremail@email.com" name="email" id="email" required="" type="email" />
                </label>

                <label>
                    <span>Message*</span>
                    <textarea id="message" name="message" required=""></textarea>
                </label>

                    <input className="sendButton" name="Submit" value="Send" type="submit" />
                </form>
                <div className="form-status">&nbsp;</div>
            </div>
</div>
    );
};