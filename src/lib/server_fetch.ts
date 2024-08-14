import type { JwtPayload } from 'jsonwebtoken';
import type { data_horarios, ResData_horarios } from './types';

export const getHorarios = async (
	URL: string,
	payload: JwtPayload
): Promise<data_horarios | false> => {	
	const res = await fetch(`${URL}/horarios?user=${payload.context.user.email}`);
	const res_data:ResData_horarios = await res.json();
	if (!res_data.status) return false;
	return res_data.data;
};
