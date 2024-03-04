//abstract page js

// document.addEventListener('DOMContentLoaded', function ()
//  {
//     var jsonData = {
//         'General Point': {},
//         'Technical Point': {},
//     };

//     console.log(`==========>>>>`, jsonData)

//     //------------------------------------------------------general data--------------------------------------- 
//     function general_main() {
//         var gen_super_check = document.querySelectorAll('.super_check_gen');
//         gen_super_check.forEach((gen_super_check_value, index) => { // Added 'index' parameter
//             gen_super_check_value.checked = true;
//             gen_super_parent(gen_super_check_value);
//             gen_super_check_value.addEventListener('click', function () {
//                 gen_super_parent(gen_super_check_value);
//             });
//         });
//     }

//     function gen_super_parent(gen_super_check_value) {
//         // gen_super_check_value.checked = true;
//         const note1 = document.querySelectorAll('.' + gen_super_check_value.value + '_note_general');
//         const parent_General_checkboxes = document.querySelectorAll("." + gen_super_check_value.value + "_parent_General_checkboxes"); // Fixed accessing 'value' property
//         if (gen_super_check_value.checked) {

//             if (!jsonData['General Point'][gen_super_check_value.value]) { // Fixed accessing 'value' property
//                 jsonData['General Point'][gen_super_check_value.value] = {}; // Fixed accessing 'value' property
//                 preview_display();
//             }
//             parent_General_checkboxes.forEach(checkbox => {
//                 checkbox.checked = true;
//                 const checkboxValue = checkbox.value;
//                 for_parent_gen(checkbox, gen_super_check_value.value, checkboxValue, gen_super_check_value); // Fixed accessing 'value' property
//                 // custon_chec();
//                 checkbox.addEventListener('change', function () {
//                     for_parent_gen(checkbox, gen_super_check_value.value, checkboxValue, gen_super_check_value); // Fixed accessing 'value' property
//                     // custon_chec();
//                 });
//             });

//             add_note_general(gen_super_check_value, note1);

//         } else {
//             // gen_super_check[index].checked = false;
//             note1.forEach(note_ele => {
//                 note_ele.value = '';
//             });

//             gen_super_check_value.checked = false;
//             parent_General_checkboxes.forEach(checkbox => {
//                 checkbox.checked = false;
//                 const checkboxValue = checkbox.value;
//                 for_parent_gen(checkbox, gen_super_check_value.value, checkboxValue, gen_super_check_value);
//                 checkbox.addEventListener('change', function () {
//                     for_parent_gen(checkbox, gen_super_check_value.value, checkboxValue, gen_super_check_value);
//                 });
//             });
//             delete jsonData['General Point'][gen_super_check_value.value]; // Fixed accessing 'value' property
//             preview_display();
//             // custon_chec();
//         }
//     }

//     function for_parent_gen(checkbox, gen_super_check_value, checkboxValue, gen_super_check_checked) {
//         const checkboxes = document.querySelectorAll('.' + gen_super_check_value + '_' + checkbox.id + '_General_child_checkboxes');
//         const selectboxes = document.querySelectorAll('.' + gen_super_check_value + '_' + checkbox.id + '_General_child_selectboxes');

//         if (checkbox.checked) {
//             // Parent checkbox is checked
//             gen_super_check_checked.checked = true;

//             if (!jsonData['General Point'][gen_super_check_value]) {
//                 jsonData['General Point'][gen_super_check_value] = {};
//                 preview_display();
//             }

//             if (!jsonData['General Point'][gen_super_check_value][checkboxValue]) {
//                 jsonData['General Point'][gen_super_check_value][checkboxValue] = {};
//                 preview_display();
//             }

//             checkboxes.forEach((check2, index) => {
//                 check2.checked = true;
//                 child_data_check_gen(check2, index, gen_super_check_value, checkboxValue, selectboxes, checkbox, gen_super_check_checked);

//                 check2.addEventListener('change', function () {
//                     child_data_check_gen(check2, index, gen_super_check_value, checkboxValue, selectboxes, checkbox, gen_super_check_checked);
//                 });

