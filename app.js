window.onload = function(){
    document.getElementById("addEmbed").addEventListener("click", function(){
        console.log("addEmbedButton clicked")
        var embeddiv = document.getElementById("embeds");
        var embed = document.createElement("div");
        embed.className = "embed";

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

        embeddiv.appendChild(embed);
    });
}