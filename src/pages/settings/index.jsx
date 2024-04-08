import React, { useState } from 'react';
import Popup from '@/Components/Dashboard/Body Section/Listing Section/CommentPopup';

const SettingsPage = () => {
    const [commentPopup, setCommentPopup] = useState(false);

    return (
        <div>
            <h1>Test Popup</h1>
            <button onClick={() => setCommentPopup(true)}>Open</button>
            <Popup trigger={commentPopup} setTrigger={setCommentPopup}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perferendis quasi ullam reiciendis a et quaerat. Odit eius magni perferendis. Quae adipisci ipsa neque officiis libero perferendis eum minus sit.</p>
            </Popup>
        </div>
    );
}

export default SettingsPage;