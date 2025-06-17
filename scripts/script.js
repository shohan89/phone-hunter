const loadPhones = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
}

const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
       console.log(phone); 
    })
}





loadPhones();