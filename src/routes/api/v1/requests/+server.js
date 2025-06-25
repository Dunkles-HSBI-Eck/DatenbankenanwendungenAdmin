import { getRequests } from "$lib/server/database.js";
import { json, error } from "@sveltejs/kit";

export async function GET() {
    try {
        const requests = await getRequests();
        return json(requests.map(request => ({
            id: request.request_id,
            user_id: request.membership_id,
            movie_id: request.movie_id,
            status: request.status,
            requested_at: request.request_date,
            message: request.message || "",
        })));
    } catch {
        return error(500, "Internal Server Error");
    }
}