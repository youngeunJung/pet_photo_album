// upload js
var uploadBox = document.querySelectorAll('.uBox');
var inputFile = document.querySelector('.btn-file');
var btnUpload = document.querySelector('.btn-upload');

for(let i = 0; i < uploadBox.length; i++){      //이 문제를 해결하려면 루프 선언 let대신 키워드를 사용할 수 있습니다 . 
                                                ///var이런 방식으로 각 반복마다 새 i변수가 생성되고 
                                                //이벤트 리스너 클로저는 다음의 올바른 값을 캡처합니다 i.

    // 박스 안에 Drag 들어왔을 때
    uploadBox[i].addEventListener('dragenter', function(e) {
        console.log("()()()(()()())()(", uploadBox[i]);
        console.log('dragenter');
    });

    // 박스 안에 Drag를 하고 있을 때
    uploadBox[i].addEventListener('dragover',function(e){
        e.preventDefault();
        console.log('dragover');
        
        var valid = e.dataTransfer.types.indexOf('Files') >= 0;
        
        if(!valid){
            this.style.backgroundColor = 'yellow';   //파일이 아닌 것이 drag 되었을 때
        }else{
            this.style.backgroundColor = 'green';
        }
    });
    
    // 박스 밖으로 Drag가 나갈 때
    uploadBox[i].addEventListener('dragleave', function(e){
        console.log('dragleave');
        
        this.style.backgroundColor = 'white';
    });
    
    // 박스 안에서 Drag를 Drop 했을 때
    uploadBox[i].addEventListener('drop', function(e){
        console.log("____________-", uploadBox[i]);
        console.log("__________", i);
        
        e.preventDefault();         //일반적으로 브라우저 화면에 파일을 드롭하게 되면, 브라우저 기본 동작에 의해 새 창이 뜨는 이슈가 발생한다.
        console.log('drop');        // 따라서, 해당 동작이 일어나지 않게 하기 위해서는 dragover와 drop 이벤트에서 기본 동작을 막아줘야 한다.
        this.style.backgroundColor = 'red';
        
        // console.dir(e.dataTransfer);
        console.log(e.dataTransfer);
        
        var data = e.dataTransfer.files[0];
        console.log("dddddd", data);
        console.log("ttttt", data.type);
        
        if(!isImage(data)){
            console.log('Image 파일만 업로드 할 수 있습니다.');
            return;
        }
        
        const reader = new FileReader();     //FileReader 공부!! , js this 공부!!!
        
        reader.addEventListener('load', (e) => {
            const img = document.createElement('img');
            // img.className.add('thumbnail');
            img.src = e.target?.result;

            // console.log("----------", uploadBox[i]);
    
            uploadBox[i].append(img);        
        });
    
        reader.readAsDataURL(data);
        
        // this.innerHTML = data.name;
    });
}

function isImage(file){
    return file.type.indexOf('image') >= 0;
}

var count = 1;

window.onscroll = function(e) {
    console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
    
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        var addContent = document.createElement("div");
        addContent.classList.add(`section`);
        addContent.classList.add(`add${count}`);
        
        // addContent.className= "box123";

        addContent.innerHTML =
        `
        <input type="radio" name="slide${count}" id="slide01${count}" checked>
        <input type="radio" name="slide${count}" id="slide02${count}">
        <input type="radio" name="slide${count}" id="slide03${count}">

        <div class="slidewrap">
            <ul class="slidelist">
                <li>
                    <div class="upload-box">
                        <label for="upload" class="uBox${count}">이미지 첨부</label>
                        <input type="file" class="btn-file" id="upload">
                        <input placeholder="내용을 입력하세요">
                    </div>
                </li>
                <li>
                    <div class="upload-box">
                        <label for="upload" class="uBox${count}">이미지 첨부</label>
                        <input type="file" class="btn-file" id="upload">
                        <input placeholder="내용을 입력하세요">
                    </div>
                </li>
                <li>
                    <div class="upload-box">
                        <label for="upload" class="uBox${count}">이미지 첨부</label>
                        <input type="file" class="btn-file" id="upload">
                        <input placeholder="내용을 입력하세요">
                    </div>
                </li>
                <div class="slide-control">
                    <div class="control01">
                        <label for="slide03${count}" class="left">왼쪽</label>
                        <label for="slide02${count}" class="right">오른쪽</label>
                    </div>
                    <div class="control02">
                        <label for="slide01${count}" class="left">왼쪽</label>
                        <label for="slide03${count}" class="right">오른쪽</label>
                    </div>
                    <div class="control03">
                        <label for="slide02${count}" class="left">왼쪽</label>
                        <label for="slide01${count}" class="right">오른쪽</label>
                    </div>
                </div>
            </ul>
        </div>
    </div>
    `
    if(count == 1){
        document.querySelector('.section').after(addContent);
    }else{
        document.querySelector(`.add${count-1}`).after(addContent);
    }
        
    var uploadBox1 = document.querySelectorAll(`.uBox${count}`);

    for(let i = 0; i < uploadBox1.length; i++){      //이 문제를 해결하려면 루프 선언 let대신 키워드를 사용할 수 있습니다 . 
        ///var이런 방식으로 각 반복마다 새 i변수가 생성되고 
        //이벤트 리스너 클로저는 다음의 올바른 값을 캡처합니다 i.

            // 박스 안에 Drag 들어왔을 때
            uploadBox1[i].addEventListener('dragenter', function (e) {
                console.log("()()()(()()())()(", uploadBox[i]);
                console.log('dragenter');
            });

            // 박스 안에 Drag를 하고 있을 때
            uploadBox1[i].addEventListener('dragover', function (e) {
                e.preventDefault();
                console.log('dragover');

                var valid = e.dataTransfer.types.indexOf('Files') >= 0;

                if (!valid) {
                    this.style.backgroundColor = 'yellow';   //파일이 아닌 것이 drag 되었을 때
                } else {
                    this.style.backgroundColor = 'green';
                }
            });

            // 박스 밖으로 Drag가 나갈 때
            uploadBox1[i].addEventListener('dragleave', function (e) {
                console.log('dragleave');

                this.style.backgroundColor = 'white';
            });

            // 박스 안에서 Drag를 Drop 했을 때
            uploadBox1[i].addEventListener('drop', function (e) {
                console.log("____________-", uploadBox[i]);
                console.log("__________", i);

                e.preventDefault();         //일반적으로 브라우저 화면에 파일을 드롭하게 되면, 브라우저 기본 동작에 의해 새 창이 뜨는 이슈가 발생한다.
                console.log('drop');        // 따라서, 해당 동작이 일어나지 않게 하기 위해서는 dragover와 drop 이벤트에서 기본 동작을 막아줘야 한다.
                this.style.backgroundColor = 'red';

                // console.dir(e.dataTransfer);
                console.log(e.dataTransfer);

                var data = e.dataTransfer.files[0];
                console.log("dddddd", data);
                console.log("ttttt", data.type);

                if (!isImage(data)) {
                    console.log('Image 파일만 업로드 할 수 있습니다.');
                    return;
                }

                const reader = new FileReader();     //FileReader 공부!! , js this 공부!!!

                reader.addEventListener('load', (e) => {
                    const img = document.createElement('img');
                    // img.className.add('thumbnail');
                    img.src = e.target?.result;

                    // console.log("----------", uploadBox[i]);

                    uploadBox1[i].append(img);
                });

                reader.readAsDataURL(data);

                // this.innerHTML = data.name;
            });
        }

        ++count;
    }
}