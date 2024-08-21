const xhr = new XMLHttpRequest();
xhr.open("GET", "https://official-joke-api.appspot.com/jokes/random");
xhr.onreadystatechange = function () {
   if (this.status === 200 && this.readyState === 4) {
      const data = JSON.parse(this.responseText);
      const li = document.createElement("li");
      li.innerHTML = `<h3>${data.setup}</h3>
                        <h4>${data.punchline}</h4> `;
      document.querySelector("#results").appendChild(li);
   }
};

xhr.send();

const button = document.querySelector("#btn");
button.addEventListener("click", () => {
   location.reload();
});