//                 child_data_select_gen(check2, index, gen_super_check_value, checkboxValue, selectboxes);
//             });
//         } else {
//             // Parent checkbox is unchecked
//             delete jsonData['General Point'][gen_super_check_value][checkboxValue];
//             preview_display();

//             checkboxes.forEach((check2, index) => {
//                 check2.checked = false;
//                 selectboxes[index].disabled = true;
//             });
//         }
//     }
//     function child_data_check_gen(check2, index, gen_super_check_value, checkboxValue, selectboxes, checkbox, gen_super_check_checked) {
//         if (check2.checked) {
//             selectboxes[index].disabled = false;
//             checkbox.checked = true;
//             gen_super_check_checked.checked = true;

//             if (!jsonData['General Point'][gen_super_check_value]) {
//                 jsonData['General Point'][gen_super_check_value] = {};
//                 preview_display();
//             }
//             if (!jsonData['General Point'][gen_super_check_value][checkboxValue]) {
//                 jsonData['General Point'][gen_super_check_value][checkboxValue] = {};
//                 preview_display();
//             }
//             jsonData['General Point'][gen_super_check_value][checkboxValue][check2.value] = selectboxes[index].value;
//             preview_display();
//         }
//         else {
//             delete jsonData['General Point'][gen_super_check_value][checkboxValue][check2.value]
//             preview_display();
//             selectboxes[index].disabled = true;
//         }
//     }

//     function child_data_select_gen(check2, index, gen_super_check_value, checkboxValue, selectboxes) {
//         selectboxes[index].disabled = false;
//         selectboxes[index].addEventListener('change', function () {
//             jsonData['General Point'][gen_super_check_value][checkboxValue][check2.value] = selectboxes[index].value;
//             preview_display();
//         });
//     }

//     // add note code general section
//     function add_note_general(gen_super_check_value, note1) {
//         note1.forEach(note_ele => {
//             note_ele.addEventListener('input', function (event) {
//                 let note_val = event.target.value;
//                 let Add_Note = 'Add_Note';
//                 let Note = 'Note';
//                 if (note_val.length > 0) {
//                     if (gen_super_check_value.checked) {
//                         if (!jsonData['General Point'][gen_super_check_value.value]) {
//                             jsonData['General Point'][gen_super_check_value.value] = {};
//                             // preview_display();
//                         }
//                         if (!jsonData['General Point'][gen_super_check_value.value][Add_Note]) {
//                             jsonData['General Point'][gen_super_check_value.value][Add_Note] = {};
//                             // preview_display();
//                         }
//                         jsonData['General Point'][gen_super_check_value.value][Add_Note][Note] = note_val;
//                         preview_display();
//                     } else {
//                         delete jsonData['General Point'][gen_super_check_value.value];
//                         preview_display();
//                     }

//                 }
//                 else {
//                     delete jsonData['General Point'][gen_super_check_value.value][Add_Note];
//                     preview_display();
//                 }
//             });
//         });
//     }

//     // gen_super_parent();

//     general_main();

//     //custom code general

//     $(document).ready(function () {
//         customjsonforgeneral = { 'custom_general': {} };

//         var $submitforgeneralcustom = $('#subforcustomgeneral');

//         $submitforgeneralcustom.on('click', function () {
//             // $(document).on('click', '#subforcustomgeneral', function () {
//             // Get values from input elements
//             var $parentforgeneral = $('#parentforgeneral');
//             var $keyforgeneral = $('#keyforgeneral');
//             var $valueforgeneral = $('#valueforgeneral');

//             // Create a new object and add it to the 'custom' object
//             if (!customjsonforgeneral['custom_general'][$parentforgeneral.val()]) {
//                 customjsonforgeneral['custom_general'][$parentforgeneral.val()] = {};
//             }
//             customjsonforgeneral['custom_general'][$parentforgeneral.val()][$keyforgeneral.val()] = $valueforgeneral.val();

