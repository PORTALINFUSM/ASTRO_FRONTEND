import { useState } from 'preact/hooks';
import styles from './form.module.scss';

interface tResData {
	status: boolean;
	msg: string;
	token: string;
	redirect: string;
}

export default function LoginForm({ URL }: { URL: string }) {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState({ str: '', color: '' });
	const onSubmit = (ev: SubmitEvent) => {
		ev.preventDefault();
		fetch(`${URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				passw: password,
			}),
		})
			.then((res) => res.json())
			.then((resData: tResData) => {
				setMsg({
					str: resData.msg,
					color: resData.status ? 'green' : 'red',
				});
				if (!resData.status) return;

				window.location.href = `/${encodeURIComponent(resData.token)}${
					resData.redirect
				}`;
			});
	};

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<header>
				<h2>LOGIN</h2>
			</header>
			<section>
				<label for="email">
					Email
					<input
						name="email"
						type="text"
						autocomplete="email"
						onChange={(ev) => {
							setEmail(ev.currentTarget.value);
						}}
					/>
				</label>
				<label for="password">
					Password
					<input
						name="password"
						type="password"
						autocomplete="current-password"
						onChange={(ev) => {
							setPassword(ev.currentTarget.value);
						}}
					/>
				</label>
			</section>
			<footer>
				{msg.str ? <p style={{ color: msg.color }}>{msg.str}</p> : ''}
				<button type="submit">Send</button>
			</footer>
		</form>
	);
}
