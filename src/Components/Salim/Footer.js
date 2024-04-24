import React from 'react';
 import fbicon from '@/Components/Salim/imj.jpg/fbicon.jpg';
 import insta from '@/Components/Salim/imj.jpg/insta.jpg';
 import linkdin from '@/Components/Salim/imj.jpg/linkdin.png';
 import ButonversHaut from '@/Components/Salim/ButonversHaut';

 

export default function (props){
    return(
        <div className='footer'>
            <ul className='horizontal-list'>
                <li><a herf={props.fblink}><img className='fbimj' src={fbicon}/></a></li>
                <li><a herf={props.instalink}><img className='instaimj' src={insta}/></a></li>
                <li><a herf={props.likdinlink}><img className='linkdimj' src={linkdin}/></a></li>
            </ul>
          <div className='block-du-button-vers-haut'> <ButonversHaut /> </div>
        </div>
    );

}