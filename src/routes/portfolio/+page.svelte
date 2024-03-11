<script>
	
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Portfolio</h1>
<ul>
	<!-- card 1  -->
	<li>
		<a href="/portfolio/project-1" class="card">
			<img src="https://via.placeholder.com/150" alt="Avatar" style="width:100%">
			<div class="container">
				<h4><b>Project 1</b></h4>
				<p>Calculo de insulinas com sveltekit</p>
			</div>
		</a>
	</li>

	  <!-- card 2  -->
	  <li>
		  <a href="/portfolio/project-2" class="card">
			  <img src="https://via.placeholder.com/150" alt="Avatar" style="width:100%">
			  <div class="container">
				  <h4><b>Project 2</b></h4>
				  <p>Tienda Susan Flo</p>
				</div>
			</a>
		</li>

	  <!-- card 3  -->
	  <li>
		  <a href="/portfolio/project-3" class="card">
			  <img src="https://via.placeholder.com/150" alt="Avatar" style="width:100%">
			  <div class="container">
				  <h4><b>Project 3</b></h4>
				  <p>FourGreens</p>
				</div>
			</a>
		</li>
</ul>

<style>

h1  {
		width: 100%;
		color: rgb(23, 103, 242);
	}

	ul , li {
		display: flex;
		color: rgb(23, 103, 242);
	}

img {
	width: 100%;
	max-width: 360px;
	object-fit: cover;
}
.card {
	color: rgb(23, 103, 242);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 300px;
  gap: 10px;
  margin: 20px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>