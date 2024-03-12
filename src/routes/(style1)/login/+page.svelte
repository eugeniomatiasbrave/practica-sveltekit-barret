<script lang="ts">
export let form;	
	
</script>

<h1>Login</h1>

<form method="post" >
	 <label for="username">Username</label>
	 <input type="text" name="username" id="username" value={form?.username?.value ?? ''} />
     <div class="error">{form?.username?.error ?? ''}</div>

	 <label for="password">Password</label>
	 <input type="password" name="password" id="password" value={form?.password?.value ?? ''}/>
	 <div class="error">{form?.password?.error ?? ''}</div> 

	 <button type="submit">Login</button>
<p>Username: admin , Password: password</p>
	</form>


<style>
	form {
		display: flex;
		flex-direction: column;
		width: 400px;
		margin: 0 auto;
	}

	label {
		margin-top: 1rem;
	}

	input {
		margin-top: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		height: 2rem;
	}
	button {
		margin-top: 1rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		background-color: #f0f0f0;
		padding: 0.5rem;
	}

	button:active{
		background-color: #e0e0e0;
	}

	.error {
		color: red;
		min-height: 1.2rem;
	}
</style>