import React from "react";

const ContactForm = () => {
  return (
    <div className=" mt-4">
      <form className="flex flex-col gap-2">
        <label className="text-sm">Your Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="text-xs bo rounded-md pl-2 py-2 bg-primarySubcontent"
        />
        <label className="text-sm">Your Email :</label>
        <input
          type="email"
          placeholder="Ente your email"
          name="email"
          className="text-xs rounded-md pl-2 py-2 bg-primarySubcontent"
        ></input>
        <label className="text-sm">Write your message here :</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Enter your message"
          className="text-xs rounded-md pl-2 bg-primarySubcontent"
        ></textarea>
        <button
          type="submit"
          class="contact-submit"
          className="bg-primaryTitle rounded-md py-2 "
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
