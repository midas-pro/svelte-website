<script>
	import Nav from '../components/Nav.svelte';
	import Foot from '../components/footer.svelte';
	export let segment;
</script>

<div class="container">
<Nav {segment}/>
<main>
	<slot></slot>
</main>
</div>
<Foot/>