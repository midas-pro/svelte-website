<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	 	  <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
		{#each posts as post}
		<a rel="prefetch" class="group" href="blog/{post.slug}">
		  <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
	<img src="{post.pic}" alt="{post.title}" class="w-full h-full object-center object-cover group-hover:opacity-75">
		  </div>
		  <h3 class="mt-4 text-sm text-gray-700">
			{post.desc}
		  </h3>
		  <p class="mt-1 text-lg font-medium text-gray-900">
			{post.title}
		  </p>
		</a>	
		{/each}
</div>


</div>
</div>
