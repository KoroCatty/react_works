import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export const Contacts = () => {
  // hook
  const [successMessage, setSuccessMessage] = useState("");

  // const[inputContnet], [setInputContnet] = useState("");
  // Form Validation
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset(); //
  };

  // These codes are from the emailjs website
  const form = useRef();

  const serviceID = "serviceID"; //my ID from the website
  const templateID = "templateID"; //my ID from the website
  const userID = "user_wA38mxRtUjkOAGwKXSbbn"; //my ID from the website

  const sendEmail = (e) => {
    // const sendEmail = (serviceID, templateID, form.current, user_wA38mxRtUjkOAGwKXSbbn) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "serviceID",
        "templateID",
        form.current,
        "user_wA38mxRtUjkOAGwKXSbbn"
      )
      // emailjs.send('serviceID', 'templateID', form.current, 'user_wA38mxRtUjkOAGwKXSbbn')
      .then(
        (result) => {
          // .then(() => {
          console.log(result.text);
          {
            /*send successful message */
          }
          setSuccessMessage("Form sent successfully! I'll contact you ASAP");
        },
        (error) => {
          console.log(error.text);
          //
        }
      )
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  //button内と連動。ここで定義しておく。
  const [value, setValue] = useState("");

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible.
        </p>
        {/* To show the successful message */}
        <span className="success-message">{successMessage}</span>
      </div>

      {!successMessage && ( // this checks if the success message has been set, if it has, that means the form is submitted, so dont render the form anymore
        <div className="container .contactForms">
          <form ref={form} onSubmit={sendEmail}>
            {/* <form ref={form} onSubmit={handleSubmit(onSubmit)}> */}
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* NAME INPUT */}
                <div className="text-center">
                  {" "}
                  {/* これによりinputにhover時真ん中から黄色の線が流れるようになる */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    register={register}
                    required
                    // 送信時に空にするためvalueを入れる
                    // value={successMessage}
                    // onChange={e => setValue(e.target.value)}

                    // ref={
                    //   register({
                    //     required: "Please enter your name",
                    //     maxLength: {
                    //       value: 20,
                    //       message: "Please enter a name with fewer than 20 characters"
                    //     }
                    //   })
                    // }
                  />
                  <div className="line"></div>
                </div>
                {/* <span className="error-message"></span>
                {errors.name && errors.name.message } */}

                {/* PHONE INPUT */}
                <div className="text-center">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number (optional)"
                    name="phone"
                  />
                  <div className="line"></div>
                </div>
                {/* EMAIL INPUT */}
                <div className="text-center">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    register={register}
                    required
                  />
                  <div className="line"></div>
                </div>
                {/* SUBJECT INPUT */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject (optional)"
                    name="subject"
                  />
                  <div className="line"></div>
                </div>
              </div>

              <div className="col-md-6 col-xs-12">
                {/* DESCRIPTION */}
                <div className="text-center">
                  <textarea
                    // id="description"
                    type="text"
                    className="form-control"
                    placeholder="Please tell me your thought"
                    name="description"
                  ></textarea>
                  <div className="line"></div>
                </div>
                <button
                  className="btn-main-offer contact-btn"
                  type="submit"
                  // ボタンが押されたらinput内を空にする
                  // onClick={value}
                  // onClick={() => setValue('')}
                >
                  contact me
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// export default contacts
