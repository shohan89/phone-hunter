const loadPhones = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=iphone`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("card-container");
//   console.log(phones);
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = "card bg-gray-100 shadow-sm";
    phoneDiv.innerHTML = `
        <figure>
            <img
            src=${phone.image}
            alt=${phone.phone_name} />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        </div>
       `;
       phoneContainer.appendChild(phoneDiv);
  });
};

loadPhones();
