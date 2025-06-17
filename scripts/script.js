const loadPhones = async (phoneName, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneName}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("card-container");
  phoneContainer.innerHTML = ""; // clear the container before adding new phones
  //   console.log(phones);
  // show the show all button when the search result is more than 12
  const showAllButton = document.getElementById("buttonDiv");
  if (phones.length > 12) {
    showAllButton.classList.remove("hidden");
  } else {
    showAllButton.classList.add("hidden");
  }
  console.log('is show all', isShowAll);
  // showing 0 - 12 search result using slice
  if(!isShowAll){
    phones = phones.slice(0, 12);
  }
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
            <h2 class="card-title text-center">${phone.phone_name}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-start">
                <button onclick="handleShowDetails('${phone.slug}');showDetailsModal.showModal()" class="btn btn-primary">Show Details</button>
            </div>
        </div>
       `;
    phoneContainer.appendChild(phoneDiv);
  });
  loadingSpinner(false);
};
// handle show details button
const handleShowDetails = async (id) =>{
    console.log('clicked', id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    console.log(phone);

}

const handleSearch = (isShowAll) => {
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;
  searchField.value = ""; // clear the box after search
  loadPhones(searchText, isShowAll);
  loadingSpinner(true);
};

// show and hide loading spinner
const loadingSpinner = (isLoading) =>{
    const spinner = document.getElementById('loadingSpinner');
    if(  isLoading ){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}
// Show all phones when click show all button
const showAllPhones = () =>{
    handleSearch(true);
}


// loadPhones();
