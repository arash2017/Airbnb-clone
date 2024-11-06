
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Visit our company at the location shown below:</p>
      {/* Embedded Google Map */}
      <div className="map">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0784595184674!2d-122.41941548468188!3d37.77492977975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808aa2f3d2e9%3A0x5b7f3e98403e2b8f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1625140731923!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
