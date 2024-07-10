"use server";
export async function createInvoice(data: FormData) {
    console.log(data.get("city"));
    console.log("Server Component");
}
