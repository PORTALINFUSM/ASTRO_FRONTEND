import { useState } from 'preact/hooks';
import styles from './styles.module.scss';

const hours_to_block = (hours: number): string => {
	if (hours < 8.2) return '0-0';
	else if (hours < 9.25) return '1-2';
	else if (hours < 9.4) return '1-2 -> 3-4';
	else if (hours < 10.5) return '3-4';
	else if (hours < 11.05) return '3-4 -> 5-6';
	else if (hours < 12.15) return '5-6';
	else if (hours < 12.3) return '5-6 -> 7-8';
	else if (hours < 13.4) return '7-8';
	else if (hours < 14.4) return '7-8 -> 9-10\n(Almuerzo)';
	else if (hours < 15.5) return '9-10';
	else if (hours < 16.05) return '9-10 -> 11-12';
	else if (hours < 17.15) return '11-12';
	else if (hours < 17.3) return '11-12 -> 13-14';
	else if (hours < 18.4) return '13-14';
	else if (hours < 18.5) return '13-14 -> 15-16';
	else if (hours < 20.0) return '15-16';
	else return '15-16+';
};

export default function HeaderClock() {
	const [date, setDate] = useState(new Date(Date.now()));
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const hours_minutes = hours + minutes / 100;

	setTimeout(() => {
		setDate(new Date(Date.now()));
	}, 1000);
	return (
		<header class={styles.headerClock}>
			<h2>{date.toTimeString().substring(0, 8)}</h2>
			<p>{hours_to_block(hours_minutes)}</p>
		</header>
	);
}
