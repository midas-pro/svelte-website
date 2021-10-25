<script>
	import Head from './donation/head.svelte';
	import Confirm from './donation/confirm.svelte';
	import Account from './donation/acc.svelte';
</script>
<svelte:head>
	<title>Donation for template</title>
</svelte:head>
<div class="container">
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full space-y-8">
		<Head/>
		<Account/>
		<Confirm/>
		</div>
	  </div>
</div>