"use server";

export type State = {
    status: "success";
    message: string;
} | null;
export async function createInvoice(
    prevState: State | null,
    data: FormData
): Promise<State> {
    console.log("Server Component");
    const formDataObject: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(Object.fromEntries(data))) {
        formDataObject[key] = value.toString();
    }

    // Log all key-value pairs in the formDataObject
    for (const [key, value] of Object.entries(formDataObject)) {
        console.log(`${key}: ${value}`);
    }

    return { status: "success", message: "Invoice created successfully" };
}
