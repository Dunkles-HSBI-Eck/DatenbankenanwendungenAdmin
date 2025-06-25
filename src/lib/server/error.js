export class GenricDatabaseError extends Error {
	constructor(message = 'Database error') {
		super(message);
		this.name = 'GenricDatabaseError';
		this.status = 500;
	}
}
