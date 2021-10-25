// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		desc: 'First, you have to know what Svelte is.',
		pic: 'https://1.bp.blogspot.com/-L-EfuCR9RFc/YLeWYdBg2UI/AAAAAAAAOe0/c7nNo471XZA2k8LKYvuc3GZgXbXoTMOfgCLcBGAsYHQ/s1500/10535075_10204371354784914_5706059600352822461_o.jpg',
		slug: 'what-is-sapper',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		desc: 'Create a new project, using degit',
		pic: 'https://1.bp.blogspot.com/-wEpxt8fJcoY/YLeWd4ybhZI/AAAAAAAAOfw/eKU6sFzUQnwbyA-wDyduLgnNEV9BJ4NCgCLcBGAsYHQ/s1500/10925490_10203486268978322_7617563753735000124_o.jpg',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		desc: 'In war, the soldiers who build bridges',
		pic: 'https://1.bp.blogspot.com/-4qd5qAfzaDk/YLeWegi9ynI/AAAAAAAAOf0/Xyadm9vbE6wQFzqgDNEZH_ATdHXanj7pgCLcBGAsYHQ/s1500/11053615_10204576826441577_1771740999828650720_o.jpg',
		slug: 'why-the-name',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
		
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		desc: 'Next.js is a React framework from Vercel',
		pic: 'https://1.bp.blogspot.com/-TIQ30DueHtA/YLeWUwE6VbI/AAAAAAAAOeM/0z_75ayYwSQQ3yFdHykK9Q0G27hzuKX6wCLcBGAsYHQ/s1500/10372971_10203043881798919_2756716781267349962_o.jpg',
		slug: 'how-is-sapper-different-from-next',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
		
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'Do you love sapper svelte ??',
		desc: 'This is a reason Why i love sapper and svelte',
		pic: 'https://1.bp.blogspot.com/-TFLbmCXHS-o/YLeWrbOPtjI/AAAAAAAAOhQ/GyuN4toSwTkP0h_G9CYaPeBsg51Q80ctACLcBGAsYHQ/s2048/14853102_10207622208494225_4077972247009040645_o.jpg',
		slug: 'love-sapper-svelte',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
		
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},
	
	{
		title: 'Need Build modern website ?',
		desc: 'Call us if you need to build modern web app',
		pic: 'https://1.bp.blogspot.com/-DVXdhZEFQzs/YLeWZyDmJrI/AAAAAAAAOfE/UFxBnHckP3AZhT-ytYtdngYl5FM2O7xhACLcBGAsYHQ/s2048/10648976_10202895984821587_4477586369464500359_o.jpg',
		slug: 'modern-web-app',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
		
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'Pembuatan website',
		desc: 'Butuh layanan pembuatan website mu?',
		pic: 'https://1.bp.blogspot.com/-8xCZM8oBliY/YLeWkoC0PxI/AAAAAAAAOgY/RTfSCEf7Ea0SVGlNdm96HmA3NmaBSTbzQCLcBGAsYHQ/s2048/13047947_10206291847236025_3477782214716158366_o.jpg',
		slug: 'pembuatan-website',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
		
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		desc: 'We so glad you asked! Come on over to the Svelte and Sapper repos',
		pic: 'https://1.bp.blogspot.com/-vnwxQwVPZ5U/YLeWabMqIdI/AAAAAAAAOfM/npMcmqcDOecd9OoWqQr4KNGWQ46rtQRdQCLcBGAsYHQ/s968/10669357_10204278775470489_8300508902678433216_o.jpg',
		slug: 'how-can-i-get-involved',
		html: `
		<p>Dumy text - jasa pembuatan website modern mu - lorep ipsum dolor siamet amet jabang bayi lanang wedok.</p>
		
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
