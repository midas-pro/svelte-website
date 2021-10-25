<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>


<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<div class="row">
	<div class="col-12 col-md-2"></div>
	<div class="col-12 col-md-8 p-3 p-md-5">
<figure class="bg-gray-100 rounded-xl p-8 p-3">
	<img class="w-32 h-32 rounded-full mx-auto" src="{post.pic}" alt="" width="384" height="512">
	<div class="pt-6 space-y-4 p-3 p-md-5">
		<h3 class="text-lg font-bold">{post.title}</h3>
		<p class="text-lg font-semibold">
			{post.desc}
		</p>
		<p>{@html post.html}</p>
	</div>
  </figure>
</div>
<div class="col-12 col-md-3"></div>
</div>
