<script>
	
	export let data
	
	console.log(data)

	const characters = data?.characters
</script>

<svelte:head>
	<title>Characters</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Characters</h1>
	<ul>
		{#each characters as {name , id, image, occupation}}
		<article>


	<li>
		<a href={`/characters/${id}`} class="picture">
			<img src={image} alt={name}>
		</a>	
		<div>	
			<a href={`/characters/${id}`}><b>{name}</b></a>
			<p class="occupation">{occupation ? occupation : "Unknown"}</p>	
		</div>
	</li>

		</article>
   {/each}
  </ul>
</section>



<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	article {
     width: 500px;
     max-width: 80%;
     border: 2px solid rgb(255, 62, 0);
     border-radius: 0.7rem;
     box-shadow: 4px 4px 5px #555;
     margin: 3rem auto;
     padding: 10px 2px 2px 2px;
	 background-color: white;
}


	h1 {
		width: 100%;
		color: rgb(235, 60, 0);
	}

	li {
		display: flex;
		gap: 2rem;
		margin-bottom: 1rem;
	}

	.picture {
		display: flex;
		width: 100px;
		height: 100px;
	}

	.picture > img{
		width: 100%;
		height: 100%;
		object-fit: contain;
		padding: 2px;
	}

	.occupation {
		color:gray
	}

</style>