//             // Check if 'custom' has some customjsonforgeneral after the button click
//             if (Object.keys(customjsonforgeneral['custom_general']).length > 0) {
//                 var htmlContentGeneral = '';

//                 for (const custom_general_super in customjsonforgeneral) {
//                     htmlContentGeneral += `
//             <p>
//                 <div class="card card-body p-0 m-0 border border-danger">
//                     <div class="row">
                
//                         <button class="btn col-xxl-9 col-md-8 col-xl-9 col-lg-8 ms-3" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#${custom_general_super}" aria-expanded="false"
//                             aria-controls="${custom_general_super}">
                    
//                             <span for="${custom_general_super}1"
//                                         class="d-flex justify-content-between">
//                                         <span class="text-dark">${custom_general_super}</span>
//                             </span>

//                         </button>

//                         <div class="col-2 d-flex justify-content-center align-items-center checkbox-wrapper-40 ">                        
//                             <input type="checkbox" style="margin-bottom: 6px;" class="form-check-input super_check_gen" id="${custom_general_super}1" value="${custom_general_super}" />                      
//                         </div>
                
                        
//                     </div>
//                 </div>
//             </p>

//             <div>
//             <div class="collapse show" id="${custom_general_super}">
//             <div class="card card-body">`;

//                     const parent_value = customjsonforgeneral[custom_general_super];

//                     for (const custom_general_parent in parent_value) {
//                         htmlContentGeneral += `
             
//                 <div style="margin-top: 7px;">

//                   <div class="checkbox-wrapper-40 " style="margin-top: 7px;">
//                     <span class="checkbox text-dark fw-bold  fs-6 ">${custom_general_parent}</span>
//                     <label class="fs-6 mr-3" for="${custom_general_super}_${custom_general_parent}">
//                         <input type="checkbox" class="ms-3 mb-1 form-check-input ${custom_general_super}_parent_General_checkboxes" value="${custom_general_parent}" id="${custom_general_super}_${custom_general_parent}">
//                     </label>
//                   </div>
 
//                 </div>`;

//                         const childkey = parent_value[custom_general_parent];

//                         for (const custom_general_child in childkey) {
//                             htmlContentGeneral += `
//                 <div class="row align-items-center pt-1">
//                   <div class="col-md-2 p-0" style="text-align: end;">
//                     <fieldset>

//                     <div class="checkbox-wrapper-40 ">
//                       <label>
//                           <input type="checkbox" class="me-2 form-check-input ${custom_general_super}_${custom_general_super}_${custom_general_parent}_General_child_checkboxes" value="${custom_general_child}" id="${custom_general_super}_${custom_general_child}">
//                       </label>
//                     </div>

//                     </fieldset>
//                   </div>
//                   <div class="col-md-5 p-0" style="text-align: start;">
//                     <span class="form-check-label  mr-3">${custom_general_child}</span>
//                   </div>
//                   <div class="col-md-4 p-0">
//                     <fieldset class="form-group">
//                       <select class="form-select ${custom_general_super}_${custom_general_super}_${custom_general_parent}_General_child_selectboxes"
//                         id="basicSelect" aria-label="Default select example">
//                         <option selected>${childkey[custom_general_child]}</option>
//                       </select>
//                     </fieldset>
//                   </div>
//                 </div>`;
//                         }
//                     }
//                     htmlContentGeneral += `</div></div></div>`; // Close the collapse div for the super
//                 }

//                 // Update the HTML content of 'custom_request_general' after the loop
//                 $('#custom_request_general').html(htmlContentGeneral);
//                 // general_main();

//                 function general_main1() {

//                     var gen_super_check = document.querySelector('#custom_general1');
//                     gen_super_check.checked = true;
//                     gen_super_parent(gen_super_check);
//                     gen_super_check.addEventListener('click', function () {
//                         gen_super_parent(gen_super_check);
//                     });
//                 }

//                 general_main1();

//             }
//         });
//     });

//     // ----------------------------------------------technical start----------------------------------------------

//     // function technical_main() {

