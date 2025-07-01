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

export async function getMovies(limit, offset, search = '', order_by = 'id', order = 'asc', genres = []) {
    try {
        const result = await pool.query('CALL get_movies($1, $2, $3, $4, $5, $6, null, null)', [limit, offset, search, order_by, order, genres]);

        return {
            movies: result.rows[0].movies,
            has_more: result.rows[0].has_more
        };
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

export async function getLicensesByMovieId(movie_id) {
    try {
        const result = await pool.query('CALL get_licenses_by_movie_id($1, null)', [movie_id]);
        return result.rows[0].licenses || [];
    } catch (error) {
        console.error('Error fetching licenses by movie ID:', error);
        throw new GenricDatabaseError('Database error while fetching licenses by movie ID');
    }
}

export async function insertLicenseForMovie(movie_id, count, price, expiration) {
    try {
        const result = await pool.query(
            'CALL insert_license_for_movie($1, $2, $3, $4)',
            [movie_id, count, price, expiration]
        );
        return result;
    } catch (error) {
        console.error('Error inserting license for movie:', error);
        throw new GenricDatabaseError('Database error while inserting license for movie');
    }
}

export async function deleteLicenseForMovie(movie_id, price, expiration) {
    try {
        const result = await pool.query(
            'CALL delete_license_for_movie($1, $2, $3)',
            [movie_id, price, expiration]
        );
        return result;
    } catch (error) {
        console.error('Error deleting license for movie:', error);
        throw new GenricDatabaseError('Database error while deleting license for movie');
    }
}