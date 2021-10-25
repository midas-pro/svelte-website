<script>
	import Head from './doc/head.svelte';
	import First from './doc/1.svelte';
	import Two from './doc/2.svelte';
	import Three from './doc/3.svelte';
	import Four from './doc/4.svelte';
	import Five from './doc/5.svelte';
	import Six from './doc/6.svelte';
	import Seven from './doc/7.svelte';
	import Eight from './doc/8.svelte';
</script>
<svelte:head>
	<title>Documentation how to work with sapper svelte themes</title>
</svelte:head>
<div class="container">
	<div class="py-12 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		 <Head/>
		  <div class="mt-10">
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			<First/>
			<Two/>
			<Three/>
			<Four/>
			<Five/>
			<Six/>
			<Seven/>
			<Eight/>
			</dl>
		  </div>
		</div>
	  </div>

</div>