//     //   var tec_text_fields = document.querySelectorAll('.super_btn_tec');
//     //   tec_text_fields.forEach((element, index) => {
//     //     tec_super_parent(element, index);
//     //     element.addEventListener('click', function () {
//     //       tec_super_parent(element, index);//call super function on event hit...
//     //     });
//     //   });
//     // }

//     function technical_main() {
//         var tec_super_check = document.querySelectorAll('.super_check_tec');
//         tec_super_check.forEach((tec_super_check_value, index) => { // Added 'index' parameter
//             tec_super_check_value.checked = true;
//             tec_super_parent(tec_super_check_value);
//             tec_super_check_value.addEventListener('click', function () {
//                 tec_super_parent(tec_super_check_value);
//             });
//         });
//     }

//     function tec_super_parent(tec_super_check_value) {
//         const note1 = document.querySelectorAll('.' + tec_super_check_value.value + '_note_technical');
//         const parent_Technical_checkboxes = document.querySelectorAll("." + tec_super_check_value.value + "_parent_Technical_checkboxes"); // Fixed accessing 'value' property
//         if (tec_super_check_value.checked) {
//             if (!jsonData['Technical Point'][tec_super_check_value.value]) { // Fixed accessing 'value' property
//                 jsonData['Technical Point'][tec_super_check_value.value] = {}; // Fixed accessing 'value' property
//                 preview_display();
//             }
//             parent_Technical_checkboxes.forEach(checkbox => {
//                 checkbox.checked = true;
//                 const checkboxValue = checkbox.value;
//                 for_parent_tec(checkbox, tec_super_check_value.value, checkboxValue, tec_super_check_value); // Fixed accessing 'value' property
//                 // custon_chec();
//                 checkbox.addEventListener('change', function () {
//                     for_parent_tec(checkbox, tec_super_check_value.value, checkboxValue, tec_super_check_value); // Fixed accessing 'value' property
//                     // custon_chec();
//                 });
//             });

//             add_note_technical(tec_super_check_value, note1);

//         } else {
//             tec_super_check_value.checked = false;
//             note1.forEach(t123 => {
//                 t123.value = '';
//             });
//             parent_Technical_checkboxes.forEach(checkbox => {
//                 checkbox.checked = false;
//                 const checkboxValue = checkbox.value;
//                 for_parent_tec(checkbox, tec_super_check_value.value, checkboxValue, tec_super_check_value);
//                 checkbox.addEventListener('change', function () {
//                     for_parent_tec(checkbox, tec_super_check_value.value, checkboxValue, tec_super_check_value);
//                 });
//             });
//             delete jsonData['Technical Point'][tec_super_check_value.value]; // Fixed accessing 'value' property
//             preview_display();
//             // custon_chec();
//         }
//     }

//     function for_parent_tec(checkbox, tec_super_check_value, checkboxValue, tec_super_check_checked) {
//         const checkboxes = document.querySelectorAll('.' + tec_super_check_value + '_' + checkbox.id + '_Technical_child_checkboxes');
//         const selectboxes = document.querySelectorAll('.' + tec_super_check_value + '_' + checkbox.id + '_Technical_child_selectboxes');

//         if (checkbox.checked) {
//             tec_super_check_checked.checked = true;
//             if (!jsonData['Technical Point'][tec_super_check_value]) {
//                 jsonData['Technical Point'][tec_super_check_value] = {};
//                 preview_display();
//             }

//             if (!jsonData['Technical Point'][tec_super_check_value][checkboxValue]) {
//                 jsonData['Technical Point'][tec_super_check_value][checkboxValue] = {};
//                 preview_display();
//             }

