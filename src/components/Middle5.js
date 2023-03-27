import React from 'react';
import img from '../accessories/picture-5.jpg';

export default function Middle5() {
    return (
        <div className='middle5'>
            <div>
                <h2>Success and planning</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nemo, inventore, doloremque blanditiis, consectetur modi provident eum maiores illum fugiat perferendis quaerat error eaque nam!</p>
                <button>View Details <i class="fa-sharp fa-solid fa-chevron-right"></i></button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
