const section = document.querySelector('section');


const fillPage = async () => {
    const profileImage = './img/murky.jpg';
    const userName = 'Mathias Lando';
    const description = 'This is a single test.'
    const content = './img/img.png';
    
    await waitThreeSec();

    for (let index = 0; index < 10; index++) {

        section.insertAdjacentHTML("beforeend", buildPublication(profileImage, userName, description, content));
    
    }
    
};

const waitThreeSec = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
};

const buildPublication = (profileImage, userName, description, content) => {
    return `<div class="public">
    <div class="pu">
        <div class="per-img">
            <img src="${profileImage}" alt="">
        </div>
        <h1>${userName}</h1>
    </div>
    <div class="text">
        <p>
        ${description}
        </p>
    </div>
    <div class="pub-img">
        <img src="${content}" alt="">
    </div>
    </div>`;
};

fillPage();