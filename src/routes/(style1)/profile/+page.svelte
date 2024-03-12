<script lang="ts">
	
	export let data;
</script>



	<h1>
		{data.user}<br />SvelteKit
	</h1>

	<form method="POST" action="?/logout">
	<button type="submit">Logout</button>
	</form>

	<style>
		h1 {
			color: #ff3e00
		}

		form {
			display: flex;
			justify-content: center;
		}

		button {
	       margin-top: 1rem;
	       border: 1px solid #ccc;
	        border-radius: 0.25rem;
	       background-color: #f0f0f0;
	       padding: 0.5rem;
        }
	</style>
