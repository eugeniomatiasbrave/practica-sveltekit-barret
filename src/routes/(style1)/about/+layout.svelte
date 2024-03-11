<section>
	<aside>
		<nav>
			<ul>
				<li>
					<a href="/about/team">Team</a>
				</li>
				<li>
					<a href="/about/story">Story</a>
				</li>
				<li>
					<a href="/about/mission">Mission</a>
				</li>
			</ul>
		</nav>
	</aside>	
	<div class="main">
		<slot />
	</div>
</section>

<style>

	section {
		display: flex;
		height: 90vh;
	}

	aside {
		display: flex;
		flex-direction: column;
		flex: 0.2;
	}
	
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
</style>