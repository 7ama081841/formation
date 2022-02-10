var db = requirejs(["./db"], function (db) {
    console.log(db);
});

var add_post = document.getElementById("add_post");
var message = document.getElementById("message");
var share = document.getElementById("share");
var textarea = document.querySelector("textarea");
var file = document.getElementById("customFile");

var image = null;
var video = null;

db.getCollection("posts").add([
    { username: "obha", email: "obha@gmail.com" },
    { username: "mohamed.ch", email: "mohammed.ch@gmail.com" },
]);

file.addEventListener("change", (event) => {
    const file = event.target.files[0];

    const mediaType = file.type;

    if (mediaType.includes("video")) {
        addVideo(file);
    } else if (mediaType.includes("image")) {
        addImage(file);
    }
});

function addVideo(file) {
    video = URL.createObjectURL(file);
}

function addImage(file) {
    let reader = new FileReader();
    reader.onload = () => {
        image = reader.result;
    };
    reader.readAsDataURL(file);
}

var postss = [
    // {
    //     _id: `${Date.now()}`,
    //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.",
    //     media: { photo: "", video: "" },
    //     postedBy: "byme",
    //     comments: [
    //         {
    //             commenter: "Ahmed",
    //             UserPhoto: "https://picsum.photos/50/50",
    //             commentaire: "mon commentaire",
    //         },
    //         {
    //             commenter: "Ahmed",
    //             UserPhoto: "https://picsum.photos/50/50",
    //             commentaire: "mon commentaire",
    //         },
    //     ],
    //     UserPhoto: "https://picsum.photos/50/50",
    // },
    // {
    //     _id: `${Date.now()}`,
    //     body: "hiiii",
    //     media: { photo: "", video: "" },
    //     postedBy: "byme",
    //     comments: [],
    //     UserPhoto: "https://picsum.photos/50/50",
    // },
    // {
    //     _id: `${Date.now()}`,
    //     body: "hiiii",
    //     media: { photo: "", video: "" },
    //     postedBy: "mohamed",
    //     comments: [],
    //     UserPhoto: "https://picsum.photos/50/50",
    // },
];

var getposts = () => {
    add_post.innerHTML = "";

    postss.forEach((item) => {
        const { UserPhoto, postedBy, body, media, _id, comments } = item;

        add_post.innerHTML += `
        <div id="${_id} " class="card gedf-card">
            
            <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex justify-content-between align-items-center">
                    <div class="mr-2">
                            <img class="rounded-circle" width="45" src=${
                                UserPhoto
                                    ? UserPhoto
                                    : "https://picsum.photos/50/50"
                            } alt="">
                        </div>
                        <div class="ml-2">
                        <div class="h5 m-0">${postedBy}</div>
                        <div class="h7 text-muted">Miracles Lee Cross</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body d-flex flex-column">
            <p class="card-text">
            ${body}
            </p>
                ${
                    media?.photo
                        ? `<img src='${media?.photo}' style="width: -webkit-fill-available;" height="auto" />`
                        : ""
                }  
                ${
                    media?.video
                        ? `<video src='${media?.video}' style="width: -webkit-fill-available;" height="auto" controls ><video/>`
                        : ""
                } 
            </div>
            <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" id="collapseExample${_id}" data-target="#collapseExample${_id}" aria-expanded="false" aria-controls="collapseExample" style=" background: none;color: #b5acac;border: none;width: 100%; padding: 0;">
                Voir Commentaires
            </button>
            </p>
            <div class="collapse" id="collapseExample${_id}">
                <ul class="list-group">
                    ${comments.map(
                        ({ UserPhoto, commentaire, commenter }) => `
                    <li class="list-group-item">
                    <div class="d-flex">
                    <img class="rounded-circle" width="45" src=${
                        UserPhoto ? UserPhoto : "https://picsum.photos/50/50"
                    } alt="">
                    <p style="margin-left: 13px;">${commenter}</p>
                    </div>
                    ${commentaire}
                    </li>
                    `
                    )}
                </ul>
            </div>

            <div class="card-footer">
                <div class="input-group">
                    <form onsubmit='prevent(event)' class="commentform d-flex w-100">
                        <input type="text" class="form-control" id="comment_${_id}" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="button" onclick='comment("${_id}")' id="button-addon2">
                                <i class="fa fa-comment"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    });
};

const addPost = (e) => {
    e.preventDefault();

    const obj = {
        _id: `${Date.now()}`,
        body: textarea.value,
        media: { photo: image, video },
        UserPhoto: "https://picsum.photos/50/50",
        postedBy: "byme",
        comments: [],
    };

    postss.push(obj);

    getposts();
};

const comment = (id) => {
    id;
};

function createComment(postId, comment) {}
// handelImage(file, (url) => {
//     let obj = {
//         _id: `${Date.now()}`,
//         body: textarea.value,
//         media: { photo: url, video: url },
//         postedBy: "byme",
//         comments: [],
//         UserPhoto: "https://picsum.photos/50/50",
//     };

//     addPost(obj);
// });
