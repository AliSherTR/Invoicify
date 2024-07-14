import AddInvoice from "@/components/AddInvoice";
import Invoice from "@/components/Invoice";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
    return (
        <>
            <div className="flex px-3 py-2 m-auto mt-10 justify-between max-w-3xl items-center">
                <div>
                    <h2 className="dark:text-white text-2xl font-semibold mb-5">
                        All Invoices
                    </h2>
                    <p className="dark:text-white text-[#888eb0] text-[0.75rem]">
                        There are total 7 invoices
                    </p>
                </div>
                <div className=" flex items-center gap-4">
                    <Select>
                        <SelectTrigger className="outline-none border-none w-[150px] focus:outline-purple-700 dark:text-white dark:bg-transparent bg-transparent">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className=" ">
                        <Sheet>
                            <SheetTrigger className=" me-2 px-2 gap-3 py-2 text-xs flex items-center bg-blue-500 rounded-[50px] text-white font-bold">
                                <span className="rounded-full bg-white flex items-center justify-center p-3">
                                    <svg
                                        width="11"
                                        height="11"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                                            fill="#7C5DFA"
                                            fillRule="nonzero"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="me-2">New Invoice</span>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[800px] dark:bg-[#141625]"
                            >
                                <SheetTitle>New Invoice</SheetTitle>
                                <AddInvoice />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            <div className=" mt-5 max-w-3xl m-auto">
                <Invoice status="pending" />
                <Invoice status="paid" />
                <Invoice status="draft" />
                <Invoice status="pending" />
                <Invoice status="paid" />
                <Invoice status="draft" />
                <Invoice status="pending" />
            </div>
        </>
    );
}
