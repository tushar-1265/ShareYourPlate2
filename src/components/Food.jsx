import React, { useEffect, useState } from "react";
import { Client, Databases, ID } from "appwrite";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";

const Food = () => {
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const client = new Client();
      const databases = new Databases(client);

      client
        .setEndpoint("https://nyc.cloud.appwrite.io/v1") // Your API Endpoint
        .setProject("6883343000073c03a92e"); // Your project ID

      const result = await databases.listDocuments(
        "688335ec0015e51e0180",
        "68833649002e463c4408"
      );

      setDetails(result.documents);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn]);

  function convertStringToDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);

    // Define month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract the date components
    const day = dateTime.getDate();
    const monthIndex = dateTime.getMonth();
    const year = dateTime.getFullYear();

    // Extract the time components
    let hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const amPm = hours >= 12 ? "pm" : "am";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Return the formatted date and time
    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${amPm}`;

    return { date: formattedDate, time: formattedTime };
  }

  return (
    <>
      <div className="wrapper py-32 px-32">
        <h1 className="text-7xl font-jost font-extrabold text-white">
          Available Donations
        </h1>
        <div className="cards py-20 md:py-28 font-jost">
          <div className="wrapper text-white font-jost flex flex-wrap">
            {details.length > 0 ? (
              details.map((item) => {
                const { name, $id, phoneNo, description, $updatedAt, address } =
                  item;
                const dateTime = convertStringToDateTime($updatedAt);
                const truncatedDescription =
                  description.length > 20
                    ? `${description.substring(0, 20)}...`
                    : description;
                return (
                  <div
                    key={$id}
                    className="semester bg-[rgba(255,255,255,0.2)] shadow-2xl shadow-black p-10 rounded-2xl mb-6 mx-2 lg:mx-5 flex flex-col justify-center"
                  >
                    <div className="updateDetails text-xs flex my-1 ">
                      <p className="font-bold">Updated At :&nbsp;</p>
                      <span className="font-extralight">
                        {dateTime.date} |&nbsp;
                      </span>
                      <span className="font-extralight">{dateTime.time}</span>
                    </div>
                    <div title={name} className="nameDetails flex w-full">
                      <p className="font-bold">Name :&nbsp;</p>
                      <p className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {name}
                      </p>
                    </div>
                    <div title={address} className="codeDetails flex">
                      <p className="font-bold">Address :&nbsp;</p>
                      <p className="">{address}</p>
                    </div>
                    <div
                      title={`PhoneNo ${phoneNo}`}
                      className="codeDetails flex"
                    >
                      <p className="font-bold">PhoneNo :&nbsp;</p>
                      <p className="">{phoneNo}</p>
                    </div>
                    <div
                      title={`Description : ${description}`}
                      className="codeDetails flex"
                    >
                      <p className="font-bold">Description :&nbsp;</p>
                      <p className="">
                        {truncatedDescription.length == 0
                          ? "Description not provided"
                          : truncatedDescription}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h1 className="text-5xl font-jost font-extrabold text-white">
                  No donations available!
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
