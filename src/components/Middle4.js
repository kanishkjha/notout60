import React from 'react';
import img from '../accessories/picture-4.webp';

export default function Middle4() {
    return (
        <div className='middle4'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>Insurance</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nemo, inventore, doloremque blanditiis, consectetur modi provident eum maiores illum fugiat perferendis quaerat error eaque nam!</p>
                <button>View Details <i class="fa-sharp fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
}
