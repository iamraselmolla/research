import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleConferenceById } from '../services/userServices';

const ConferenceDetails = () => {
    const [sigleConference, setSingleConference] = useState(null)
    const router = useRouter();
    const id = router.query?.id;
    useEffect(() => {
        if (id) {
            const getConferenceDetails = async () => {
                const findConferenceDetails = await getSingleConferenceById({id})
                if(findConferenceDetails.status === 200){
                    setSingleConference(findConferenceDetails?.data)
                }
            }
            getConferenceDetails();
        }
    }, [id]);

    console.log(sigleConference)
    return (
        <div>

        </div>
    );
};

export default ConferenceDetails;