//             checkboxes.forEach((check2, index) => {
//                 check2.checked = true;
//                 child_data_check_tec(check2, index, tec_super_check_value, checkboxValue, selectboxes, checkbox, tec_super_check_checked);//call child function 
//                 // custon_chec();
//                 check2.addEventListener('change', function () {
//                     child_data_check_tec(check2, index, tec_super_check_value, checkboxValue, selectboxes, checkbox, tec_super_check_checked);//call child function on change event 
//                     // custon_chec();
//                 });
//                 child_data_select_tec(check2, index, tec_super_check_value, checkboxValue, selectboxes)////call child function
//                 // custon_chec();
//             });
//         }
//         else {
//             delete jsonData['Technical Point'][tec_super_check_value][checkboxValue];
//             preview_display();
//             checkboxes.forEach((check2, index) => {
//                 check2.checked = false;
//                 selectboxes[index].disabled = true;
//             });
//         }
//     }

//     function child_data_check_tec(check2, index, tec_super_check_value, checkboxValue, selectboxes, checkbox, tec_super_check_checked) {
//         if (check2.checked) {
//             selectboxes[index].disabled = false;
//             checkbox.checked = true;
//             tec_super_check_checked.checked = true;

//             if (!jsonData['Technical Point'][tec_super_check_value]) {
//                 jsonData['Technical Point'][tec_super_check_value] = {};
//                 preview_display();
//             }
//             if (!jsonData['Technical Point'][tec_super_check_value][checkboxValue]) {
//                 jsonData['Technical Point'][tec_super_check_value][checkboxValue] = {};
//                 preview_display();
//             }
//             jsonData['Technical Point'][tec_super_check_value][checkboxValue][check2.value] = selectboxes[index].value;
//             preview_display();
//         }
//         else {
//             delete jsonData['Technical Point'][tec_super_check_value][checkboxValue][check2.value]
//             preview_display();
//             selectboxes[index].disabled = true;
//         }
//     }

//     function child_data_select_tec(check2, index, tec_super_check_value, checkboxValue, selectboxes) {
//         selectboxes[index].disabled = false;
//         selectboxes[index].addEventListener('change', function () {
//             jsonData['Technical Point'][tec_super_check_value][checkboxValue][check2.value] = selectboxes[index].value;
//             preview_display();
//         });
//     }

//     // add note code technical section
//     function add_note_technical(tec_super_check_value, note1) {

//         note1.forEach(note_ele => {
//             note_ele.addEventListener('input', function (event) {
//                 let note_val = event.target.value;
//                 let Add_Note = 'Add_Note';
//                 let Note = 'Note';
//                 if (note_val.length > 0) {
//                     if (tec_super_check_value.checked) {
//                         if (!jsonData['Technical Point'][tec_super_check_value.value]) {
//                             jsonData['Technical Point'][tec_super_check_value.value] = {};
//                             // preview_display();
//                         }
//                         if (!jsonData['Technical Point'][tec_super_check_value.value][Add_Note]) {
//                             jsonData['Technical Point'][tec_super_check_value.value][Add_Note] = {};
//                             // preview_display();
//                         }
//                         jsonData['Technical Point'][tec_super_check_value.value][Add_Note][Note] = note_val;
//                         preview_display();
//                     } else {
//                         delete jsonData['Technical Point'][tec_super_check_value.value];
//                         preview_display();
//                     }

//                 }
//                 else {
//                     delete jsonData['Technical Point'][tec_super_check_value.value][Add_Note];
//                     preview_display();
//                 }
//             });
//         });
//     }

//     technical_main();

//     //custom for technical
//     $(document).ready(function () {
//         customjsonfortechnical = { 'custom_technical': {} };

//         var $submitfortechnicalcustom = $('#subforcustomtechnical');

//         $submitfortechnicalcustom.on('click', function () {
//             // $(document).on('click', '#subforcustomtechnical', function () {

//             // Get values from input elements
//             var $parentfortechnical = $('#parentfortechnical');
//             var $keyfortechnical = $('#keyfortechnical');
//             var $valuefortechnical = $('#valuefortechnical');

//             // Create a new object and add it to the 'custom' object
//             if (!customjsonfortechnical['custom_technical'][$parentfortechnical.val()]) {
//                 customjsonfortechnical['custom_technical'][$parentfortechnical.val()] = {};
//             }
//             customjsonfortechnical['custom_technical'][$parentfortechnical.val()][$keyfortechnical.val()] = $valuefortechnical.val();

