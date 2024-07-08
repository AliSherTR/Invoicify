import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import rightArrow from "../../invoice-app/public/icon-arrow-right.svg";
type ButtonVariant =
    | "link"
    | "pending"
    | "paid"
    | "draft"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";

interface InvoiceProps {
    status: ButtonVariant;
}

export default function Invoice({ status }: InvoiceProps) {
    return (
        <div className=" flex items-center justify-between py-7 rounded-[10px]  px-4 cursor-pointer hover:border-purple-800 transition-all ease-in-out box-border border border-transparent bg-white dark:bg-[#1e2139] dark:text-white mb-4 ">
            <p className="text-sm font-semibold">#RT3080</p>
            <p className="text-[#7e88c3] text-[0.685rem] dark:text-white">
                Due 19 Aug 2021
            </p>
            <p className="text-[#7e88c3] text-[0.685rem] dark:text-white">
                Jensen Huang
            </p>
            <p className="text-lg font-semibold">$1,800.90</p>
            <Button variant={status} className="flex items-center gap-2">
                {status === "pending" && (
                    <span
                        className="bg-orange-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                    ></span>
                )}

                {status === "paid" && (
                    <span
                        className="bg-green-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                    ></span>
                )}

                {status === "draft" && (
                    <span
                        className="bg-gray-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                    ></span>
                )}

                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
            <Image src={rightArrow} alt="&rarr;" />
        </div>
    );
}
