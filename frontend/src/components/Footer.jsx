import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img
            onClick={() => navigate("/")}
            className="w-40 h-10 cursor-pointer object-fit: contain"
            src={assets.mediconnect}
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            MediConnect is your trusted online healthcare companion — connecting
            patients with top-rated doctors, clinics, and health services across
            specialties. Whether you're looking to book an appointment, explore
            health information, or manage your wellness journey, MediConnect
            makes access to quality care simple, fast, and reliable.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => navigate("/about")} className="cursor-pointer">
              About us
            </li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>Ayurveda@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Ayurveda.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
