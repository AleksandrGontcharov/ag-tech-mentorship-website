"use strict";(self.webpackChunkag_tech_mentoring=self.webpackChunkag_tech_mentoring||[]).push([[2952],{58492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>q,default:()=>w,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var i=n(87462),o=n(67294),s=n(3905),u=n(87536),r=n(35424),a=n.n(r);let p;function c(e){const{register:t}=(0,u.Gc)();return e.questionType===p.SingleChoice?o.createElement("div",{key:e.option},o.createElement("label",{key:e.option},o.createElement("input",(0,i.Z)({type:"radio",value:e.quizQuestion.options.indexOf(e.option),key:e.quizQuestion.options.indexOf(e.option),name:JSON.stringify(e.quizQuestion)},t(e.quizQuestion.question_index.toString()))),e.option)):e.questionType===p.MultiChoice?o.createElement("div",{key:e.option},o.createElement("label",{key:e.option},o.createElement("input",(0,i.Z)({type:"checkbox",value:e.quizQuestion.options.indexOf(e.option),key:e.quizQuestion.options.indexOf(e.option),name:JSON.stringify(e.quizQuestion)},t(e.quizQuestion.question_index.toString()))),e.option)):o.createElement("h4",{key:e.option},' "ERROR" + ',e.option)}function l(e){let t=e.quizQuestion.options,n=e.quizQuestion.question_type;return o.createElement("div",{key:JSON.stringify(e.quizQuestion.options)},o.createElement("h3",null," ","Question ",e.quizQuestion.question_index," :"," ",e.quizQuestion.question," "),t.map((t=>o.createElement(c,{key:JSON.stringify(t),option:t,questionType:n,quizQuestion:e.quizQuestion})))," ")}function m(e){const t=function(e){const t=a().parse(e);return{title:t.quiz.title,points:t.quiz.points,answers:t.quiz.questions.map((e=>e.answer)),questions:t.quiz.questions.map((e=>({question_type:e.question_type,question:e.question,options:e.options,answer:e.answer,explanations:e.explanations,points:e.points,question_index:e.question_index})))}}('[quiz]\n    title = "Sample Quiz"\n    points = 10\n  \n    [[quiz.questions]]\n    question_index = 0\n    question_type = "single_choice"\n    question = "What is the capital of France?"\n    options = ["Paris", "London", "Madrid", "Berlin"]\n    answer = 0\n    explanations = ["Correct!", "Incorrect", "Incorrect", "Incorrect"]\n    points = 5\n  \n    [[quiz.questions]]\n    question_index = 1\n    question_type = "single_choice"\n    question = "What is the highest mountain in the world?"\n    options = ["K2", "Denali", "Mount Everest", "Kilimanjaro"]\n    answer = 2\n    explanations = ["Incorrect", "Incorrect", "Correct!", "Incorrect"]\n    points = 5\n  \n    [[quiz.questions]]\n    question_index = 2\n    question_type = "multi_choice"\n    question = "Which of the following are countries in South America?"\n    options = ["Brazil", "Russia", "Peru", "India", "China", "Chile"]\n    answer = [0, 2, 5]\n    explanations = ["Brazil is in South America", "Peru is in South America", "Chile is in South America", "India is not in South America", "China is not in South America", "Russia is not in South America"]\n    points = 10'),n=(0,u.cI)({defaultValues:{0:"",1:"",2:""}});return o.createElement(u.RV,n,o.createElement("form",{onSubmit:n.handleSubmit((e=>{Object.values(e).map((e=>"string"==typeof e?parseInt(e,10):e.map((e=>parseInt(e,10))))).toString()===t.answers.toString()?console.log("correct"):console.log("incorrect")}))},o.createElement("h2",null," Quiztitle: ",t.title," "),t.questions.map((e=>o.createElement(l,{key:e.question_index,quizQuestion:e}))),o.createElement("button",{type:"submit"},"Submit Answers")))}!function(e){e.SingleChoice="single_choice",e.MultiChoice="multi_choice"}(p||(p={}));const d={sidebar_position:2},q="\u2192 Test your windows setup",h={unversionedId:"foundational-program/computer-setup/test",id:"foundational-program/computer-setup/test",title:"\u2192 Test your windows setup",description:"---",source:"@site/docs/foundational-program/0-computer-setup/test.mdx",sourceDirName:"foundational-program/0-computer-setup",slug:"/foundational-program/computer-setup/test",permalink:"/ag-tech-mentorship-website/docs/foundational-program/computer-setup/test",draft:!1,editUrl:"https://github.com/AleksandrGontcharov/ag-tech-mentorship/blob/master/docs/foundational-program/0-computer-setup/test.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u2192 Windows",permalink:"/ag-tech-mentorship-website/docs/foundational-program/computer-setup/computer-setup"},next:{title:"\ue795 Command Line",permalink:"/ag-tech-mentorship-website/docs/category/-command-line"}},g={},y=[],f={toc:y},z="wrapper";function w(e){let{components:t,...n}=e;return(0,s.kt)(z,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-test-your-windows-setup"},"\u2192 Test your windows setup"),(0,s.kt)("hr",null),(0,s.kt)(m,{mdxType:"Quiz"}))}w.isMDXComponent=!0}}]);