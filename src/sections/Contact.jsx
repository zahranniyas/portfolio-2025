import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Toast from "../components/Toast";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({ type: "", msg: "" });

  const showToast = (type, msg) => setToast({ type, msg });
  const hideToast = () => setToast({ type: "", msg: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          to_name: "Zaharan Niyas",
          to_email: "zahranniyas@gmail.com",
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      showToast("success", "Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      showToast(
        "error",
        "Something went wrong. Please contact me via email or phone."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <Toast type={toast.type} message={toast.msg} onClose={hideToast} />
      <div
        className="relative min-h-screen flex items-center justify-center flex-col rounded-3xl overflow-hidden border border-[#494949] "
        style={{
          backgroundImage: "url(/assets/contact-bg-3.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="/assets/btn.png"
          alt="btn"
          className="absolute top-3 left-2 w-[105px] z-20"
        />
        <img
          src="/assets/mac-plus.png"
          alt="btn"
          className="absolute top-6 right-6 w-[25px] z-20"
        />
        <div className="absolute top-0 w-full h-[70px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-10" />
        <div className="contact-container">
          <h1 className="head-text">Contact Me</h1>
          <p className="text-lg text-white-600 mt-3">
            Whether you are looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help!
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your name..."
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your email address..."
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi Zaharan, I'm interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
