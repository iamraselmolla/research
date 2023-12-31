import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import {
  CameraAltOutlined,
  Check,
  CloudDone,
  Delete,
  FileOpenOutlined,
  FileUploadTwoTone,
  ImageRounded,
  OpenInNew,
  UploadFile,
} from "@mui/icons-material";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import { toast } from "react-toastify";
import { CircularProgress, IconButton } from "@mui/material";
import { verificationFile, verificationImage } from "../services/userServices";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import VerificationCard from "../UI/VerificationCard";
import { userActions } from "../store/userSlice";
import { useRouter } from "next/router";

const Verification = () => {
  const { localid, role } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [FileUploading, setFileUploading] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFileUpload = async () => {
    if (role !== "admin") {
      router.push("/dashboard");
    }
    if (!file) {
      setFileUploading(false);
      toast.error("Please select a file");
      return;
    }
    setFileUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fileforverification");
    formData.append("cloud_name", "iamraselmolla");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/iamraselmolla/upload",
        formData
      );

      if (response.data.url) {
        const result = await verificationFile({
          verification: response.data.url,
        });

        if (result.status === 200) {
          toast.success("Verification File uploaded successfully");
          setFileUploading(false);
          dispatch(userActions.refreshDetails());
        }
      }
    } catch (error) {
      setFileUploading(false);
      console.error("Error during upload:", error);
      toast.error("An error occurred during file upload.");
    }
  };

  const handleImageUpload = async () => {
    if (!image) {
      setLoading(false);
      toast.error("Please select an Image");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    if (!image.type.startsWith("image/")) {
      setLoading(false);
      return toast.error("Please select valid type of image");
    }
    try {
      formData.append("file", image);
      formData.append("upload_preset", "research");
      formData.append("cloud_name", "iamraselmolla");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/iamraselmolla/image/upload",
        formData
      );
      if (response.data.url) {
        const result = await verificationImage({
          verification: response.data.url,
        });
        if (result.status === 200) {
          toast.success("Verification Image added successfully");
          setLoading(false);
          dispatch(userActions.refreshDetails());
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during upload:", error);
      toast.error("An error occurred during file upload.");
    }
  };
  const onSelectImage = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    e.preventDefault();
    // console.log(e.target.files[0])
    setImage(e.target.files[0]);
  };
  const handleFileSelection = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(null);
      return;
    }

    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  useEffect(() => {
    if (!image) {
      setImagePreview(undefined);
      return;
    }

    let selectedImage = URL.createObjectURL(image);
    setImagePreview(selectedImage);
  }, [image]);
  return (
    <>
      <Dashboard>
        {/* <div>
          <h4 className='text-xl'>Previous Upload</h4>
          <Image width={600} height={400} className='w-full' src={user?.verification?.img} />
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 ">
            <div
              className={`rounded-md border-2 h-full min-h-[15rem] ${
                !image ? "border-dotted" : ""
              }  overflow-hidden`}
              style={{
                background: `url(${imagePreview}) no-repeat center center/cover`,
              }}
            >
              {/* <div className='bg-black h-full w-full relative z-0' /> */}
              <label
                className={`cursor-pointer w-full relative z-10 h-full flex gap-5 justify-center items-center ${
                  image
                    ? "bg-black bg-opacity-25 text-white"
                    : "bg-blue-200 text-black"
                }`}
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={onSelectImage}
                />
                <CameraAltOutlined className="text-primary" fontSize="large" />
                <div>{image ? "Upload Another" : "Upload Image"}</div>
              </label>
            </div>
            {image && (
              <div className="flex bg-green-500 items-center pl-1 justify-between">
                <div className="flex gap-2">
                  <div className="h-6 w-6 flex flex-col items-center justify-center bg-white rounded-full">
                    <Check sx={{ color: "green" }} />
                  </div>
                  {image.name}
                </div>
                <IconButton
                  onClick={() => {
                    setImage("");
                    setImagePreview("");
                  }}
                >
                  <Delete />
                </IconButton>
              </div>
            )}

            <button
              disabled={loading}
              onClick={handleImageUpload}
              type="button"
              className="w-full bg-primary text-white px-2 py-2 self-end mt-2 disabled:bg-gray-500"
            >
              {!loading ? (
                "SAVE"
              ) : (
                <CircularProgress size={16} sx={{ color: "white" }} />
              )}
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-md border-2 border-dotted min-h-[15rem] bg-blue-200">
              <label className="cursor-pointer w-full h-full flex gap-5 justify-center items-center">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileSelection}
                />

                <UploadFile className="text-primary" fontSize="large" />
                <div className="text-black">
                  {file ? "Upload Another" : "Upload File"}
                </div>
              </label>
            </div>

            {file && (
              <div className="flex bg-green-500 items-center pl-1 justify-between">
                <div className="flex gap-2">
                  <div className="h-6 w-6 flex flex-col items-center justify-center bg-white rounded-full">
                    <Check sx={{ color: "green" }} />
                  </div>
                  {file.name}
                </div>
                <IconButton
                  onClick={() => {
                    setFile(null);
                  }}
                >
                  <Delete />
                </IconButton>
              </div>
            )}

            <button
              disabled={FileUploading}
              onClick={handleFileUpload}
              type="button"
              className="bg-primary text-white w-full px-2 py-2 self-end mt-2 disabled:bg-gray-500"
            >
              {!FileUploading ? (
                "SAVE"
              ) : (
                <CircularProgress size={16} sx={{ color: "white" }} />
              )}
            </button>
          </div>
        </div>
        {(user?.verification?.img || user?.verification?.file) && (
          <VerificationCard></VerificationCard>
        )}
      </Dashboard>
    </>
  );
};

export default Verification;
