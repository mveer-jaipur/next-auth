import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../lib/auth";

export default async function user () {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return (<div>{JSON.stringify(session)}</div>)
}