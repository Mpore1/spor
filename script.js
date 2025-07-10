// Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Live scores ticker data
const scoresTicker = document.getElementById('scores-ticker');

const liveScores = [
  'FiFa Club World Cup: Paris Saint Germain 4 VS 0 Real Madrid [FT]',
  'Women UERO: England 4 VS 0 Netherlands [FT]',
  'Women UERO: France 4 VS 1 Wales [FT]',
  'Team G 1 - 1 Team H',
  'Team I 4 - 0 Team J'
];

// Create multiple spans to loop the ticker smoothly
function createTicker() {
  scoresTicker.innerHTML = '';
  for (let i = 0; i < liveScores.length * 2; i++) {
    const span = document.createElement('span');
    span.textContent = liveScores[i % liveScores.length];
    scoresTicker.appendChild(span);
  }
}

createTicker();
const searchInput = document.getElementById('searchInput');
const newsCards = document.querySelectorAll('.news-card');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();

  newsCards.forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    const content = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(query) || content.includes(query)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Load preference on page load
window.addEventListener('load', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const newsletterMessage = document.getElementById('newsletterMessage');

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    newsletterMessage.style.color = 'lightgreen';
    newsletterMessage.textContent = 'Thank you for subscribing!';
    emailInput.value = '';
    // Here you can add backend integration to save the email
  } else {
    newsletterMessage.style.color = 'salmon';
    newsletterMessage.textContent = 'Please enter a valid email address.';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
// Sample team data with info and news
const teamsData = {
  "Manchester United": {
    name: "Manchester United",
    description: "Manchester United keen for finishing the deal of bryan Mbeumo from Brentford",
    latestNews: [
      "Manchester United players returned in training for preparing Pre-season matches new players like Cunha and Leon also are with others.",
      "As also Garnacho,Rashford,Sancho are expected to leave the club since they're not allowed to train with other players"
    ]
  },
  "Arsenal": {
    name: "Arsenal",
    description: "Arsenal is on transfer market for trying to sign different players like Gyokeres, Madueke and Eze.",
    latestNews: [
      "Arsenal players also returned in training to prepare pre-season matches.",
      "Mikel alteta (Head Coach) is trying his best to build arsenal that be able to win Premier League title next season"
    ]
  },
  "Real Madrid": {
    name: "Real Madrid",
    description: "Real Madrid last night were eliminated from Fifa Club World Cup after being defeated by Paris Saint Germain 4:0. ",
    latestNews: [
      "Real Madrid is expected to return on Market for searching another Defender or Midfierder to strenghten their Team so that they can compete next season"

    ] 
  }
};

// Populate dropdown team list dynamically
const teamList = document.getElementById('teamList');

Object.keys(teamsData).forEach(teamName => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = "#";
  a.textContent = teamName;
  a.addEventListener('click', (e) => {
    e.preventDefault();
    showTeamInfo(teamName);
    // Close dropdown on mobile
    document.querySelector('.dropbtn').classList.remove('active');
  });
  li.appendChild(a);
  teamList.appendChild(li);
});

// Function to display team info or no news message
function showTeamInfo(teamName) {
  const teamContent = document.getElementById('teamContent');
  const team = teamsData[teamName];

  if (!team) {
    teamContent.innerHTML = `<p>Sorry, there is no latest news for this team.</p>`;
    return;
  }

  let newsHtml = '';
  if (team.latestNews.length > 0) {
    newsHtml = '<ul>' + team.latestNews.map(news => `<li>${news}</li>`).join('') + '</ul>';
  } else {
    newsHtml = '<p>Sorry, there is no latest news for this team.</p>';
  }

  teamContent.innerHTML = `
    <h4>${team.name}</h4>
    <p>${team.description}</p>
    <h5>Latest News:</h5>
    ${newsHtml}
  `;

  // Scroll to the team info section smoothly
  document.getElementById('teamInfo').scrollIntoView({ behavior: 'smooth' });
}

// Optional: Toggle dropdown on mobile when clicking dropbtn
const dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('active');
});
//transition news codes here
const heroTitles = [
  "Latest Sports News",
  "Match Highlights",
  "Upcoming Events"
];

const heroSubtitles = [
  "Stay updated with the latest sports news",
  "Watch the best moments from recent games",
  "Don't miss out on upcoming matches"
];

const heroTitleEl = document.querySelector('.hero-title');
const heroSubtitleEl = document.querySelector('.hero-subtitle');

let currentIndex = 0;

function updateHeroText() {
  heroTitleEl.textContent = heroTitles[currentIndex];
  heroSubtitleEl.textContent = heroSubtitles[currentIndex];
  currentIndex = (currentIndex + 1) % heroTitles.length;
}

// Update text every 6.6 seconds to roughly sync with CSS animation (20s / 3)
setInterval(updateHeroText, 6600);

// Initialize text
updateHeroText();