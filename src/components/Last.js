import React from "react";
import "../styles/Last.css";
import img from "../accessories/suit-and-tie.jpg";

export default function Last() {
  return (
    <div className="last">
      <div className="flex-container">
        <div>
          <div className="logo">
            <img src={img} alt="" />
            <h3>NotOut60</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
            facere aut hic, quisquam, nisi consequatur officia atque enim
            aliquam nam dolores eum dolor voluptas nostrum earum molestiae saepe
            odio non!
          </p>
          <p>
            <i class="fa-solid fa-mobile"></i> +91-8860493500
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i> info@notout60.com
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Engagement Search</li>
            <li>Investments</li>
            <li>Insurance</li>
            <li>Succession Planning</li>
            <li>Others</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div>
          <h4>Employers</h4>
          <ul>
            <li>Browse Engagement</li>
            <li>Post an Engagement</li>
            <li>Employers Login</li>
          </ul>
        </div>
        <div>
          <h4>Useful Links</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Refund and Cancellation Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
