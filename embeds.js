embedcount = 2;

function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
function numberToWords(num) {
   if(num === 0) return capitalize('zero');
   if(num === 1) return capitalize('one');
   if(num === 2) return capitalize('two');
   if(num === 3) return capitalize('three');
   if(num === 4) return capitalize('four');
   if(num === 5) return capitalize('five');
   if(num === 6) return capitalize('six');
   if(num === 7) return capitalize('seven');
   if(num === 8) return capitalize('eight');
   if(num === 9) return capitalize('nine');
   if(num === 10) return capitalize('ten');
}

function createEmbed(){
      var embeddiv = document.getElementById("accordion");
      var br = document.createElement("br");
      
      var author = document.createElement("div");
      author.className = "author";
      
      var authortxt = document.createElement("input");
      authortxt.className = "authortxt";
      authortxt.type = "text";
      authortxt.placeholder = "Author";
      author.appendChild(authortxt);
      author.appendChild(br);
      author.appendChild(br);
      
      var authorurl = document.createElement("input");
      authorurl.className = "authorurl";
      authorurl.type = "text";
      authorurl.placeholder = "Author URL";
      author.appendChild(authorurl);
      author.appendChild(br);
      author.appendChild(br);
      
      var authoriconurl = document.createElement("input");
      authoriconurl.className = "authoriconurl";
      authoriconurl.type = "text";
      authoriconurl.placeholder = "Author Icon URL";
      author.appendChild(authoriconurl);
      author.appendChild(br);
      author.appendChild(br);

      var body = document.createElement("div");
      body.className = "body";

      var title = document.createElement("input");
      title.className = "title";
      title.type = "text";
      title.placeholder = "Title";
      body.appendChild(title);
      body.appendChild(br);
      body.appendChild(br);

      var description = document.createElement("input");
      description.className = "description";
      description.type = "text";
      description.placeholder = "Description";
      body.appendChild(description);
      body.appendChild(br);
      body.appendChild(br);

      var url = document.createElement("input");
      url.className = "url";
      url.type = "text";
      url.placeholder = "URL";
      body.appendChild(url);
      body.appendChild(br);
      body.appendChild(br);

      var color = document.createElement("input");
      color.className = "color";
      color.type = "text";
      color.placeholder = "Color";
      body.appendChild(color);
      body.appendChild(br);
      body.appendChild(br);

      var fields = document.createElement("div");
      fields.className = "fields";

      var newfield = document.createElement("button");
      newfield.className = "newfield";
      newfield.innerHTML = "New Field";
      fields.appendChild(newfield);
      fields.appendChild(br);
      fields.appendChild(br);

      var images = document.createElement("div");
      images.className = "images";

      var imageurl = document.createElement("input");
      imageurl.className = "imageurl";
      imageurl.type = "text";
      imageurl.placeholder = "Image URL";
      images.appendChild(imageurl);
      images.appendChild(br);
      images.appendChild(br);

      var thumbnailurl = document.createElement("input");
      thumbnailurl.className = "thumbnailurl";
      thumbnailurl.type = "text";
      thumbnailurl.placeholder = "Thumbnail URL";
      images.appendChild(thumbnailurl);
      images.appendChild(br);
      images.appendChild(br);

      var footer = document.createElement("div");
      footer.className = "footer";

      var footertext = document.createElement("input");
      footertext.className = "footertext";
      footertext.type = "text";
      footertext.placeholder = "Footer Text";
      footer.appendChild(footertext);
      footer.appendChild(br);
      footer.appendChild(br);

      var timestamp = document.createElement("input");
      timestamp.className = "timestamp";
      timestamp.type = "text";
      timestamp.placeholder = "Timestamp";
      footer.appendChild(timestamp);
      footer.appendChild(br);
      footer.appendChild(br);

      var footericonurl = document.createElement("input");
      footericonurl.className = "footericonurl";
      footericonurl.type = "text";
      footericonurl.placeholder = "Footer Icon URL";
      footer.appendChild(footericonurl);
      footer.appendChild(br);
      footer.appendChild(br);


      /*
      <div class="panel panel-default">
         <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
               <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Collapsible Group Item #3
               </a>
            </h4>
         </div>
         <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div class="panel-body">
               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
         </div>
      </div>
      */
      var panel_default = document.createElement("div");
      panel_default.className = "panel panel-default";

      var panel_heading = document.createElement("div");
      panel_heading.className = "panel-heading";
      panel_heading.role = "tab";
      panel_heading.id = "heading"+numberToWords(embedcount);

      var panel_title = document.createElement("h4");
      panel_title.className = "panel-title";

      var panel_title_a = document.createElement("a");
      panel_title_a.role = "button";
      $(panel_title_a).attr("data-toggle", "collapse");
      //panel_title_a.data_toggle = "collapse";
      $(panel_title_a).attr("data-parent", "#accordion");
      panel_title_a.href = "#collapse"+numberToWords(embedcount);
      $(panel_title_a).attr("aria-expanded", "false");
      $(panel_title_a).attr("aria-controls", "collapse"+numberToWords(embedcount));
      panel_title_a.className = "collapsed";
      panel_title_a.innerHTML = "Embed "+numberToWords(embedcount);

      var panel_collapse = document.createElement("div");
      panel_collapse.id = "collapse"+numberToWords(embedcount);
      panel_collapse.className = "panel-collapse collapse";
      panel_collapse.role = "tabpanel";
      $(panel_collapse).attr("aria-labelledby", "heading"+numberToWords(embedcount));

      var embed = document.createElement("div");
      embed.className = "panel-body";

      embed.appendChild(author);
      embed.appendChild(br);
      embed.appendChild(body);
      embed.appendChild(br);
      embed.appendChild(fields);
      embed.appendChild(br);
      embed.appendChild(images);
      embed.appendChild(br);
      embed.appendChild(footer);
      embed.appendChild(br);

      panel_title.appendChild(panel_title_a);
      panel_heading.appendChild(panel_title);
      panel_default.appendChild(panel_heading);
      panel_collapse.innerHTML="Hiiiii"
      //panel_collapse.appendChild(embed);
      panel_default.appendChild(panel_collapse);

      embeddiv.appendChild(panel_default);
      reload_js("collapsible.js")
      embedcount += 1;
}