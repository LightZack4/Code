// Dashboard.jsx
import Link from 'next/link';
import React from 'react'; // Import React if not imported

const DashboardComp = () => {
    return ( 
        <div>
            This is Dashboard Page
            <Link href="/">Log Out</Link>
        </div>
     );
}

export default DashboardComp;
