const state = {
    taskList: []
};

//DOM Opertaions
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

//console.log(taskContents);
//console.lod(taskModal);

const htmlTaskContent = ({id, title, description, type, url }) => {};
  <div class="col-md-6 col-lg-4 mt-3" id=${id} >
    <div class='card shadow-sm task__card'>
      <div class='card-header d-flex justify-content-end task__card__header'>
         <button type='button' class='btn btn-outline-info mr-1.5' name=${id}> 
              <i class='fas fa-pencil-alt name=${id}'></i>
         </button>
         <button type='button' class='btn btn-outline-danger mr-1.5' name=${id}> 
              <i class='fas fa-trash-alt name=${id}'></i>
         </button>
      </div>
    </div>

    <div class='card'>
    </div>
  </div>