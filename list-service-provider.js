// <!-- SEARCH Dropdown Buttons -->
  // Elements
  const cleaning_services_Category = document.querySelector(
    '[data-category="Cleaning-Services"]'
  );
  const grooming_hairdressing_Category = document.querySelector(
    '[data-category="Grooming-and-Hairdressing"]'
  );
  const car_repair_Category = document.querySelector(
    '[data-category="Car-Repair"]'
  );
  const event_planning_Category = document.querySelector(
    '[data-category="Event-Planning"]'
  );
  const mental_health_counseling_Category = document.querySelector(
    '[data-category="Mental-Health-Counseling"]'
  );
  const subDropdown = document.getElementById("subDropdown");
  const subMenu = document.getElementById("subMenu");
  const searchBtn = document.getElementById("searchBtn");
  const mainCategoryBtn = document.getElementById("mainCategoryBtn");
  const categoryList = document.getElementById("categoryList");
  const categoryInput = document.getElementById("categoryInput");
  const inputCategoryList = document.getElementById("inputCategoryList");
  const categoryItems = [
    "Cleaning Services",
    "Grooming and Hairdressing",
    "Car Repair",
    "Event Planning",
    "Mental Health Counseling",
  ];

  let selectedCategory = "";
  let selectedItem = "";

  // Function to filter categories and display in dropdown
  categoryInput.addEventListener("input", function () {
    const inputValue = categoryInput.value.toLowerCase();
    inputCategoryList.innerHTML = "";
    const filteredItems = categoryItems.filter((item) =>
      item.toLowerCase().includes(inputValue)
    );
    filteredItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item");
      a.href = "#";
      a.textContent = item;
      a.addEventListener("click", function () {
        categoryInput.value = item;
        mainCategoryBtn.textContent = item;
        handleMainCategoryClick(item, getSubCategories(item));
        inputCategoryList.innerHTML = "";
      });
      li.appendChild(a);
      inputCategoryList.appendChild(li);
    });
    if (filteredItems.length > 0) {
      inputCategoryList.classList.add("show");
    } else {
      inputCategoryList.classList.remove("show");
    }
  });

  // Function to handle main category click
  function handleMainCategoryClick(category, items) {
    selectedCategory = category;
    subMenu.innerHTML = ""; // Clear previous items

    // Populate sub-menu with items
    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item");
      a.href = "#";
      a.textContent = item;
      a.addEventListener("click", function () {
        selectedItem = item;
        document.getElementById("subCategoryBtn").textContent = item; // Update sub button with selected item
        searchBtn.style.display = "block"; // Show search button
      });
      li.appendChild(a);
      subMenu.appendChild(li);
    });

    subDropdown.style.display = "block"; // Show sub dropdown
    document.getElementById("subCategoryBtn").textContent = "Select Item"; // Reset sub button text
    searchBtn.style.display = "none"; // Hide search until item is selected
  }

  // Function to get sub-categories based on main category
  function getSubCategories(category) {
    const subCategories = {
      "Cleaning Services": [
        "House cleaning",
        "Carpet cleaning",
        "Window cleaning",
        "Deep cleaning",
      ],
      "Grooming and Hairdressing": [
        "Beard trimming",
        "hair coloring",
        "hair styling",
        "hair treatments",
        "haircuts",
      ],
      "Car Repair": [
        "Engine repair",
        "Brake repair",
        "Transmission services",
        "Suspension repair",
        "Diagnostic services",
      ],
      "Event Planning": [
        "Wedding planning",
        "Corporate event planning",
        "Birthday party planning",
      ],
      "Mental Health Counseling": [
        "Individual therapy",
        "Couples therapy",
        "Family therapy",
        "Group therapy",
        "Child therapy",
      ],
    };
    return subCategories[category] || [];
  }

  // Event Listeners for main categories
  cleaning_services_Category.addEventListener("click", function () {
    categoryInput.value = "Cleaning Services";
    mainCategoryBtn.textContent = "Cleaning Services";
    handleMainCategoryClick(
      "Cleaning Services",
      getSubCategories("Cleaning Services")
    );
  });

  grooming_hairdressing_Category.addEventListener("click", function () {
    categoryInput.value = "Grooming and Hairdressing";
    mainCategoryBtn.textContent = "Grooming and Hairdressing";
    handleMainCategoryClick(
      "Grooming and Hairdressing",
      getSubCategories("Grooming and Hairdressing")
    );
  });

  car_repair_Category.addEventListener("click", function () {
    categoryInput.value = "Car Repair";
    mainCategoryBtn.textContent = "Car Repair";
    handleMainCategoryClick("Car Repair", getSubCategories("Car Repair"));
  });

  event_planning_Category.addEventListener("click", function () {
    categoryInput.value = "Event Planning";
    mainCategoryBtn.textContent = "Event Planning";
    handleMainCategoryClick(
      "Event Planning",
      getSubCategories("Event Planning")
    );
  });

  mental_health_counseling_Category.addEventListener("click", function () {
    categoryInput.value = "Mental Health Counseling";
    mainCategoryBtn.textContent = "Mental Health Counseling";
    handleMainCategoryClick(
      "Mental Health Counseling",
      getSubCategories("Mental Health Counseling")
    );
  });

  searchBtn.addEventListener("click", function () {
    if (selectedCategory && selectedItem) {
      // Redirect to another page with selected category and item as query parameters
      window.location.href = `results.html?category=${encodeURIComponent(
        selectedCategory
      )}&item=${encodeURIComponent(selectedItem)}`;
    }
  });