export const APP = (() => {
  var currencyInit = function() {
    (async () => {
      const request = new Request(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
        {
          headers: {
            Accept: "application/json",
          },
        },
      );
      const response = await fetch(request);
      const data = await response.json();
      const result = await data;
      console.log(result);

      const USD = result.find(({ cc }) => cc === "USD");
      const EUR = result.find(({ cc }) => cc === "EUR");

      document.getElementById("national_bank").innerHTML = `
      <div class="white-text-glow" style="display: inline-block;">
        <h4>Курс <span style="text-shadow: 0px -1px 20px rgb(255 0 74 / 83%);">НБУ</span> станом на ${USD.exchangedate}</h4>
        <p>${USD.txt}: ${USD.rate.toFixed(2)}</p>
        <p>${EUR.txt}: ${EUR.rate.toFixed(2)}</p>
      </div>
      `;
    })();
  };


  var _sayHi = function() {
    alert("HI!");
  }


  return {
    currencyInit: function() {
      return currencyInit();
    },
    sayHi: function() {
      return _sayHi();
    }
  };
})();

// ------------------------------
