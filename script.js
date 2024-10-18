document.getElementById('getWeatherBtn')?.addEventListener('click', function(){
  const city = document.getElementById('cityInput')?.value;
  const apiKey = 'cd4b9d909b00ce3f22450dfdec4fb0e7'  // API KEY openweathermap
  const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  fetch(apiUrl)
  .then(response => {
      if (!response.ok) {
          throw new Error('Ville introuvable');
      }
      return response.json();
  })
  .then(data => {
      document.getElementById('location').textContent = data.name;
      document.getElementById('temperature').textContent = data.main.temp;
      document.getElementById('description').textContent = data.weather[0].description;
  })
  .catch(error => {
      console.error('Erreur:', error);
      alert('Ville introuvable. Veuillez vérifier le nom de la ville et réessayer.');
  });

})