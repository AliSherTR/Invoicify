"use server";

import { connectDB } from "@/lib/db/connectDb";
import Invoice from "@/lib/models/invoice"; // Adjust the path as needed

export type State = {
    status: "success" | "error";
    message: string;
} | null;

export async function createInvoice(
    prevState: State | null,
    data: FormData
): Promise<State> {
    await connectDB();

    try {
        const formDataObject: { [key: string]: any } = {};
        Array.from(data.entries()).forEach(([key, value]) => {
            formDataObject[key] = value;
        });

        // Transform itemList from JSON string to an array
        if (formDataObject.itemsList) {
            formDataObject.itemsList = JSON.parse(formDataObject.itemsList);
        }

        // Create a new Invoice document using the Mongoose model
        const newInvoice = new Invoice({
            ownerStreeAddress: formDataObject.ownerStreetAddress,
            ownerPostCode: formDataObject.ownerPostCode,
            ownerCity: formDataObject.ownerCity,
            ownerCountry: formDataObject.ownerCountry,
            clientName: formDataObject.clientName,
            clientEmail: formDataObject.clientEmail,
            status: "pending", // Default status
            invoiceDate: new Date(formDataObject.invoiceDate),
            clientAddress: {
                street: formDataObject.clientStreetAddress,
                city: formDataObject.clientCity,
                postCode: formDataObject.clientPostCode,
                country: formDataObject.clientCountry,
            },
            paymentTerms: formDataObject.paymentTerms,
            items: formDataObject.itemsList.map((item: any) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.totalPrice,
            })),
            total: formDataObject.itemsList.reduce(
                (acc: number, item: any) => acc + item.totalPrice,
                0
            ),
        });

        // Save the invoice to the database
        await newInvoice.save();

        return { status: "success", message: "Invoice created successfully" };
    } catch (error) {
        console.error("Error creating invoice:", error);
        return { status: "error", message: "Failed to create invoice" };
    }
}
