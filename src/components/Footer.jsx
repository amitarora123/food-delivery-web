import React from 'react';

function Footer() {
  const cities = [
    'San Francisco',
    'Miami',
    'San Diego',
    'East Bay',
    'Long Beach',
    'Los Angeles',
    'Washington DC',
    'Seattle',
    'Portland',
    'Nashville',
    'New York City',
    'Orange County',
    'Atlanta',
    'Charlotte',
    'Denver',
    'Chicago',
    'Phoenix',
    'Las Vegas',
    'Sacramento',
    'Oklahoma City',
    'Columbus',
    'New Mexico',
    'Albuquerque',
    'Sacramento',
    'New Orleans',
  ];

  const sections = [
    {
      category: 'COMPANY',
      items: ['About Us', 'Team', 'Careers', 'Blog'],
    },
    {
      category: 'CONTACT',
      items: ['Help & Support', 'Partner with us', 'Ride with us'],
    },
    {
      category: 'LEGAL',
      items: [
        'Terms & Conditions',
        'Refund & Cancellation',
        'Privacy Policy',
        'Cookie Policy',
      ],
    },
    {
      category: 'LEGAL',
      items: ['Terms & Conditions', 'Refund & Cancellation', 'Privacy Policy'],
    },
  ];

  return (
    <footer className="bg-[#212121] text-[#FFFEFE] py-20">
      <div className="container px-20 mx-auto">
        <span>
          <h3 className="text-sm font-bold">OUR TOP CITIES</h3>
          <ul className="my-3 text-[13px] mb-10 max-md:grid-rows-3 text-[#f5f5f5] grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-3 ">
            {cities.map((city, index) => (
              <li key={index} className="w-fit">
                {city}
              </li>
            ))}
          </ul>
        </span>
        <hr className="text-[#424242]" />

        <div className="grid grid-cols-2 mt-10 lg:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold">{section.category}</h3>
              <ul className="my-3 text-[13px] mb-10  text-[#f5f5f5]  ">
                {section.items.map((item) => (
                  <li key={item} className="mb-3 ">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      {item}
                    </a>{' '}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[#BDBDBD] font-bold mb-4">FOLLOW US</h3>
          <ul className="flex items-center gap-4">
            <li key="instagram">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src="/assets/social-media/instagram.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li key="facebook">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src="/assets/social-media/facebook.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
            <li key="twitter">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src="/assets/social-media/twitter.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="pb-10">
          <h2 className="text-2xl font-bold text-[#BDBDBD] pt-10 pb-5">
            Receive exclusive offers and
            <br />
            discounts in your mailbox
          </h2>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="flex gap-4 max-sm:flex-col">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="bg-[#616161] text-sm px-10 outline-none py-2 rounded"
                  />
                  <img
                    src="/assets/social-media/mail.svg"
                    alt="mail"
                    className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2"
                  />
                </div>
                <button className="px-6 py-2 text-xs font-bold text-white rounded bg-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="text-[#424242]" />
        <div className="flex items-center justify-between gap-4 my-5 text-xs max-sm:flex-col ">
          <p className="text-center text-white">
            All rights Reserved © Your Company, 2021
          </p>
          <p className="flex items-center justify-center gap-1 text-white">
            Made with
            <svg
              className="w-4 h-4 bi bi-suit-heart-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="#FFB30E"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
            </svg>
            by Amit
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
