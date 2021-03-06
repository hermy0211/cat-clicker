$(document).ready(function() {
  var data = {
    currentCat: null,
    // Array of object of cats
    cats: [
      {
        name: "First Cat",
        counter: 0,
        url: "img/cat01.jpg"
      },
      {
        name: "Second Cat",
        counter: 0,
        url: "img/cat02.jpg"
      },
      {
        name: "Third Cat",
        counter: 0,
        url: "img/cat03.jpg"
      }
    ]
  };

  var octopus = {
    //
    init: function() {
      data.currentCat = data.cats[0];

      catImageView.init();
      catListView.init();
      admin.init();
    },

    getCurrentCat: function() {
      return data.currentCat;
    },

    getCats: function() {
      return data.cats;
    },

    setCurrentCat: function(cat) {
      data.currentCat = cat;
    },

    updateCounter: function() {
      data.currentCat.counter++,
      catImageView.render();
    },

    updateValues: function() {
      var newName = $('.name').val();
      var newUrl = $('.url').val();
      var newCounter = $('.clicks').val();

      if (!newName == false) {
        data.currentCat.name = newName;
      }
      if (!newUrl == false) {
        data.currentCat.url = newUrl;
      }
      if (!newCounter == false) {
        data.currentCat.counter = newCounter;
      }

      catImageView.render();
      catListView.render();
    }
  };

  var catImageView = {
    // Initialize items from the DOM
    init: function() {
      this.counterText = $('.counter');
      this.title = $('.image-title');
      this.image = $('.cat-image');

      // Update counter when the cat is clicked
      this.image.click(function() {
          octopus.updateCounter();
        }
      );

      this.render();
    },

    // Update DOM elements with the values from the current cat
    render: function() {
      var currentCat = octopus.getCurrentCat();
      this.counterText.html(currentCat.counter);
      this.title.html(currentCat.name);
      this.image.attr('src', currentCat.url);
    }
  };

  var catListView = {
    // Initialize items
    init: function() {
      this.sidebar = $('.cat-list-items');
      this.render();
    },

    render: function() {
      var cat, elem, i;
      var cats = octopus.getCats();

      this.sidebar.html('');

      for (i=0; i<cats.length; i++) {
        cat = cats[i];
        elem = $("<li></li>").html(cat.name);
        elem.click((function(cat) {
            return function() {
                octopus.setCurrentCat(cat);
                catImageView.render();
            };
        })(cat));

        this.sidebar.append(elem);
      }
    }
  }

  var admin = {
    init: function() {
      // Initialize admin button
      this.adminBtn = $('.admin-button');

      $('.form').hide();

      this.adminBtn.click(function() {
        $('.form').toggle();
      });

      // Initialize submit button
      $(document).on("click", ".submit-button", function(){
        octopus.updateValues();
        admin.clearValues();
      });
    },

    clearValues: function() {
      $('.name').val('');
      $('.url').val('');
      $('.clicks').val('');
    }
  }

  octopus.init();
});
