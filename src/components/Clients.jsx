import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h1 className="head-text">Client Testimonials</h1>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={item.id} className="client-review">
            <div>
              <p className="text-white-700 font-light italic">
                &quot;{item.review}&quot;
              </p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm">
                      {item.position}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-2 h-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
