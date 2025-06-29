import { Pool } from 'pg';
import { env } from '$env/dynamic/private';
import { GenricDatabaseError } from '$lib/server/error.js';

const pool = new Pool({
    user: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    host: env.POSTGRES_IP,
    port: env.POSTGRES_PORT,
    database: env.DATABASE_NAME
});

export async function getMovieById(movie_id) {
	try {
		const result = await pool.query('CALL get_movie($1, null)', [movie_id]);
		if (result.rows.length === 0) {
			return null; // No movie found
		}
		return result.rows[0].movie_info;
	} catch (error) {
		console.error('Error fetching movie by ID:', error);
		throw new GenricDatabaseError('Database error while fetching movie by ID');
	}
}

export async function getMovies(limit, offset) {
    try {
        const result = await pool.query(
            'CALL get_movies($1, $2, null, null)',
            [limit, offset]
        );

        return {
            movies: result.rows[0].movies,
            has_more: result.rows[0].has_more
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw new GenricDatabaseError('Database error while fetching movies');
    }
}

export async function getRequests() {
    try {
        const result = await pool.query('CALL get_requests(null)');
        return result.rows[0].requests || [];
    } catch (error) {
        console.error('Error fetching requests:', error);
        throw new GenricDatabaseError('Database error while fetching requests');
    }
}

export async function getPriceTiers() {
    try {
        const result = await pool.query('CALL get_price_tiers(null)');
        return result.rows[0].price_tiers || [];
    } catch (error) {
        console.error('Error fetching PriceTiers:', error);
        throw new GenricDatabaseError('Database error while fetching PriceTiers');
    }
}

export async function updateRequest(id, status) {
    console.log("db.js funct", id, status);
    try {
        const result = await pool.query(
            'CALL update_request_status($1, $2)',
            [id, status]
        );
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error updating requests:', error);
        throw new GenricDatabaseError('Database error while updating requests');
    }
}
