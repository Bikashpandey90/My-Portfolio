"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  {/* <h1>All spaces begin with intention</h1> */}
                  <h1>Let's build what you imagine.</h1>
                </Copy>
              </div>
              <div className="contact-copy-year">
                <Copy delay={0.1}>
                  <h1>&copy;25</h1>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>General</p>
                    <p>bikashpandey835@gmail.com</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>New Commissions</p>
                    <p>bikash@ecanepal.com</p>
                    <p>+(977) 9866328872</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>My Address</p>
                    <p>Goldhunga - NH905 </p>
                    <p>Kathmandu,Nepal</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.3}>
                    <p>Social</p>
                    <p onClick={() => {
                      window.open("https://www.instagram.com/bika.sh3191/", "_blank")
                    }}>Instagram</p>
                    <p onClick={() => {
                      window.open("https://www.facebook.com/bikash.pandey.783639", "_blank")
                    }}>Facebook</p>
                    <p onClick={() => {
                      window.open("https://www.linkedin.com/in/bikashpandeey/", "_blank")
                    }}>LinkedIn</p>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Terrene studio workspace"
                />
              </div>
            </div>
          </div>
        </section >
      </div >
      <ConditionalFooter />
    </>
  );
};

export default page;
