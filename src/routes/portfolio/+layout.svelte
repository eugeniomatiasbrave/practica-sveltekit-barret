<script lang="ts">
	import PageLayout from "$lib/layouts/PageLayout.svelte";
	export let data;
</script>


<PageLayout user={data.user} >
	<slot />
</PageLayout>