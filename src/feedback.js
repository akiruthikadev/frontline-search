import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Thank You");
    emailjs
      .send(
        "service_j3mvkpf",
        "template_boyde2a",
        formData,
        "qcEO-g2NSzAOz6-8p"
      )
      .then(() => {
        alert("Thank You");
      })
      .catch((error) => {
        alert("Failed to send. Try again!");
        console.error(error);
      });
    setFormData({
      name: "",
      email: "",
      subject: "",
      comment: "",
    });
  };
  return (
    <div>
      <h6>Lets get in touch and talk about your next project.</h6>
      <form className=" ms-3" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            className=" w-25 mt-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className=" w-25 mt-2"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className=" w-25 mt-2"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Comment"
            className=" w-25 mt-2"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className=" mt-2 btn btn-dark text-white rounded-0"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
