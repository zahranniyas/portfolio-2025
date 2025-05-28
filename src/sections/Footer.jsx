const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col-reverse lg:flex-row justify-between flex-wrap items-center gap-5">
      {/* --- NEW: Google reCAPTCHA notice -------------------------------- */}
      <p className=" text-xs text-gray-400 text-center">
        This site is protected by reCAPTCHA and <br /> the Google&nbsp;
        <a
          href="https://policies.google.com/privacy"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        and&nbsp;
        <a
          href="https://policies.google.com/terms"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
      {/* --------------------------------------------------------------- */}

      {/* Center / Right: social icons */}
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/zahranniyas"
            className="flex items-center justify-center hover:opacity-60 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white-500">
        © 2025 Zaharan Niyas. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
