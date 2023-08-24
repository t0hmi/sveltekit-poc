<script>
	import { enhance } from '$app/forms';
</script>

<section>
	<h1>Login/Register</h1>

	<form method="POST" action="?/login" use:enhance>
		<input name="email" placeholder="email" type="email" required />
		<input name="password" placeholder="password" type="password" required />
		<div class="buttons">
			<button>Log in</button>
			<button>Register</button>
		</div>
	</form>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: max(60%, 250px);
		padding: 30px;
	}

	input,
	button {
		padding: 10px 15px;
	}

	.buttons {
		gap: 5px;
		display: flex;
	}

	button {
		flex: 0.5;
	}
</style>
