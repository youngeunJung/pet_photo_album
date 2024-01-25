var count = 1;

window.onscroll = function(e) {
    console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
    
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        var addContent = document.createElement("div");
        addContent.classList.add("section");
        // addContent.className= "box123";
        ++count;

        addContent.innerHTML =
        `<label for="upload" class="uBox">이미지 첨부</label>
        <input type="file" class="btn-file" id="upload">`
        
    document.querySelector('.section').after(addContent);
        
    }
}