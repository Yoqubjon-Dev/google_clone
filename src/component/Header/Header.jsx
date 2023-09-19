import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import gLogo from "../../assets/logo_google.png";
import Location from '../../assets/location.png'
import Play from '../../assets/play.png'
import calendar from '../../assets/calendar.png'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [closeModal]);

  return (
    <div className="header">
      <ul>
        <li>
          <p>
            <a href="https://mail.google.com/">Gmail</a>
          </p>
        </li>
        <li>
          <p>Image</p>
        </li>
        <li>
          <button onClick={openModal}>
            <svg className="gb_i" focusable="false" viewBox="0 0 24 24">
              <path
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                fill="white"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
      {isModalOpen && (
        <div className={`modal show`}>
          <div className="modal-content" ref={modalRef}>
            <div className="modal_haeader">
              <button className="close_modal" onClick={closeModal}>
                x
              </button>
            </div>

            <div className="modal_services">
              <ul>
                <li>
                  <a href="">
                    <div className="img_box">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt=""
                      />
                    </div>
                    <p>Account</p>
                  </a>
                </li>

                <li>
                  <a href="https://www.google.com/">
                    <div className="img_box">
                      <img src={gLogo} alt="" />
                    </div>
                    <p>Search</p>
                  </a>
                </li>

                <li>
                  <a href="https://www.google.com/maps?authuser=0">
                    <div className="img_box">
                      <img src={Location} alt="" />
                    </div>
                    <p>Maps</p>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/games?pli=1">
                    <div className="img_box">
                      <img src={Play} alt="" />
                    </div>
                    <p>Play</p>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/games?pli=1">
                    <div className="img_box">
                      <img src={calendar} alt="" />
                    </div>
                    <p>Calendar</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
