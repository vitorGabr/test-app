import { revalidatePath, revalidateTag } from "next/cache";

export function GET(){
    revalidateTag('hello-world');
    return Response.json({message: 'Hello World!'});
}