import React from "react";

export default function GoogleMap() {
  return (
    <>
      <div className="contact__map">
        <iframe
          title="map"
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4956336954656!2d90.36980847512216!3d23.836527785464774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1cb3b7d94db%3A0xa1df58d67a2ce274!2sUi%20Barn!5e0!3m2!1sen!2sbd!4v1692610804504!5m2!1sen!2sbd"
          width="600"
          height="785"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
