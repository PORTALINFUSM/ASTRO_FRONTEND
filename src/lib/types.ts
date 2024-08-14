declare module 'jsonwebtoken' {
	interface JwtPayload {
		context: {
			user: {
				name: string;
				email: string;
			};
			role: string;
		};
	}
}

export interface Horario_Ramo_data {
	name: string;
	code: string;
	par: number;
	tipo: string;
	dia: string;
	bloque: string;
	sala: string;
}
export interface data_horarios {
	l: Horario_Ramo_data[];
	m: Horario_Ramo_data[];
	x: Horario_Ramo_data[];
	j: Horario_Ramo_data[];
	v: Horario_Ramo_data[];
	s: Horario_Ramo_data[];
	d: Horario_Ramo_data[];
}
export interface ResData_horarios {
	status: boolean;
	data: data_horarios;
}
