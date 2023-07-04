import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router"
import Spinner from "../../components/UI/Spinner"
import { useEffect, useState } from "react";
import ResponsiveDrawer from "../../components/UI/ResponsiveDrawer";
import { Cake, ConnectWithoutContact, Email, InfoOutlined, People, Phone, School } from "@mui/icons-material";

export default function Page() {
    const [faculty, setFaculty] = useState(null);
    const [reload, setReload] = useState(false)
    const router = useRouter();
    const id = router.query.id;
    console.log(id)
    useEffect(() => {
        const getAllFaculty = async () => {
            try {
             
                setReload(true)
                const findFaculty = await axios.get(`/api/facultyDetails?id=${id}`);
                setFaculty(findFaculty?.data)
                console.log(faculty)
                setReload(false)
               
            } catch (err) {
                setReload(false)
            }
        }
        getAllFaculty()
    }, [id]);
    
    return (
        <div>
            <Head>

                <title>Research - {faculty?.username}</title>
                <meta charSet="utf-8" />
                <link rel="icon" href='https://res.cloudinary.com/da75fckow/image/upload/v1684919760/sikka-warehouse/logo_e3zr7m.png' />
                <meta property="og:locale" content="en_US" />
                <meta name="description" content="research_description" />
                <meta property="og:title" content="Research - Login" />
                <meta name="keywords" content="research_keywords" />

                <meta property="og:url" content="reseasrch_url" />
                {/* <meta name="author" content="Your name here" /> */}
                <meta property="og:image" itemProp='https://res.cloudinary.com/da75fckow/image/upload/v1684919760/sikka-warehouse/logo_e3zr7m.png' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
                <link rel="canonical" href="https://3plwarehouseservicez.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="research_description" />
                <meta property="og:site_name" content="Research" />
            </Head>

            <ResponsiveDrawer />

            {!faculty ? <>
                <div className="flex items-center justify-center h-screen">
                <Spinner size={60} />
                </div>
            </> : <>
            <h1 className="bg-white text-black text-center font-extrabold text-4xl py-20">{`${faculty.basicInfo.firstName} ${faculty.basicInfo.lastName}`}</h1>
                <div className="container mx-auto px-4 py-8">
                    <h1 title={`${faculty.basicInfo.firstName} ${faculty.basicInfo.lastName}`} className="font-bold text-4xl text-center mb-5">
                        Faculty Personal Details
                    </h1>
                    <div className=" rounded-lg text-center shadow-md p-8">

                        <div className="flex justify-between gap-2">
                            <div className="w-30">
                                <div className="border-4 text-center p-4"><InfoOutlined style={{ fontSize: "60px" }}></InfoOutlined></div>
                                <table className="min-w-full mt-5 border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="p-2 border">Date of Birth</th>
                                            <th className="p-2 border">Gender</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 border">{new Date(faculty.basicInfo.dob).toLocaleDateString() || "Not provided"}</td>
                                            <td className="p-2 border">{faculty.basicInfo.gender || "Not Provided"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-30">
                                <div className="border-4 text-center p-4">
                                    <ConnectWithoutContact title="Contact Info" style={{ fontSize: "60px" }}></ConnectWithoutContact>
                                </div>
                              
                                <table className="min-w-full mt-5 border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="p-2 border">Email</th>
                                            <th className="p-2 border">Mobile 1</th>
                                            <th className="p-2 border">Mobile 2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 border">{faculty.contactInfo?.email|| "Not Provided"}</td>
                                            <td className="p-2 border"> {faculty.contactInfo?.mobileNo1|| "Not Provided"}</td>
                                            <td className="p-2 border"> {faculty.contactInfo?.mobileNo2|| "Not Provided"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-30">
                                <div className="border-4 text-center p-4">
                                    <School style={{ fontSize: "60px" }}></School>
                                </div>
                                <table className="min-w-full mt-5 border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="p-2 border">Title</th>
                                            <th className="p-2 border">Completion Date</th>
                                            <th className="p-2 border">Institute</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {faculty.education.map((edu, index) => (
                                            <tr>
                                                <td className="p-2 border">{edu.title|| "Not Provided"}</td>
                                                <td className="p-2 border">{new Date(edu.completion).toLocaleDateString()|| "Not Provided"}</td>
                                                <td className="p-2 border">{edu.institute|| "Not Provided"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        {/* <div>
                            <h2 className="text-lg font-semibold">Research</h2>
                            <ul className="list-disc ml-6 mt-2">
                                {faculty.research?.map((res, index) => (
                                    <li key={index}>
                                        <span className="font-semibold">File:</span> {res?.file.status}<br />
                                        <span className="font-semibold">Image:</span> {res?.img.status}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </>
            }
        </div>
    )
}