import { revalidatePath, revalidateTag } from "next/cache";

export function GET(){
    revalidatePath('/','page');
    return Response.json({message: 'Hello World!'});
}