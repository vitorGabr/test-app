import { revalidatePath } from "next/cache";

export default function GET(){
    revalidatePath('/')
    return Response.json({message: 'Hello World!'});
}