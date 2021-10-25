<script>
	import Sup from './home/support.svelte';
	import Down from './home/download.svelte';
	import Gal from './home/gallery.svelte';
	import H from './home/head.svelte';
</script>
<svelte:head>
	<title>BlackWhite Sapper svelte premium template free download</title>
</svelte:head>
<div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-5">
	<H/>
	<div class="col-start-1 row-start-2 px-4 sm:pb-16">
	  <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
		<Sup/>
	  </div>
	<hr class="w-16 border-gray-300 hidden sm:block">
	  </div>
	<Down/>
	<Gal/>
  </div>