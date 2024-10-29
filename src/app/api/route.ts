import { revalidatePath } from "next/cache";

export function GET(){
    revalidatePath('/')
    return Response.json({message: 'Hello World!'});
}