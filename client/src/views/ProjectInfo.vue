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
      Dit project is voor Client-side web frameworks 2.2 Avans Hogeschool Breda.
    </p>
    <h2>Casus</h2>
    <p>
      Het bioscoopfiliaal FilmInc heeft een verouderd kassasysteem en is toe aan
      vervanging. FilmInc heeft de opdracht gegeven een nieuw kassasysteem te
      ontwikkelen voor bij de ticketbalie. Het systeem moet een voorstelling,
      tickets en plaatsen kunnen selecteren voor bioscoopgangers. Het systeem
      zal door medewerkers van FilmInc gebruikt worden.
    </p>
    <p>
      Het filiaal bevat zes bioscoopzalen. Twee kleine zalen (1 & 2) en vier
      grote zalen (3 t/m 6).
    </p>
    <h2>Technologien</h2>
    <p>
      Deze applicatie zal gebruik maken van VueJS. De repository en CI/CD
      pipeline zijn gehost op GitHub, de applicatie is gehost via Heroku.
    </p>
    <p>
      De applicatie zal ontwikkeld worden als een Single Page Application. Dit
      betekend dat elementen binnen de webpagina dynamisch zullen worden
      geüpdatet, in plaats van de gehele pagina te herladen.
    </p>
    <h2>Entiteiten</h2>
    <p>
      Binnen dit systeem zullen verschillende entiteiten/modellen gebruikt
      worden.
    </p>
    <p>
      <b>Watchable: </b>Een voorstelling. Dit kan een film of concert zijn.
      <br />
      <b>Scheduled: </b>Inplanning. Een inplanning verbind een
      <i>watchable</i> met een tijd, datum en locatie.
      <br />
      <b>Users: </b>Een gebruiker is een werknemer binnen FilmInc. Een gebruiker
      kan een administrator of een normale gebruiker zijn. Administratoren
      kunnen het filmschema en aanbod aanpassen.
    </p>
    <img src="/assets/dia.png" alt="" />
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
