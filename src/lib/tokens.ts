import { decode, type JwtPayload } from 'jsonwebtoken';

export const isValidToken = (token: string | undefined): JwtPayload | false => {
	if (!token) return false;

	const payload = decode(token, { json: true });
	if (!payload) return false;

	const now = Date.now();

	if (
		!payload.exp ||
		!payload.iss ||
		!payload.sub ||
		!payload.jti ||
		!payload.iat
	)
		return false;

	if (payload.exp < now) return false;

	return payload;
};
