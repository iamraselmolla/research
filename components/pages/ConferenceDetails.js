import { useRouter } from 'next/router';
import React from 'react';

const ConferenceDetails = () => {
    const router = useRouter();
    const id = router.query?.id;
    
    return (
        <div>
            
        </div>
    );
};

export default ConferenceDetails;