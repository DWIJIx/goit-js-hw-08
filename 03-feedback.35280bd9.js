const e=document.querySelector(".feedback-form");!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&console.log(e)}();const t={};e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.35280bd9.js.map
