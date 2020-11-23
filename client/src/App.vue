<template>
  <div class="wrapper">
    <div id="app">
      <div class="scheduled">
        <Scheduled
          img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Tenet_ps_1_jpg_sd-high_Copyright-COPYRIGHT-2020-Warner-Bros-Entertainment-Inc-All-Rights-Reserved-Photo-Credit-Melinda-Sue-Gordon_NL_FO.jpg"
          title="Tenet"
          start_time="12:35"
          end_time="14:21"
          theatre="5"
        ></Scheduled>
        <Scheduled
          img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Trolls-Wereldtour_ps_1_jpg_sd-high_Copyright-2019-DreamWorks-Animation-LLC-All-Rights-Reserved_NL_FO.jpg"
          title="Trolls Wereldtour"
          start_time="12:40"
          end_time="14:42"
          theatre="2"
        ></Scheduled>
        <Scheduled
          img="https://kinepolis.nl/sites/kinepolis.nl/files/styles/kinepolis_filter_movie_poster/public/posters/Honest-Thief_ps_1_jpg_sd-high_NL_FO.jpg"
          title="Honest Thief"
          start_time="12:50"
          end_time="14:30"
          theatre="3"
        ></Scheduled>
      </div>
      <div class="checkout">
        <div class="checkout-items list-group-items">
          <CheckoutItem
            name="Standaard"
            cost="7,50"
            class="list-group-item"
          ></CheckoutItem>
          <CheckoutItem
            name="Standaard"
            cost="7,50"
            class="list-group-item"
          ></CheckoutItem>
          <CheckoutItem
            name="Standaard"
            cost="7,50"
            class="list-group-item"
          ></CheckoutItem>
          <CheckoutItem
            name="Standaard"
            cost="7,50"
            class="list-group-item"
          ></CheckoutItem>
        </div>
        <div class="checkout-total">
          <CheckoutTotal cost="30,00"></CheckoutTotal>
        </div>
      </div>
    </div>
    <hr />
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
      Er zijn verschillende soorten tickets beschikbaar. Er zijn namelijk
      speciale luxe stoelen met een tafeltje en extra armsteuning aanwezig. Ook
      zijn er familietickets beschikbaar, bestaande uit twee volwassenen en twee
      kinderen onder de 12 jaar, deze zijn weer voordeliger dan vier individuele
      tickets.
    </p>
    <p>
      Het filiaal bevat zes bioscoopzalen. Twee kleine zalen (1 & 2) en vier
      grote zalen (3 t/m 6). Wanwegen de coronamaatregelen zijn echter maar 30
      personen per zaal toegestaan. Tussen elke groep bezoekers moet er ook
      anderhalve meter gehandhaafd kunnen worden. Het systeem past dit
      automatisch toe door verticaal één stoel vrij te houden en horizontaal
      twee stoelen. Diagonaal hoeft er geen stoel tussen een groep te zitten.
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
      <b>Inplanning: </b>Een inplanning bevat informatie over welke
      voorstelling wanneer en waar vertoont zal worden.
      <br>
      <b>Voorstelling: </b>Een voorstelling kan een film, concert of evenement zijn. Afhankelijk van de soort voorstelling zijn verschillende tickets beschikbaar.
      <br>
      <b>Zaal: </b>Een zaal is een indeling van beschikbare stoelen. 
      <br>
      <b>Stoel: </b>Er zijn twee soorten stoelen beschikbaar; luxe en standaard.
      <br>
      <b>Ticket: </b>En ticket verbind een voorstelling met een stoel. Elke bioscoopganger heeft één ticket.
    </p>
  </div>
</template>

<script>
import Scheduled from "./components/Scheduled.vue";
import CheckoutItem from "./components/checkout/CheckoutItem.vue";
import CheckoutTotal from "./components/checkout/CheckoutTotal.vue";

export default {
  name: "App",
  components: {
    Scheduled,
    CheckoutItem,
    CheckoutTotal,
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  margin: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;

  display: flex;
}

.checkout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
}
</style>
