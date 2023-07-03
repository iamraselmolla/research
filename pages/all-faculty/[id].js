import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Page() {
    const [faculty, setFaculty] = useState(null);
    const [reload, setReload] = useState(false)
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        const getAllFaculty = async () => {
            try {
                setReload(true)
                const findFaculty = await axios.get(`/api/facultyDetails?id=${id}`);
                setFaculty(findFaculty.data)
                setReload(false)
            } catch (err) {
                setReload(false)
            }
        }
        getAllFaculty()
    }, []);
    if (reload) {
        return
    }
    console.log(faculty)
    return (
        <div>
            
            {!faculty ? "Loading" : <>
                <div className="container mx-auto px-4 py-8">
                    <div className=" rounded-lg shadow-md p-8">
                        {/* Faculty Name */}
                        <h1 className="text-2xl font-bold mb-4">{`${faculty.basicInfo.firstName} ${faculty.basicInfo.lastName}`}</h1>

                        {/* Profile Picture */}
                        <div className="flex justify-center mb-6">
                            <img src={faculty.profilePic} alt="Profile Picture" className="w-24 h-24 rounded-full" />
                        </div>

                        {/* Basic Information */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">Basic Information</h2>
                            <ul className="list-disc ml-6 mt-2">
                                <li>
                                    <span className="font-semibold">Username:</span> {faculty.username}
                                </li>
                                <li>
                                    <span className="font-semibold">Date of Birth:</span> {new Date(faculty.basicInfo.dob).toLocaleDateString()}
                                </li>
                                <li>
                                    <span className="font-semibold">Gender:</span> {faculty.basicInfo.gender}
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">Contact Information</h2>
                            <ul className="list-disc ml-6 mt-2">
                                <li>
                                    <span className="font-semibold">Email:</span> {faculty.contactInfo?.email}
                                </li>
                                <li>
                                    <span className="font-semibold">Mobile No 1:</span> {faculty.contactInfo?.mobileNo1}
                                </li>
                                <li>
                                    <span className="font-semibold">Mobile No 2:</span> {faculty.contactInfo?.mobileNo2}
                                </li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">Education</h2>
                            <ul className="list-disc ml-6 mt-2">
                                {faculty.education.map((edu, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">Title:</span> {edu.title}<br />
                                        <span className="font-semibold">Completion:</span> {edu.completion}<br />
                                        <span className="font-semibold">Institute:</span> {edu.institute}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Verification Status */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">Verification Status</h2>
                            <ul className="list-disc ml-6 mt-2">
                                <li>
                                    <span className="font-semibold">Image:</span> {faculty.verification?.img.status}<br />
                                    <span className="font-semibold">File:</span> {faculty.verification?.file.status}
                                </li>
                            </ul>
                        </div>

                        {/* Research */}
                        <div>
                            <h2 className="text-lg font-semibold">Research</h2>
                            <ul className="list-disc ml-6 mt-2">
                                {faculty.research?.map((res, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">File:</span> {res?.file.status}<br />
                                        <span className="font-semibold">Image:</span> {res?.img.status}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}