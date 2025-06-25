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

export async function getRequests() {
    try {
        const result = await pool.query('CALL get_requests(null)');
        return result.rows[0].requests || [];
    } catch (error) {
        console.error('Error fetching requests:', error);
        throw new GenricDatabaseError('Database error while fetching requests');
    }
}
