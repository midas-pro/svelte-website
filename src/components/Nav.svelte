<script>
	export let segment;
</script>
<div class="flex justify-between items-center border-b-1 border-gray-100 py-1 md:justify-start md:space-x-1">
	<nav class="navbar navbar-expand-lg">
		<div class="container">
		  <button class="navbar-toggler text-dark bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-dark bi bi-filter-right" viewBox="0 0 16 16">
				<path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
			  </svg>
		  </button>  
		  <a class="navbar-brand relative grid gap-6 bg-white px-5 py-1 sm:gap-8 sm:p-8 font-bold" href="/">
		BlackWhite
		</a>
		  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
			<ul class="navbar-nav relative justify-content-end">
			  <li class="nav-item"><a rel=prefetch aria-current="{segment === '.' ? 'page' : undefined}" href="/" class="text-base font-medium text-gray-500 hover:text-gray-900 nav-link">Home</a></li>
			  <li class="nav-item"><a rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="about" class="text-base font-medium text-gray-500 hover:text-gray-900 nav-link">About</a></li>
			  <li class="nav-item"><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog" class="text-base font-medium text-gray-500 hover:text-gray-900 nav-link">Blog</a></li>
			  <li class="nav-item"><a rel=prefetch aria-current="{segment === 'doc' ? 'page' : undefined}" href="doc" class="text-base font-medium text-gray-500 hover:text-gray-900 nav-link">Documentation</a></li>
			  <li class="nav-item"><a rel=prefetch aria-current="{segment === 'donation' ? 'page' : undefined}" href="donation" class="text-base font-medium text-gray-500 hover:text-gray-900 nav-link">Donation</a></li>
			  <li class="nav-item"><a href="https://github.com/mesinkasir/sapper-blackwhite" class="btn btn-dark rounded text-white nav-link">Github</a></li>
			</ul>
		  </div>
		</div>
	  </nav>
	</div>