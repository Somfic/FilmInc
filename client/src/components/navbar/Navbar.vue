<template>
	<nav
		class="navbar navbar-expand-lg navbar-light bg-light rounded border mb-3"
	>
		<router-link to="/auth" class="navbar-brand">
			<span>FilmInc</span>
		</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/" active-class="active" class="nav-link">
						<span>Overzicht</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link
						to="/watchables"
						active-class="active"
						class="nav-link"
					>
						<span>Voorstellingen</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link
						to="/scheduled"
						active-class="active"
						class="nav-link"
					>
						<span>Inplanning</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link
						to="/project"
						active-class="active"
						class="nav-link"
					>
						<span>Project informatie</span>
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script>
export default {
	name: "Navbar",
};
</script>