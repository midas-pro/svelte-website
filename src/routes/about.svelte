<script>
	import H from './about/header.svelte';
	import Dev from './about/dev.svelte';
	import Con from './about/content.svelte';
	import Sup from './about/support.svelte';
</script>
<svelte:head>
	<title>About sapper svelte Web template</title>
</svelte:head>
<div class="container">
	<div class="bg-white">
		<div class="pt-6">
			<H/>
			<div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
			<div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
			  <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
				About Black White
			  </h1>
			</div>
			<Dev/>
			<div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
			<div>
				<h3 class="sr-only">Pembuatan website mu</h3>
				<Con/>
			</div>
			<Sup/>
			</div>
		  </div>
		</div>
	  </div>
</div>