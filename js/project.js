const requestURL = '../projects.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = processData;
    
function processData() {
    const data = request.response;
    populateProjectsCardGrid(data);
}

function populateProjectsCardGrid(data) {
    const projectCardGrid = document.querySelector('.row');

    if (data.length > 0) {
        data.forEach(project => {
            //Create Div Responsive
            const projectDiv = createElement('div', projectCardGrid);
            projectDiv.classList.add("col-12", "col-sm-10", "col-md-6", "col-lg-6", "col-xl-4", "col-xxl-3");

            //Create Card
            const divCard = createElement('div', projectDiv);
            divCard.classList.add("card", "my-2", "px-2");

            //Create Image
            const imgCard = createElement('img', divCard);
            imgCard.src = project.image;

            //Create Card Body
            const cardBody =  createElement('div', divCard);
            cardBody.classList.add('card-body');

            //Create Title 
            const titleCard = createElement('h5', cardBody)
            titleCard.classList.add('card-title');
            titleCard.textContent = project.title;

            //Create Desc
            const descCard = createElement('p', cardBody);
            descCard.classList.add('card-text');

            //Create link Button
            const divbutton = createElement('div', cardBody);
            divbutton.classList.add("float-right");
            const btnlinkCard = createElement('a', divbutton);
            btnlinkCard.textContent = "En savoir plus";
            btnlinkCard.href=project.url;
            btnlinkCard.setAttribute('id','btnRedirect');
            btnlinkCard.classList.add("text-decoration-none");

            if(project.desc.length > 100){
                console.log(project.desc.length)
                descCard.textContent = project.desc.substring(0,100)
                const lastIndexOfSpace = descCard.textContent.lastIndexOf(' ');
                console.log(lastIndexOfSpace)
                if (lastIndexOfSpace === -1) {
                    descCard.textContent = project.desc.substring(0,100) + " ..."
                }else{
                    descCard.textContent = project.desc.substring(0,lastIndexOfSpace) + " ..."
                }
            }else{
                descCard.textContent = project.desc
            }
        });
    }
}

// createElement helper function
function createElement(type, parent, classList) {
    const element = document.createElement(type);
    if (classList !== undefined) {
        typeof classList === 'Array' && classList.length > 0
            ? element.classList.add(...classList)
            : (element.className = classList);
    }
    parent.append(element);
    return element;
}

