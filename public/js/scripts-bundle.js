$(document).ready(function(){function o(o){$.each(o,function(o,e){var a=i(e);$(".submissions").append(a)})}function e(o){var e=[];$.each(o,function(o,a){var n={location:a.location,lat:a.lat,"long":a["long"],races:[]};e.push(n)}),e=_.uniqBy(e,"location"),$.each(o,function(o,a){var n=a.location,s=a.race;$.each(e,function(o,e){n===e.location&&_.indexOf(e.races,s)===-1&&e.races.push(s)})}),a(e)}function a(o){o=GeoJSON.parse(o,{Point:["lat","long"],include:["race","location"]}),t.on("load",function(){t.addSource("memorials",{type:"geojson",data:o}),t.addLayer({id:"memorialSubmissions",source:"memorials",type:"circle",paint:{"circle-radius":{stops:[[1,10],[8,10],[16,9]]},"circle-color":"#FBD44B","circle-opacity":{property:"opacity",stops:[[0,0],[1,1]]}}})})}$(".yes-btn #see-form, .map-wrapper h1").click(function(){$("#form-wrapper").addClass("visible"),$("#see-form, .map-wrapper h1").hide()}),$(".close").click(function(){$("#form-wrapper").removeClass("visible"),$("#see-form, .map-wrapper h1").show()});var n,s,t=new mapboxgl.Map({container:"map",center:[-96.9785,32.8924],zoom:9,style:"http://maps.dallasnews.com/styles.json"});t.scrollZoom.disable(),t.addControl(new mapboxgl.Geocoder),mapboxgl.accessToken="pk.eyJ1IjoibWFjbWFuIiwiYSI6ImVEbmNmZjAifQ.zVzy9cyjNT1tMYOTex51HQ",t.addControl(new mapboxgl.Navigation),t.on("mousemove",function(o){var e=t.queryRenderedFeatures(o.point,{layers:["memorialSubmissions"]});t.getCanvas().style.cursor=e.length?"pointer":""});var i=Handlebars.compile($("#submission").html());$.getJSON("js/data.json",function(a){n=a,o(n),e(n)}),t.on("click",function(o){s=o.lngLat;var e,a=[s.lng,s.lat],n="<p>Would you like to add a memorial submission here?</p><a class='yes-btn btn btn-primary btn-sm'>Yes</a><a class='no-btn btn btn-default btn-sm'>No</a>",i=t.queryRenderedFeatures(o.point,{layers:["memorialSubmissions"]});if(i.length){var r=i[0];e=(new mapboxgl.Popup).setLngLat(r.geometry.coordinates).setHTML("<h5><strong>"+r.properties.location+"</strong></h5>"+n).addTo(t)}else e=(new mapboxgl.Popup).setLngLat(a).setHTML("This location has no submissions. Would you like to add one?").addTo(t)});var r=new Date,l=r.getFullYear();$(".copyright").text(l)});
//# sourceMappingURL=scripts-bundle.js.map
