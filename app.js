const freelancerList = document.getElementById("freelancer-list");
const averagePriceSpan = document.getElementById("average-price");

const names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Editor"];

function generateFreelancer() {
  return {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: Math.floor(Math.random() * 50) + 30
  };
}

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

function updateDisplay() {
  freelancerList.innerHTML = freelancers.map(freelancer => `
    <div class="freelancer-card">
      <div><strong>${freelancer.name}</strong></div>
      <div>${freelancer.occupation}</div>
      <div>$${freelancer.price}</div>
    </div>
  `).join("");

  const total = freelancers.reduce((sum, f) => sum + f.price, 0);
  const average = total / freelancers.length;
  averagePriceSpan.textContent = average.toFixed(2);
}

function addFreelancer() {
  freelancers.push(generateFreelancer());
  updateDisplay();
}

updateDisplay();
setInterval(addFreelancer, 3000);
