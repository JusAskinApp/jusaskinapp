
import makeApiCall from '../Api/api';
import React, { useState, useEffect } from "react";
import myIcon from "../assets/logo.png";

const SubscriberDetail = () => {
    const [allData, setAlldata] = useState([]);
    const [page, setPage] = useState(0);
    const pageSize = 10;
    const pages = Math.ceil(allData.length / pageSize);
    const Subscribers = allData.slice(
        page * pageSize,
        (page + 1) * pageSize
    );
    useEffect(() => {
        const a = loadData();

    }, []);
    const dateGetter = (date) => {
        debugger;
        if (date) {
            return new Date(
                date._seconds * 1000 + date._nanoseconds / 1000000
            ).toString("dd-mmm-yyyy");
        } else {
            return "0";
        }
    };
    const loadData = async () => {
        debugger;
        // const data = await getDocs(collection(db, "subscribeusers"));
        // setAlldata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // return allData;
        try {
            const data = await makeApiCall('http://localhost:4000/api/admin/subscribeusers', {
                method: "GET",
            });
            setAlldata(data)
            debugger;
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <img
                    style={{ width: " 150px", height: "30px" }}
                    src={myIcon}
                    alt=""
                />

            </div>
            <h1><b>Subscriber Details</b></h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th class="px-6 py-3">Email</th>
                            <th class="px-6 py-3">Interest</th>
                            <th class="px-6 py-3">Date</th>


                        </tr>
                    </thead>
                    <tbody class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        {Subscribers.map((item) => (
                            <tr>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.email}</td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.interest}</td>
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.date ? dateGetter(item.date) : ''}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                {page > 0 && <button onClick={() => setPage(page - 1)}>Prev</button>}
                {page < pages - 1 && (
                    <button onClick={() => setPage(page + 1)}>Next</button>
                )}
            </div>
        </>
    );
};

export default SubscriberDetail;
