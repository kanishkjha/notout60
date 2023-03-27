import React from 'react';
import logo from '../accessories/suit-and-tie.jpg';

export default function Links() {
    return (
        <div className='links'>
            <div className="notout-logo">
                <img src={logo} alt="logo" />
                <h2>NotOut60</h2>
            </div>
            <div>
                <i class="fa-solid fa-people-roof"></i>
                <span>Engagement search and interest</span>
            </div>
            <div>
                <i class="fa-regular fa-piggy-bank"></i>
                <span>Investments</span>
            </div>
            <div>
                <i class="fa-thin fa-file-invoice"></i>
                <span>Insurance</span>
            </div>
            <div>
                <i class="fa-thin fa-file-invoice"></i>
                <span>Succession Planing</span>
            </div>
            <div>
                <i class="fa-sharp fa-solid fa-blog"></i>
                <span>Blog</span>
            </div>
            <div>
                <i class="fa-duotone fa-star"></i>
                <span>Others</span>
            </div>

        </div>
    )
}