//             // Check if 'custom' has some customjsonfortechnical after the button click
//             if (Object.keys(customjsonfortechnical['custom_technical']).length > 0) {
//                 var htmlContentTechnical = '';

//                 for (const custom_technical_super in customjsonfortechnical) {
//                     htmlContentTechnical += `
//           <p>
//               <div class="card card-body p-0 m-0 border border-danger">
//                   <div class="row">
              
//                       <button class="btn col-xxl-9 col-md-8 col-xl-9 col-lg-8 ms-3" type="button" data-bs-toggle="collapse"
//                           data-bs-target="#${custom_technical_super}" aria-expanded="false"
//                           aria-controls="${custom_technical_super}">
                  
//                           <span for="${custom_technical_super}1"
//                                       class="d-flex justify-content-between">
//                                       <span class="text-dark">${custom_technical_super}</span>
//                           </span>

//                       </button>

//                       <div class="col-2 d-flex justify-content-center align-items-center checkbox-wrapper-40 ">
//                           <input type="checkbox" style="margin-bottom: 6px;" class=" form-check-input super_check_tec" id="${custom_technical_super}1" value="${custom_technical_super}">
//                       </div>
               
//                   </div>
//               </div>
//           </p>
     
//           <div>
//           <div class="collapse show" id="${custom_technical_super}">
//           <div class="card card-body">`;

//                     const parent_technical = customjsonfortechnical[custom_technical_super];

//                     for (const custom_technical_parent in parent_technical) {
//                         htmlContentTechnical += `
              
//                 <div style="margin-top: 7px;">

//                   <div class="checkbox-wrapper-40 " style="margin-top: 7px;">
//                     <span class="checkbox text-dark fw-bold fs-6 ">${custom_technical_parent}</span>
//                     <label class="fs-6 mr-3" for="${custom_technical_super}_${custom_technical_parent}">
//                         <input type="checkbox"
//                         class=" form-check-input ${custom_technical_super}_parent_Technical_checkboxes"
//                         value="${custom_technical_parent}"
//                         id="${custom_technical_super}_${custom_technical_parent}">
//                     </label>
//                   </div>

//                 </div>`;

//                         const childkey_technical = parent_technical[custom_technical_parent];

//                         for (const custom_technical_child in childkey_technical) {
//                             htmlContentTechnical += `
                
//                 <div class="row align-items-center pt-1">
//                   <div class="col-md-2 p-0" style="text-align: end;">
//                       <fieldset>

//                         <div class="checkbox-wrapper-40 ">
//                           <label>
//                               <input type="checkbox"
//                                   class="me-2 form-check-input ${custom_technical_super}_${custom_technical_super}_${custom_technical_parent}_Technical_child_checkboxes"
//                                   value="${custom_technical_child}"
//                                   id="${custom_technical_super}_${custom_technical_child}">
//                           </label>
//                         </div> 
                        
//                       </fieldset>
//                   </div>
//                   <div class="col-md-5 p-0" style="text-align: start;">
//                       <span class="form-check-label  mr-3">${custom_technical_child}</span>
//                   </div>
//                   <div class="col-md-4 p-0">
//                       <fieldset class="form-group">
//                           <select
//                               class="form-select ${custom_technical_super}_${custom_technical_super}_${custom_technical_parent}_Technical_child_selectboxes"
//                               id="basicSelect" aria-label="Default select example"
//                               style="font-size: 12px;">
//                               <option selected>${childkey_technical[custom_technical_child]}</option>
//                           </select>
//                       </fieldset>
//                   </div>
//                 </div>`;
//                         }

//                         // Close the card-body div for the parent
//                     }

//                     htmlContentTechnical += `</div></div></div>`; // Close the collapse div for the super
//                 }

//                 // Update the HTML content of 'custom_request_general' after the loop
//                 $('#custom_request_technical').html(htmlContentTechnical);
//                 // technical_main()

//                 function technical_main1() {

