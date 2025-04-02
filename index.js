const state = {
  taskList: [],
};

//DOM Opertaions
//query selector is used for converting json to html (or) JS to HTML.
const taskModal = document.querySelector(".task__modal__body");
const taskContents = document.querySelector(".task__contents");


//console.log(taskContents);
//console.lod(taskModal);

const htmlTaskContent = ({id, title, description, type, url }) => 
  <div class="col-md-6 col-lg-4 mt-3" key='${id}' >
    <div class='card shadow-sm task__card'>

      <div class='card-header d-flex justify-content-end task__card__header'>
         <button type='button' class='btn btn-outline-info mr-1.5' name= '${id}' onclick="editTask.apply(this, arguments)"> 
              <i class='fas fa-pencil-alt name=${id}'></i>
         </button>
         <button type='button' class='btn btn-outline-danger mr-1.5' name='${id}' onclick="deletetask.apply(this, arguments)"> 
              <i class='fas fa-trash-alt name=${id}'></i>
         </button>
      </div>
      <div class='card-body'>
        ${
          // url &&
          // <img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />
          url
          ?<img width='100%' src="${url}" alt='Card Image' class='card-img-top md-3 rounded-lg' />
          :<img width='100%' src="https://plus.unsplash.com/premium_photo-1686777542997-b48271320758?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D" alt='Card Image' class='card-img-top md-3 rounded-lg' />
        }
        <h4 class='card=title task__card__title'>${title}</h4>
        <p class='description trim-3-lines text-muted'>${description}</p>
        <div class='tags text-white d-flex flex-wrap'>
          <span class='badge bg-primary m-1'>${type}</span>
      </div>
    </div>
    <div class='card-footer'>
          <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask" onclick='opentask.apply(this, arguments)' id='${id}'>Open Task</button>
    </div>
  </div>
</div>  
;

// Modal Body on >> clk of Open Task
const htmlModalContent = ({id, title, description, url }) => {
  const date = new Date(parseInt(id));
  return `
  <div id='${id}'>
  ${
    // url &&
    // <img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />
    url
    ? <img width='100%' src='${url}' alt='Card Image' class='card-img-top md-3 rounded-lg'  />
    : <img width='100%' src="https://tse1.mm.bing.net/th?id=OIP.F00dCf4bXxX0J-qEEf4qIQHaD6&pid=Api&rs=1&c=1&qlt=95&w=223&h=117" alt='Card Image' class='card-img-top md-3 rounded-lg' />
  }
  <strong class='text-muted text-sm'>Created on: ${date.toDateString()}</strong>
  <h2 class='my-3'>${title}</h2>
  <p class='text-muted'>${description}</P>
  </div>
 ` ;
};

const updateLocalstorage = () => {
  localStorage.setItem(
    "task",
    //method to convert json to string
    JSON.stringify({
      tasks: state.taskList,
    })
  );
};

//Load Initialgit 

const loadInitialData = () => {
  const localStoragecopy = JSON.parse(localStorage.task);

  if (localStoragecopy) state.tasklist = localStoragecopy.tasks;

  state.taskList.map((cardDate) => {
    taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
  });
};


/*
var date = new Date();
console.log(Date.now());
VM214:2 1742719784682 --> always you get a new id. So, we get store the date as an ID always
 */
//when we update or when we edit .. we need to save

const handleSubmit = (event) => {
  //console.log("event triggered")
  const id = `${date.now()}`;
  const input = {
    url: document.getElementById("imageUrl").value,
    title: document.getElementById("taskTitle").value,
    type: document.getElementById("tags").value,
    description: document.getElementById("taskDescription").value,
  };
  if (input.title === " " || input.type === " " || input.description === " ") {
    return alert("Please fill the necessary fields :-)");
  }

  //taskContents.innerAdjacentHTML(

  taskContents.insertAdjacentHTML( "beforeend", htmlTaskContent({...input, id }));
  state.tasklist.push({  ...input, id});

  updateLocalstorage();
};

//Opentask

const openTask = (e) => {
  if (!e) e = window.Event;

  const getTask = state.tasklist.find(({  id  }) => id === e.target.id);
  taskModal.innerHTML = htmlModalCOntent(getTask);
};

//delete task
const deletetask = (e) => {
  if (!e) e = window.Event;

  const targetId = e.target.getAttribute("name");
  const type = e.target.tagName;
  const removeTask = state.taskList.filter(({ id }) => id !== targetId);
  updateLocalstorage();

  if (type === "BUTTON") {

    return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode
    );
  } else if (type === "I") {
    return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode.parentNode
    );
  }
};

//edit task
const editTask = (e) => {
  if (!e) e - window.event;
}