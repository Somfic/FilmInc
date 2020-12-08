<template>
	<div class="project-info">
		<Navbar></Navbar>
		<div class="alert alert-info" role="alert">
			<strong>Applicatie?</strong><br />
			<span
				>Klik <a href="../">hier</a> om terug te gaan naar de applicatie
			</span>
		</div>

		<div class="row" />
		<h1>Projectbeschrijving</h1>
		<p>Lucas de Jong <span class="badge badge-secondary">2158725</span></p>
		<p>
			Dit project is voor Client-side web frameworks 2.2 Avans Hogeschool
			Breda.
		</p>
		<h2>Casus</h2>
		<p>
			Het bioscoopfiliaal FilmInc heeft een verouderd kassasysteem en is
			toe aan vervanging. FilmInc heeft de opdracht gegeven een nieuw
			kassasysteem te ontwikkelen voor bij de ticketbalie. Het systeem
			moet een voorstelling, tickets en plaatsen kunnen selecteren voor
			bioscoopgangers. Het systeem zal door medewerkers van FilmInc
			gebruikt worden.
		</p>
		<p>
			Er zijn verschillende soorten tickets beschikbaar. Er zijn namelijk
			speciale luxe stoelen met een tafeltje en extra armsteuning
			aanwezig. Ook zijn er familietickets beschikbaar, bestaande uit twee
			volwassenen en twee kinderen onder de 12 jaar, deze zijn weer
			voordeliger dan vier individuele tickets.
		</p>
		<p>
			Het filiaal bevat zes bioscoopzalen. Twee kleine zalen (1 & 2) en
			vier grote zalen (3 t/m 6). Wanwegen de coronamaatregelen zijn
			echter maar 30 personen per zaal toegestaan. Tussen elke groep
			bezoekers moet er ook anderhalve meter gehandhaafd kunnen worden.
			Het systeem past dit automatisch toe door verticaal één stoel vrij
			te houden en horizontaal twee stoelen. Diagonaal hoeft er geen stoel
			tussen een groep te zitten.
		</p>
		<h2>Technologien</h2>
		<p>
			Deze applicatie zal gebruik maken van VueJS. De repository en CI/CD
			pipeline zijn gehost op GitHub, de applicatie is gehost via Heroku.
		</p>
		<p>
			De applicatie zal ontwikkeld worden als een Single Page Application.
			Dit betekend dat elementen binnen de webpagina dynamisch zullen
			worden geüpdatet, in plaats van de gehele pagina te herladen.
		</p>
		<h2>Entiteiten</h2>
		<p>
			Binnen dit systeem zullen verschillende entiteiten/modellen gebruikt
			worden.
		</p>
		<p>
			<b>Inplanning: </b>Een inplanning bevat informatie over welke
			voorstelling wanneer en waar vertoont zal worden.
			<br />
			<b>Voorstelling: </b>Een voorstelling kan een film, concert of
			evenement zijn. Afhankelijk van de soort voorstelling zijn
			verschillende tickets beschikbaar.
			<br />
			<b>Zaal: </b>Een zaal is een indeling van beschikbare stoelen.
			<br />
			<b>Stoel: </b>Er zijn twee soorten stoelen beschikbaar; luxe en
			standaard.
			<br />
			<b>Ticket: </b>En ticket verbind een voorstelling met een stoel.
			Elke bioscoopganger heeft één ticket.
		</p>
	</div>
</template>
<script>
import Navbar from "../components/navbar/Navbar";

export default {
	name: "ProjectInfo",
	components: {
		Navbar,
	},
};
</script>