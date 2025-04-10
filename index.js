const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 30000,
    features: {
      engine: "2.5L Hybrid",
      transmission: "Automatic",
      colorOptions: ["white", "black", "silver"],
    },
    dealer: {
      name: "AutoCity",
      location: "123 Main St, Springfield",
      ratings: [4.5, 4.7, 4.8],
    },
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 60000,
    features: {
      engine: "3.0L Turbo",
      transmission: "Automatic",
      colorOptions: ["blue", "black", "grey"],
    },
    dealer: {
      name: "LuxuryCars",
      location: "45 Park Ave, Metropolis",
      ratings: [4.9, 5.0, 4.8],
    },
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 45000,
    features: {
      engine: "Electric",
      transmission: "Single Speed",
      colorOptions: ["red", "white", "black"],
    },
    dealer: {
      name: "Electric Dreams",
      location: "789 Elm St, Gotham",
      ratings: [4.6, 4.8, 4.9],
    },
  },
  {
    brand: "Honda",
    model: "Civic",
    year: 2021,
    price: 20000,
    features: {
      engine: "1.5L Turbo",
      transmission: "Manual",
      colorOptions: ["silver", "blue", "white"],
    },
    dealer: {
      name: "Reliable Motors",
      location: "321 Maple St, Star City",
      ratings: [4.3, 4.5, 4.4],
    },
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2022,
    price: 55000,
    features: {
      engine: "5.0L V8",
      transmission: "Automatic",
      colorOptions: ["red", "black", "yellow"],
    },
    dealer: {
      name: "FastCars",
      location: "789 Fast Lane, Riverdale",
      ratings: [4.7, 4.8, 5.0],
    },
  },
  {
    brand: "Audi",
    model: "A4",
    year: 2023,
    price: 40000,
    features: {
      engine: "2.0L Turbo",
      transmission: "Automatic",
      colorOptions: ["white", "grey", "blue"],
    },
    dealer: {
      name: "LuxuryAutos",
      location: "12 Luxury Ave, Capital City",
      ratings: [4.6, 4.7, 4.9],
    },
  },
  {
    brand: "Chevrolet",
    model: "Tahoe",
    year: 2022,
    price: 50000,
    features: {
      engine: "5.3L V8",
      transmission: "Automatic",
      colorOptions: ["black", "white", "silver"],
    },
    dealer: {
      name: "FamilyCars",
      location: "34 SUV Road, Lakewood",
      ratings: [4.4, 4.5, 4.6],
    },
  },
  {
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2023,
    price: 70000,
    features: {
      engine: "3.0L Inline-6 Turbo",
      transmission: "Automatic",
      colorOptions: ["black", "silver", "white"],
    },
    dealer: {
      name: "Elite Motors",
      location: "56 Premium Dr, Uptown",
      ratings: [4.8, 4.9, 5.0],
    },
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    year: 2021,
    price: 22000,
    features: {
      engine: "1.4L Turbo",
      transmission: "Manual",
      colorOptions: ["white", "black", "blue"],
    },
    dealer: {
      name: "EcoDrive",
      location: "67 Green Blvd, Suburbia",
      ratings: [4.3, 4.4, 4.2],
    },
  },
  {
    brand: "Nissan",
    model: "Altima",
    year: 2022,
    price: 27000,
    features: {
      engine: "2.5L Inline-4",
      transmission: "Automatic",
      colorOptions: ["grey", "black", "white"],
    },
    dealer: {
      name: "QuickRide",
      location: "102 Downtown St, Greenville",
      ratings: [4.2, 4.3, 4.5],
    },
  },
  {
    brand: "Jeep",
    model: "Wrangler",
    year: 2023,
    price: 40000,
    features: {
      engine: "3.6L V6",
      transmission: "Manual",
      colorOptions: ["green", "black", "orange"],
    },
    dealer: {
      name: "Adventure Autos",
      location: "456 Trail Rd, Mountainville",
      ratings: [4.7, 4.6, 4.8],
    },
  },
  {
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    price: 33000,
    features: {
      engine: "2.4L Turbo",
      transmission: "CVT",
      colorOptions: ["blue", "green", "white"],
    },
    dealer: {
      name: "Reliable Motors",
      location: "789 Forest Ave, Hilltown",
      ratings: [4.5, 4.6, 4.7],
    },
  },
];

function setCarsAmount(cars) {
  document.getElementById("carAmount").textContent = cars.length;
}

// render number of cars through operating with DOM and method textContent

function renderCars(cars) {
  let list = document.getElementById("carsList");
  list.innerHTML = "";
  // get access to our "ul" tag - actual list of cars

  cars.forEach((car) => {
    list.insertAdjacentHTML("beforeend", createCarItemTemplate(car));
  });
  initializeAccordions();

  // creating a "car" element from cars obj and implement it to html using insertAdjacentHTML
}