//                     var tec_super_check = document.querySelector('#custom_technical1');
//                     tec_super_check.checked = true;
//                     tec_super_parent(tec_super_check);
//                     tec_super_check.addEventListener('click', function () {
//                         tec_super_parent(tec_super_check);
//                     });
//                 }

//                 technical_main1();

//             }
//         });
//     });

//     //-------------------------------------------------end technical---------------------------------------------

//     function preview_display() {
//         const general_preview = document.getElementById("preview");
//         const technical_preview = document.getElementById("preview_display_for_technical");
//         preview.innerHTML = "";
//         technical_preview.innerHTML = "";

//         // preview for General Points....

//         for (const general_key in jsonData["General Point"]) {

//             var sup_gen_un = general_key;
//             var sup_gen_un = sup_gen_un.replace(/_/g, ' ');

//             const general_header = document.createElement("span");
//             general_header.innerHTML = `<br><b><u>${sup_gen_un}<u><b><br>`;
//             general_preview.appendChild(general_header);

//             const general_value = jsonData["General Point"][general_key];

//             for (const general_keys in general_value) {
//                 var par_gen_un = general_keys;
//                 var par_gen_un = par_gen_un.replace(/_/g, ' ');

//                 const span = document.createElement("span");
//                 span.innerHTML = `<br><b><u>${par_gen_un}<u><b><br>`;
//                 general_preview.appendChild(span);

//                 const general_keyss = general_value[general_keys];

//                 for (const general_key1 in general_keyss) {
//                     const span1 = document.createElement("span");;
//                     span1.innerHTML = `<strong>${general_key1}:</strong> ${general_keyss[general_key1]}<br>`;
//                     general_preview.appendChild(span1);
//                 }
//             }
//         }

//         // preview for Technical Points....

//         for (const technical_key in jsonData["Technical Point"]) {

//             var sup_tec_un = technical_key;
//             var sup_tec_un = sup_tec_un.replace(/_/g, ' ');

//             const technical_header = document.createElement("span");
//             technical_header.innerHTML = `<br><b><u>${sup_tec_un}<u><b><br>`;
//             technical_preview.appendChild(technical_header);

//             const technical_value = jsonData["Technical Point"][technical_key];

//             for (const technical_keys in technical_value) {
//                 var par_tec_un = technical_keys;
//                 var par_tec_un = par_tec_un.replace(/_/g, ' ');

//                 const span = document.createElement("span");
//                 span.innerHTML = `<br><b><u>${par_tec_un}<u><b><br>`;
//                 technical_preview.appendChild(span);

//                 const technical_keyss = technical_value[technical_keys];

//                 for (const technical_key1 in technical_keyss) {
//                     const span1 = document.createElement("span");;
//                     span1.innerHTML = `<strong>${technical_key1}:</strong> ${technical_keyss[technical_key1]}<br>`;
//                     technical_preview.appendChild(span1);
//                 }
//             }
//         }

//     }

//     $(document).ready(function () {
//         // Capture the form submission event
//         if (!isEmptyObject(jsonData)) {
//             $("#request_creation_form").submit(function (event) {
//                 const requestSchema = JSON.stringify(jsonData);
//                 const requestName = document.getElementById('requestName').value;

//                 // Prevent the default form submission
//                 event.preventDefault();

//                 // Send the data via Ajax
//                 $.ajax({
//                     type: "POST",
//                     url: `{% url 'create_request' selectedModule.id %}`, // Replace with the actual URL
//                     data: {
//                         data: requestSchema,
//                         request: requestName,
//                     },
//                     headers: {
//                         'X-CSRFToken': csrfToken
//                     },
//                     success: function (response) {
//                         if (response.success) {
//                             window.location.href = "/show_all_request/";
//                         }
//                         else {
//                             $("#duplicatename").html(response.message)
//                         }
//                     },
//                     error: function (xhr, status, error) {
//                         $("#duplicatename").html(`Error occurred`)
//                     }
//                 });
//             });
//         }
//     });
//     preview_display();
//     // return jsonData
// });





