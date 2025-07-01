import { getLicensesByMovieId, insertLicenseForMovie, deleteLicenseForMovie } from '$lib/server/database';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
        return json({ error: 'Invalid movie ID' }, { status: 400 });
    }

    const response = await getLicensesByMovieId(id);

    if (!response) {
        return json({ error: 'Movie not found' }, { status: 404 });
    }

    return json(
        response.map(license => ({
            price: license.price,
            expiration: license.expiration,
            count: license.license_count,
        }))
    )
}

export async function POST({ params, request }) {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
        return json({ error: 'Invalid movie ID' }, { status: 400 });
    }

    const { price, expiration, count } = await request.json();

    if (typeof price !== 'number' || price <= 0) {
        return json({ error: 'Invalid price' }, { status: 400 });
    }

    if (expiration && isNaN(Date.parse(expiration))) {
        return json({ error: 'Invalid expiration date' }, { status: 400 });
    }

    if (typeof count !== 'number' || count <= 0) {
        return json({ error: 'Invalid license count' }, { status: 400 });
    }

    await insertLicenseForMovie(id, count, price, expiration);

    return json();
}

export async function DELETE({ params, request }) {
    const { id } = params;

    if (!id || isNaN(parseInt(id))) {
        return json({ error: 'Invalid movie ID' }, { status: 400 });
    }

    const { price, expiration } = await request.json();

    if (typeof price !== 'number' || price <= 0) {
        return json({ error: 'Invalid price' }, { status: 400 });
    }

    if (expiration && isNaN(Date.parse(expiration))) {
        return json({ error: 'Invalid expiration date' }, { status: 400 });
    }

    await deleteLicenseForMovie(id, price, expiration);

    return json();
}
