const leftSub = document.querySelectorAll(".left-sub");
const rightHeading = document.querySelector(".right-sub-heading");
const boxHeading_1 = document.querySelector(".box-1 .box-heading");
const boxHeading_2 = document.querySelector(".box-2 .box-heading");
const boxHeading_3 = document.querySelector(".box-3 .box-heading");
const boxHeading_4 = document.querySelector(".box-4 .box-heading");

leftSub.forEach((sub) => {
  sub.addEventListener("mouseover", () => {
    const subContent = sub.querySelector(".left-sub-heading").textContent;
    console.log(subContent);
    if (subContent == "Contract Templates") {
      ContractTemplates();
    } else if (subContent == "Proposal Templates") {
      ProposalTemplates();
    } else if (subContent == "Invoice Templates") {
      InvoiceTemplates();
    } else if (subContent == "Agreement Templates") {
      AgreementTemplates();
    } else if (subContent == "Quote Templates") {
      QuoteTemplates();
    } else if (subContent == "Scope of Work Templates") {
      ScopeOfWorkTemplates();
    } else if (subContent == "Brief Templates") {
      BriefTemplates();
    }
  });
});

function ContractTemplates() {
  rightHeading.textContent = "Featured Contract Templates";
  boxHeading_1.textContent = "Free Contract Maker";
  boxHeading_2.textContent = "Social Media Management Contract Template";
  boxHeading_3.textContent = "Graphic Design Contract Template";
  boxHeading_4.textContent = "Digital Marketing Contract Template";
}

function ProposalTemplates() {
  rightHeading.textContent = "Featured Proposal Templates";
  boxHeading_1.textContent = "Graphic Design Proposal Template";
  boxHeading_2.textContent = "Business Proposal Template";
  boxHeading_3.textContent = "Brand Ambassador Proposal Template";
  boxHeading_4.textContent = "Data Entry Proposal Letter Template";
}
function InvoiceTemplates() {
  rightHeading.textContent = "Featured Invoice Templates";
  boxHeading_1.textContent = "Social Media Invoice Templates";
  boxHeading_2.textContent = "Contractor Invoice Template";
  boxHeading_3.textContent = "Web Design Invoice Template";
  boxHeading_4.textContent = "Influencer Invoice Template";
}
function AgreementTemplates() {
  rightHeading.textContent = "Featured Agreement Templates";
  boxHeading_1.textContent = "Influencer Agreement Template";
  boxHeading_2.textContent = "Influencer Collaboration Agreement Template";
  boxHeading_3.textContent = "Monthly Retainer Agreement Template";
  boxHeading_4.textContent = "Writer Agreement Template";
}
function QuoteTemplates() {
  rightHeading.textContent = "Featured Quote Templates";
  boxHeading_1.textContent = "Web Design Quotation Template";
  boxHeading_2.textContent = "Interior Design Quotation Template";
  boxHeading_3.textContent = "Digital Marketing Quotation Template";
  boxHeading_4.textContent = "Video Production Quotation Template";
}
function ScopeOfWorkTemplates() {
  rightHeading.textContent = "Featured Scope of Work Templates";
  boxHeading_1.textContent = "Website Development Scope of Work Template";
  boxHeading_2.textContent = "Digital Marketing Scope of Work Template";
  boxHeading_3.textContent = "Consultant Scope of Work Template";
  boxHeading_4.textContent = "Interior Design Scope ofWork Template";
}
function BriefTemplates() {
  rightHeading.textContent = "Featured Brief Templates";
  boxHeading_1.textContent = "Design Brief Template";
  boxHeading_2.textContent = "Architecture Design Brief";
  boxHeading_3.textContent = "Fashion Design Brief";
  boxHeading_4.textContent = "Creative Brief Template";
}
// end of nav

// toggle ball
const toggleContainer = document.querySelector(".toggle-container");
const toggleBall = document.querySelector(".toggle-ball");
const year = document.querySelectorAll(".year");

toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("active");
  year.forEach((y) => {
    y.classList.toggle("active");
  });
});

// payment cards

const price = document.querySelectorAll(".card-price .price");
const billed = document.querySelectorAll(".time .billed");
// (const toggleContainer=document.querySelector('.toggle-container');)

toggleContainer.addEventListener("click", () => {
  if (toggleContainer.classList.contains("active")) {
    yearly();
  } else {
    monthly();
  }
});

function yearly() {
  price[0].textContent = "17";
  price[1].textContent = "32";
  price[2].textContent = "52";
  billed.forEach((bill) => {
    bill.textContent = "(Billed Yearly)";
  });
}
function monthly() {
  price[0].textContent = "24";
  price[1].textContent = "39";
  price[2].textContent = "79";
  billed.forEach((bill) => {
    bill.textContent = "(Billed Monthly)";
  });
}

//   faq-accordian
const faqQuestion = document.querySelectorAll(".faq-question");

faqQuestion.forEach((faq) => {
  faq.addEventListener("click", () => {
    // const current=faq.;
    
    // for (i = 0; i < faqQuestion.length; i++) {
    //     if (faqQuestion[i].classList.contains("active")) {
    //         console.log(i)            
    //         // faq.classList.add('active')
    //         faqQuestion[i].classList.remove("active");
    //     }
    // }
    
    faq.classList.toggle("active");

  });
});
// console.log(faqQuestion);



// Footer-sub-menu
const footerSubMenu=document.querySelectorAll('.footer-sub-menu-container');
const footerSubMenuHeading=document.querySelectorAll('.footer-sub-menu-container p ');
const footerSubMenuIcon=document.querySelectorAll('.footer-sub-menu-container i');

footerSubMenu.forEach(sub=>{
  sub.addEventListener('click',()=>{
    console.log(sub.classList)
    sub.classList.toggle('active')
  })
})
footerSubMenuIcon.forEach(sub=>{
  sub.addEventListener('click',()=>{
    console.log(sub.classList)
    sub.classList.toggle('active')
  })
})