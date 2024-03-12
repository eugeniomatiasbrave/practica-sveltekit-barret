<script lang="ts">
import '../../styles.css';

export let user: string | undefined;
	
</script>

<div class="app">
		<nav>	

		  <a href="/">Home</a>		
		  <a href="/characters">Characters</a>
		  <a href="/about">About</a>
		  <a href="/portfolio">Portfolio</a>

			{#if user}
			<a href="/profile">{user}</a>
			{:else}
			<a href="/login">Login</a>	
			{/if}				
		</nav>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	nav {
		width: 100%;
		font-size: 15px;
		text-align: center;
		padding: 0.8rem;
		border-bottom: #faf9f8 1px solid;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		padding: 0.01rem;
        border-top: #faf9f8 1px solid;
		
	}
	a {
		font-weight: bold;
		color: #f75617;
		text-decoration: inherit;
		margin: 0 0.5rem;
		padding: 0.5rem;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
