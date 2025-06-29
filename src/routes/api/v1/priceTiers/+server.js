import { getPriceTiers } from "$lib/server/database.js";
import { json, error } from "@sveltejs/kit";

export async function GET() {
    try {
        const requests = await getPriceTiers();
        return json(requests.map(request => ({
            id: request.price_tier_id,
            price: request.price
        })));
    } catch {
        return error(500, "Internal Server Error");
    }
}