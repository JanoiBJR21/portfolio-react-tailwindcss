import React from "react";

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c6d2e7d1-556c-4ad8-8c60-62532a524f65");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div className=" mt-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="">Your Name :</label>
        <input type="text" name="name" placeholder="Enter your name" className="text-xs bo rounded-md pl-2 py-2 bg-primarySubcontent"/>
        <label className="text-sm" htmlFor="">Your Email :</label>
        <input type="email" placeholder="Ente your email" name="email" className="text-xs rounded-md pl-2 py-2 bg-primarySubcontent" />
        <label className="text-sm" htmlFor="">Write your message here :</label>
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
