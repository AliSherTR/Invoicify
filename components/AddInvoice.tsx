import React from "react";
import { Button } from "./ui/button";
import { createInvoice } from "@/app/actions";

export default function AddInvoice() {
    return (
        <form className="" action={createInvoice}>
            <p className=" text-[#7c5dfa] text-sm font-bold mb-3 mt-5">
                Bill from
            </p>

            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Street Address
                </label>
                <input
                    type="text"
                    id="street-address"
                    name="streetAdress"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    required
                />
            </div>

            <div className=" flex justify-between items-center gap-3 mb-5">
                <div>
                    <label
                        htmlFor="city"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="post-code"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Post Code
                    </label>
                    <input
                        type="text"
                        id="post-code"
                        name="postCode"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="country"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        required
                    />
                </div>
            </div>

            <p className=" text-[#7c5dfa] text-sm font-bold mb-3 mt-5">
                Bill To
            </p>

            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    {`Client's`} Name
                </label>
                <input
                    type="text"
                    id="street-address"
                    name="clientName"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    required
                />
            </div>
            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    {`Client's`} Email
                </label>
                <input
                    type="email"
                    id="street-address"
                    name="clientEmail"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    required
                />
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Street Address
                </label>
                <input
                    type="text"
                    id="street-address"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
            </div>

            <div className=" flex justify-between items-center gap-3 mb-5">
                <div>
                    <label
                        htmlFor="city"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="clientCity"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="post-code"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Post Code
                    </label>
                    <input
                        type="text"
                        id="post-code"
                        name="clientPostCode"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="country"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                </div>
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Invoice Date
                </label>
                <input
                    type="text"
                    id="street-address"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Payment Terms
                </label>
                <input
                    type="text"
                    id="street-address"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="street-address"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Project Description
                </label>
                <input
                    type="text"
                    id="street-address"
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
            </div>

            {/* ITEMS LIST */}
            <p className=" text-[#777f98] text-lg font-bold mb-3 mt-5">
                Items List
            </p>

            <div className=" flex justify-between items-center gap-3 mb-5">
                <div>
                    <label
                        htmlFor="city"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Item Name:
                    </label>
                    <input
                        type="text"
                        id="city"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                </div>

                <div>
                    <label
                        htmlFor="post-code"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Quantity:
                    </label>
                    <input
                        type="text"
                        id="post-code"
                        className=" w-full py-3 px-2 border border-gray-300  dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                </div>

                <div>
                    <label
                        htmlFor="country"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        id="country"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                </div>

                <div>
                    <label
                        htmlFor="country"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Total
                    </label>
                    <input
                        type="text"
                        id="country"
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        disabled
                    />
                </div>
                <div>
                    <label
                        htmlFor="country"
                        className="text-[#7e88c3] text-xs block mb-3 opacity-0"
                    >
                        1234
                    </label>

                    <button>
                        <svg
                            width="13"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" hover:fill-red-600 ms-2 transition-all duration-150 ease-in-out dark:fill-white dark:hover:fill-red-600"
                        >
                            <path
                                d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                                fillRule="nonzero"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <Button
                variant="outline"
                className=" text-center w-full flex items-center text-[#7e88c3] font-extrabold text-sm"
            >
                {" "}
                <span className="me-3">+</span> Add New Item
            </Button>

            <div className=" flex justify-between items-center w-full mt-5 mb-5">
                <Button
                    variant="outline"
                    className=" text-center  text-[#7e88c3]  text-sm"
                >
                    {" "}
                    Discard
                </Button>
                <div>
                    <Button
                        variant="outline"
                        className=" text-center rounded-[20px] py-4 me-3  text-sm"
                    >
                        Save as Draft
                    </Button>
                    <Button className=" text-center rounded-[20px] py-4  text-sm">
                        Save & Send
                    </Button>
                </div>
            </div>
        </form>
    );
}
