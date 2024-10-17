import { useState, useEffect } from "react";

import axios from 'axios'



export default function Cards() {
    const [postData, setPostData] = useState([])

    const getApiData = () => {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                console.log(res);
                setPostData([...res.data.products])
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const postApiData = () => {
        axios.post('https://dummyjson.com/posts/', {
            name: "saif",
            email: "abc@gmail.com",
            id: 4
        })
            .then((res) => {
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    const editData = () => {
        axios.put("https://dummyjson.com/posts/1", {
            body: "asda",
            age: 12
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const deleteData = () => {
        axios.delete("https://dummyjson.com/posts/1")

            .then(() => {
                console.log("delete");
            })
    }

    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            {/* <button onClick={getApiData}>getData</button> */}
            {/* <button onClick={postApiData}>postData</button>
            <button onClick={editData} className="p-10">editData</button>
            <button onClick={deleteData} className="p-10">delete</button> */}

            <div className="flex justify-center py-6 mb-5">
                <h1 className="text-gray-900 font-semibold text-3xl text-center">
                    <span className="text-violet-700">Cards</span> <span className="text-teal-600">Section</span>
                </h1>
            </div>


            <div className="container px-5 py-10 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
                    {postData.map((x, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            {/* Image Section */}
                            <div className="h-64 w-full rounded-lg overflow-hidden mb-4">
                                <img
                                    alt="content"
                                    className="object-cover w-full h-full"
                                    src={x.thumbnail}
                                />
                            </div>
                            {/* Price and Title */}
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                <span className="text-teal-600">{x.price}</span>
                            </h2>
                            <p className="text-gray-600 text-sm text-center mb-4">{x.title}</p>

                            {/* Add to Cart Button */}
                            <button className="w-60 bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}