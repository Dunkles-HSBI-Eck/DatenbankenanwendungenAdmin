import { updateRequest } from '$lib/server/database.js';
import { json } from '@sveltejs/kit';

export async function POST( {request} ) {

    let { id, status } = await request.json();
	const result = await updateRequest(id, status);
    console.log("done someting");
    if (!result) {
		return new Response('Error when updating result', { status: 404 });
	}
    console.log("passed");
    
	return json({
		status: result.success,
		message: result.message
	});
}
