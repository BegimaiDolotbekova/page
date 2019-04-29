
      
      function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('p');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = 1000;
        this.initEvents();
      }
      DropDown.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dd = new DropDown( $('#dd') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-3').removeClass('active');
        });

      });

    
      
      function DropDow(ele) {
        this.ddd = ele;
        this.placeholder = this.ddd.children('p');
        this.opts = this.ddd.find('ul.dropdow > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDow.prototype = {
        initEvents : function() {
          var obj = this;

          obj.ddd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var ddd = new DropDow( $('#ddd') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-2').removeClass('active');
        });

      });

   
      
      function DropDo(ell) {
        this.dddd = ell;
        this.placeholder = this.dddd.children('p');
        this.opts = this.dddd.find('ul.dropdo > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      DropDo.prototype = {
        initEvents : function() {
          var obj = this;

          obj.dddd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var dddd = new DropDo( $('#dddd') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-1').removeClass('active');
        });

      });

    
      
      function Dropd(e) {
        this.n = e;
        this.placeholder = this.n.children('p');
        this.opts = this.n.find('ul.dropd > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
      }
      Dropd.prototype = {
        initEvents : function() {
          var obj = this;

          obj.n.on('click', function(event){
            $(this).toggleClass('active');
            return false;
          });

          obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
          });
        },
        getValue : function() {
          return this.val;
        },
        getIndex : function() {
          return this.index;
        }
      }

      $(function() {

        var n = new Dropd( $('#n') );

        $(document).click(function() {
          // all dropdowns
          $('.wrapper-dropdown-0').removeClass('active');
        });

      });

    // Button background
     var elem = document.getElementById("w");
  
      w.onclick = function () {
  
        if(this.style.backgroundColor )

          this.style.backgroundColor = "";
       
        else

           this.style.backgroundColor = "#29c94e";
     
}

    
     var elem = document.getElementById("q");
  
      q.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

    var elem = document.getElementById("e");
  
      e.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("r");
  
      r.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("t");
  
      t.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("y");
  
      y.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("u");
  
      u.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("i");
  
      i.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("o");
  
      o.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

// ....


var elem = document.getElementById("a");
  
      a.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("s");
  
      s.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("d");
  
      d.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";

        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("f");
  
      f.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("g");
  
      g.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("h");
  
      h.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("j");
  
      j.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("k");
  
      k.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("l");
  
      l.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("z");
  
      z.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("x");
  
      x.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("c");
  
      c.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("v");
  
      v.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("b");
  
      b.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}

var elem = document.getElementById("n");
  
      n.onclick = function (){
  
        if(this.style.backgroundColor)

          this.style.backgroundColor = "";
        else

           this.style.backgroundColor = "#29c94e";
}



// 
// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area")

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)   
  document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}

let uploadProgress = []
let progressBar = document.getElementById('progress-bar')

function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}

function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}

function handleFiles(files) {
  files = [...files]
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
  }
}

function uploadFile(file, i) {
  var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener("progress", function(e) {
    updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
  })

  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      updateProgress(i, 100) // <- Add this
    }
    else if (xhr.readyState == 4 && xhr.status != 200) {
      // Error. Inform the user
    }
  })

  formData.append('upload_preset', 'ujpu6gyk')
  formData.append('file', file)
  xhr.send(formData)
}


  // Api key

//   var coordinates = {lat: 47.212325, lng: 38.933663},
//     popupContent = this.$popupContent.html(),
//     markerImage = 'marker.png',
//     zoom = 15,

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: coordinates,
//         zoom: zoom,
//         disableDefaultUI: true
//     }),

//     infowindow = new google.maps.InfoWindow({
//         content: popupContent
//     }),

//     marker = new google.maps.Marker({
//         position: coordinates,
//         map: map,
//         icon: markerImage
//     });

// $.getJSON("../json/map-style/map-style_colored.json", function(data) {
//     map.setOptions({styles: data});
// });

// google.maps.event.addListener(infowindow,'closeclick',function(){
//     marker.setAnimation(google.maps.Animation.BOUNCE);
// });

// marker.addListener('click', function () {
//     marker.setAnimation(null);
// });

// marker.addListener('click', function() {
//     infowindow.open(map, marker);
// });

// infowindow.open(map, marker);



// geolocation

function success(position) {
  var s = document.querySelector('#status');
  
  if (s.className == 'success') {
    // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
    return;
  }
  
  // s.innerHTML = "found you!";
  // s.className = 'success';
  
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcanvas';
  mapcanvas.style.height = '580px';
  mapcanvas.style.width = '1030px';
    
  document.querySelector('article').appendChild(mapcanvas);
  
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  
  var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  });
}
function error(msg) {
  var s = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
  
  // console.log(arguments);
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}

// end