function createCarItemTemplate(car) {
  // whole function creates template of "car" element on page
  const { brand, dealer, model, year, features } = car;

  let averageRating =
    dealer.ratings.reduce((acc, cur) => acc + cur, 0) / dealer.ratings.length; // compute rating

  let itemTemplate = `<li class = "carsItem">
                            <button class="button">
                            <div class="accordion">
                              <h4>${brand} ${model}, ${year} рік</h4>
                              <p class="dealer">Дилер - ${
                                dealer.name
                              }. Середній рейтинг - ${averageRating.toFixed(
    2
  )}</p>
                              </div>
                              <p class="price">${car.price} USD</p>
                            </button>
                            <div class="accordion-body">
                            <span>Двигун:</span> <span class="engine">${
                              features.engine
                            }</span>
                            <span>Коробка передач:</span> <span class="transmission">${
                              features.transmission
                            }</span>
                            <span>Доступні кольори:</span> <span class="circleContainer">${renderColorCircles(
                              features.colorOptions
                            )}</span>
                            </div>
                            </li>`;

  return itemTemplate;
}

function initializeAccordions() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.toggle("active");
    });
  });
}

const sortAscBtn = document.getElementById("expensive");
sortAscBtn.addEventListener("click", function () {
  sortCars(cars, "asc");
});
const sortDescBtn = document.getElementById("cheap");
sortDescBtn.addEventListener("click", function () {
  sortCars(cars, "desc");
});
const cleanBtn = document.getElementById("cleanUp");

function sortCars(cars, sortType) {
  let sortedCars;
  if (sortType === "asc") {
    sortedCars = [...cars].sort((a, b) => b.price - a.price);
  } else if (sortType === "desc") {
    sortedCars = [...cars].sort((a, b) => a.price - b.price);
  } else {
    sortedCars = [...cars];
  }

  renderCars(sortedCars);
}

function cleanUp() {
  const cleanBtn = document.getElementById("cleanUp");
  cleanBtn.addEventListener("click", () => {
    cleanBtn.style.display = "none";
    renderCars(cars);
  });
}

function renderColorCircles(colors) {
  const template = colors.map(
    (color) =>
      `<span style ="border:1px solid; border-radius:50%; height:20px; width:20px; background:${color}; display:inline-block;"></span>`
  );
  return template.join(" ");
}

// More generic filter function that takes property name as parameter
function filterCarsByProperty(query, property) {
  return cars.filter((item) =>
    item[property].toLowerCase().includes(query.toLowerCase())
  );
}

const form = document.getElementById("filterForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const formValues = Object.fromEntries(formData);
  formValues.colors = formData.getAll('colors')

  localStorage.setItem('filterConfig', JSON.stringify(formValues));


  

  const filteredCarsByBrand = cars.filter((car) => {
    const matchByBrand =
      car.brand.toLowerCase().includes(formValues.brand.toLowerCase()) ||
      formValues.brand.trim() === "";
    const matchByModel =
      car.model.toLowerCase().includes(formValues.model.toLowerCase()) ||
      formValues.model.trim() === "";
    const filterByYear =
      (formValues.fromYear === "" || car.year >= formValues.fromYear) &&
      (formValues.toYear === "" || car.year <= formValues.toYear);

    const filterByPrice =
      (formValues.fromPrice === "" || car.price >= formValues.fromPrice) &&
      (formValues.toPrice === "" || car.price <= formValues.toPrice);
    
    const filterByColor = formValues.colors.some((color) => {
         return car.features.colorOptions.includes(color)
    }) || formValues.colors.length === 0
     
    
    
    
    return matchByBrand && matchByModel && filterByYear && filterByPrice && filterByColor;
  });

  renderCars(filteredCarsByBrand);
  console.log(filteredCarsByBrand);
  
});

function renderColorCheckbox() {
  const colorsArr = Array.from(
    new Set(
      cars.flatMap((car) => {
        return car.features.colorOptions;
      })
    )
  );
  const colorsCheckbox = document.getElementById("checkBoxList");
  const template = colorsArr.map((color) => {
    const itemTemplate = `<li style ="display:inline-block;">
    <label>
    <input name="colors" type="checkbox" class="checkbox" value="${color}" style="background:${color}">
    </label>
    </li>`;
    return itemTemplate;
  });
  colorsCheckbox.innerHTML = template.join("");
  
}


document.addEventListener('DOMContentLoaded', () => {
  setCarsAmount(cars);
  renderCars(cars);
  cleanUp();
  renderColorCheckbox();

const storedData = JSON.parse(localStorage.getItem('filterConfig')) ?? {}




form.querySelectorAll('input[type=text],input[type=number]').forEach((input) => {
  input.value = storedData[input.name] ?? ''
})
form.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
  checkbox.checked = storedData[checkbox.name].includes(checkbox.value)

})
form.requestSubmit()
});


