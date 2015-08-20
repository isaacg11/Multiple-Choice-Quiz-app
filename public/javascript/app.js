var progress=-1;
var grade=0;
var questions=
[
{
	question:"WHAT COLOR IS THE SKY?",
	options:["Green","Blue","Red","Purple"],
	answer:"Blue"	
},
{	
	question:"WHICH METAL IS STRONGER THAN STEEL?",
	options:["Platinum","Gold","Titanium","Aluminum"],
	answer:"Titanium"
},
{
	question:"WHY IS THE EARTH ROUND?",
	options:["Aliens","Gods","Humans","Unknown"],
	answer:"Unknown"
},
{
	question:"WHAT DOES WATER TASTE LIKE?",
	options:["Sprite","Nothing","Vodka","Kool-aid"],
	answer:"Nothing"
},
{
	question:"WHICH IS THE FASTEST SUPERHERO?",
	options:["Superman","Batman","Daredevil","The Flash"],
	answer:"The Flash"
}
];
var startQuiz=function(){
	nextQuestions();
	$("#quiz").show();
}
var nextQuestions=function(){
	if(progress<questions.length-1){
		progress+=1;
	}else{gradeQuiz();}
	$('#question').text(questions[progress].question);
	for(var i=0;i<=questions[progress].options.length;i++){
	//THIS SECTION SPECIFIES "OPTIONS"
	//OF THE "QUESTIONS" ARRAY AND GIVES IT A VALUE WITH
	//THE NEXT INDEXED OPTION. THIS PART YOU DO NOT SEE!
	//IT IS FOR THE GRADING!//
	$("#"+i).val(questions[progress].options[i]);
	//THIS SECTION DISPLAYS THE ACTUAL OPTIONS//
	$("#label-"+i).html(questions[progress].options[i]);
}
}	
var userAnswer=[];
//THIS FUNCTIONS RUNS OFF THE ONCLICK OF "ANSWER" BUTTON AND 
//TAKES ALL THE INPUTS WITH THE NAME OF "ANSWER" AND  THAT IS
//CHECKED AND TAKES THE VALUE OF THAT INPUT AND STORES IT IN 
//THE ANSWER VARIABLE. IT THEN ACCESSES "USERANSWER" ARRAY AND
//PLACES THE VALUE OF "ANSWER" INTO THE INDEX OF "PROGRESS"
//INSIDE THE "USERANSWER" ARRAY.
var chooseAnswer=function(){
	var answer=$("input[name=answer]:checked").val();
	userAnswer[progress]=answer;
}
//THIS FUNCTIONS RUNS AT THE END OF THE QUIZ WHEN THE 
//QUESTIONS RUN OUT AND IT IS CALLED ON LINE 21 UNDER THE "ELSE"
//CONDITIONAL. IT GOES THROUGH THE LENGTH OF THE "QUESTIONS" ARRAY 
//STARTING AT THE INDEX OF 0 AND COMAPARES THE 0 INDEX "ANSWER" 
//PROPERTY WITH THE "USERANSWER" O INDEX AND IF THEY ARE EQUAL 
//THE CONSOLE WILL PRINT OUT "CORRECT".
var gradeQuiz=function(){
	for(var i=0;i<questions.length;i++){
		if(questions[i].answer===userAnswer[i]){
			grade+=1;
		}
	}
	$('#final').html((grade/questions.length)*100+'%');
}

