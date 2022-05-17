function openModal (petName){
  console.log(petName);
  switch(petName) {
    case 'katrine':
      const katDiv = document.createElement('div');
      katDiv.style.display = "block";
      katDiv.classList.add('modal')
      katDiv.innerHTML =`
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="modal-content-card">
          <div>
          <img src="assets/pets-katrine.png" alt="pets-katrine">
          </div>
          <div>
            <h3>Katrine</h3>
            <h4>Cat - British Shorthair</h4>
            <p>
              Katrine is a beautiful girl. She is as soft as the <br>finest velvet with a thick lush fur.
              Will love <br>you until the last breath she takes as <br>long as you are the one.
                She is picky about her <br>affection. She loves cuddles and to stretch into <br>your hands
                  for
                  a deeper relaxations.
            </p>
            </div>
            </div>
        </div>`
      document.body.appendChild(katDiv)

      // When the user clicks on <span> (x), close the modal
      let katSpan = document.getElementsByClassName("close")[0];
      katSpan.onclick = function() {
        katDiv.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target === katDiv) {
          katDiv.style.display = "none";
        }
      }
      break;

    case 'jennifer':
      const jenDiv = document.createElement('div');
      jenDiv.style.display = "block";
      jenDiv.classList.add('modal')
      jenDiv.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="modal-content-card">
          <div>
          <img src="assets/pets-jennifer.png" alt="pets-jennifer">
          </div>
          <div>
            <h3>Jennifer</h3>
            <h4>Dog - Labrador</h4>
            <p>
              Jennifer is a sweet 2 months old Labrador that <br> is patiently waiting to find a new
              forever
              <br> home.
                This girl really enjoys being able to go <br> outside to run and play, but won't hesitate to
                  <br> play up a
                    storm in the house if she has all of <br> her favorite toys.
            </p>
            </div>
            </div>
        </div>`
      document.body.appendChild(jenDiv)
      let jenSpan = document.getElementsByClassName("close")[0];
      jenSpan.onclick = function() {
        jenDiv.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target === jenDiv) {
          jenDiv.style.display = "none";
        }
      }
      break;

    case 'woody':
      const woodyDiv = document.createElement('div');
      woodyDiv.style.display = "block";
      woodyDiv.classList.add('modal')
      woodyDiv.innerHTML = `
        <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-content-card">
          <div>
            <img src="assets/pets-woody.png" alt="pets-woody">
          </div>
          <div>
            <h3>Woody</h3>
            <h4>Dog - Golden Retriever</h4>
            <p>
              Woody is a handsome 3 1/2 year old boy. <br>
              Woody does know basic commands and is a <br> smart pup.
              Since he is on the stronger side, he <br> will learn a lot from your training.
                Woody will <br>be happier when he finds a new family that <br> can spend a lot
                  of
                  time with him.
            </p>
          </div>
        </div>
      </div>`
      document.body.appendChild(woodyDiv);
      let woodySpan = document.getElementsByClassName("close")[0];
      woodySpan.onclick = function() {
        woodyDiv.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target === woodyDiv) {
          woodyDiv.style.display = "none";
        }
      }
      break;
    default:
  }

}



