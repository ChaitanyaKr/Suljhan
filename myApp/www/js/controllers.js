angular.module('myApp.controllers', ['backand','ngCookies'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
					})


// implement the HomeController and About Controller here

.controller('HomeController', ['$scope', 'imageFactory', function($scope, imageFactory) {
                        /*$scope.baseURL = baseURL;*/
                        $scope.showCourse = false;
                        $scope.message="Loading ...";

                        imageFactory.getImages(1).success(function(data){
                        	$scope.courses = data;
                        	console.log("recvd: " + data["image"]);
                        });
                       
                        imageFactory.getImages(2).success(function(data){
                        	$scope.legal = data;
                        	console.log("recvd: " + data["image"]);
                        });

                        /*imageFactory.getImages(3).success(function(data){
                        	$scope.rights = data;
                        	console.log("recvd: "+ data["image"]);
                        });*/
                        
                        /*imageFactory.getImages(4).success(function(data){
                        	$scope.schemes = data;
                        	console.log("recvd: " + data["image"]);
                        });*/
                        
                        imageFactory.getImages(5).success(function(data){
                        	$scope.health = data;
                        	console.log("recvd: " + data["image"]);
                        });
                        
                        imageFactory.getImages(6).success(function(data){
                        	$scope.quizzes = data;
                        	console.log("recvd: " + data["image"]);
                        });

                        imageFactory.getImages(8).success(function(data){
                        	$scope.hygiene = data;
                        	console.log("recvd: "+ data["image"]);
                        });
                        
                    }])

.controller('AboutController', ['$scope','makerFactory', function($scope, makerFactory) {

            /*$scope.baseURL = baseURL;*/
            $scope.showMakers = false;
            $scope.message = "Loading...";
            $scope.makers = [];


            makerFactory.getMakers().success(function(data){
            	$scope.makers = data.data;
            	$scope.showMakers = true;
            	console.log('AboutController', $scope.makers);
            });



            }])

.controller('HelplineController', ['$scope','helplineFactory', '$ionicModal', function($scope, helplineFactory, $ionicModal) {

            /*$scope.baseURL = baseURL;*/
            $scope.showHelpline = false;
            $scope.message = "Loading...";
            $scope.helplines = [];


            helplineFactory.getHelpline().success(function(data){
            	$scope.helplines = data.data;
            	$scope.showHelpline = true;
            	console.log('HelplineController', $scope.helplines[0].cityName);
            });

            $scope.toggleHelpline = function(helpline){
            	helpline.show = !helpline.show;
            }

            $scope.isHelplineShown = function(helpline){
            	return helpline.show;
            }


            }])

.controller('courseListController', ['$scope','courseFactory', function ($scope,courseFactory) {
			/*$scope.baseURL = baseURL;*/
			$scope.showCourse = false;
			$scope.message = "Loading...";
			courseFactory.getCourses().success(function(data){
				$scope.courses = data.data;
				$scope.showCourse = true;
				console.log('courseListController', $scope.courses);
			});
			

			}])

.controller('lectureListController',['$scope','$ionicModal','lectureFactory','$stateParams', function($scope, $ionicModal, lectureFactory, $stateParams){
/*			$scope.baseURL = baseURL;*/
			$scope.lectures = [];
			$scope.showLectures = false;
			$scope.message="Loading ...";

			console.log('stateParams: ',$stateParams.id);

			lectureFactory.getLectures($stateParams.id).success(function(data){
				$scope.lectures = data.data;
				console.log('lectureListController '+ $scope.lectures[0].lectureName);
			})
			
			

			
			/*
				****Code for the video lecture modals:*****
			*/

			$ionicModal.fromTemplateUrl('templates/videoLecture.html', {
					scope: $scope,
					animation:'slide-in-up'
			}).then(function(modal) {
					$scope.modal = modal;
			});

			$scope.closeModal = function() {
					var elem = document.getElementById('youtube-video');
					var url = elem.src;
					console.log('src:', url);
					elem.src = '';
					console.log('changed src:', elem.src);
					$scope.modal.hide();
					elem.src = url;
					console.log('reverted src:',elem.src);
			};

			$scope.openModal = function(lecture) {
					$scope.modal.show();
					$scope.url = lecture.url;
					$scope.lectureName = lecture.lectureName;
					console.log("lectureName", lecture.lectureName);
			};

}])

.controller('legalController',['$scope','imageFactory', function($scope,imageFactory){
			/*$scope.baseURL = baseURL;*/
			$scope.show = false;
			$scope.message = "Loading...";
			imageFactory.getImages(7).success(function(data){
				$scope.laws = data;
				console.log("recvd: "+ data["image"]);
			});
			imageFactory.getImages(3).success(function(data){
				$scope.rights = data;
				console.log("recvd: "+ data["image"]);
			});
			imageFactory.getImages(4).success(function(data){
				$scope.schemes = data;
				console.log("recvd: "+ data["image"]);
			});

}])

.controller('lawListController', ['$scope', 'lawFactory',function($scope,lawFactory){
			/*$scope.baseURL = baseURL;*/
			$scope.showLaw = false;
			$scope.message = "Loading...";
			lawFactory.getLaws().success(function(data){
				$scope.laws = data.data;
				console.log('lawListController', $scope.laws);
			})
			
			}])

.controller('rightListController', ['$scope', 'rightFactory',function($scope,rightFactory){
			/*$scope.baseURL = baseURL;*/
			$scope.showRight = false;
			$scope.message = "Loading...";
			rightFactory.getRights().success(function(data){
				$scope.rights = data.data;
				console.log('rightListController', $scope.rights);
			})
			
			}])


.controller('schemeListController', ['$scope', 'schemeFactory',function($scope,schemeFactory){
			/*$scope.baseURL = baseURL;*/
			$scope.showScheme = false;
			$scope.message = "Loading...";
			$scope.schemes = schemeFactory.getSchemes().success(function(data){
				$scope.schemes = data.data;
				console.log('schemeListController', $scope.schemes);
			});
			
		}])



.controller('hygieneListController', ['$scope','$ionicModal', 'hygieneFactory', function ($scope,$ionicModal, hygieneFactory) {
			/*$scope.baseURL = baseURL;*/
			$scope.toggleList = false;
			$scope.message = "Loading...";

			hygieneFactory.getHygieneVideos().success(function(data){
				$scope.hygieneVids = data.data;
				console.log('hygieneListController',$scope.hygieneVids);
			})


	        $scope.toggleHygiene = function(hygiene){
            	hygiene.show = !hygiene.show;
            }

            $scope.isHygieneShown = function(hygiene){
            	return hygiene.show;
            }
            
           
			/*
				****Code for the video lecture modals:*****
			*/
			$ionicModal.fromTemplateUrl('templates/videoLecture.html', {
					scope: $scope,
					animation:'slide-in-up'
			}).then(function(modal) {
					$scope.modal = modal;
			});

			// Triggered the modal to hide it
			$scope.closeModal = function() {
					var elem = document.getElementById("youtube-video");
					var url = elem.src;
					console.log('src:', url);
					elem.src = '';
					console.log('changed src:', elem.src);
					$scope.modal.hide();
					elem.src = url;
					console.log('reverted src:',elem.src);
			};

			  // Open the modal
			$scope.openModal = function(lecture) {
					$scope.modal.show();
					$scope.url = lecture.url;
					$scope.lectureName = lecture.name;
			};

			}])

.controller('faqController', ['$scope', 'faqFactory', function ($scope, faqFactory) {
			/*$scope.baseURL = baseURL;*/
			$scope.show = false;
			$scope.message = "Loading...";
			faqFactory.getFAQs().success(function(data){
				$scope.faqs = data.data;
				console.log('faqController',$scope.faqs);
			})

	        $scope.toggleQuestion = function(question){
            	question.show = !question.show;
            }

            $scope.isAnswerShown = function(question){
            	return question.show;
            }
	        
        }])



.controller('diseaseListController', ['$scope', 'diseaseFactory', function ($scope, diseaseFactory) {
			/*$scope.baseURL = baseURL;*/
			$scope.show = false;
			$scope.message = "Loading...";
			diseaseFactory.getDiseases().success(function(data){
				$scope.diseases = data.data;
				console.log('diseaseListController',$scope.diseases);
			})

	        $scope.toggleDisease = function(disease){
            	disease.show = !disease.show;
            }

            $scope.isDiseaseShown = function(disease){
            	return disease.show;
            }
        }])


.controller('quizListController', ['$scope','quizFactory', function ($scope,quizFactory) {
			/*$scope.baseURL = baseURL;*/
			$scope.showQuizzes = false;
			$scope.message = "Loading...";
			quizFactory.getQuizzes().success(function(data){
				$scope.quizzes = data.data;
				console.log('quizListController',$scope.quizzes);
			});
		}])


.controller('quizController', ['$scope', '$ionicModal', '$stateParams','$ionicLoading', 'questionFactory', 'optionFactory',
	function($scope, $ionicModal, $stateParams, $ionicLoading, questionFactory, optionFactory) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

			$scope.correctAnswer = "";
			/*$ionicModal.fromTemplateUrl('templates/quiz.html', {
				scope: $scope
			}).then(function(modal) {
				$scope.modal = modal;
			});*/

			/*$scope.baseURL = baseURL;*/
			$scope.questions = [];
			$scope.options = [];
			$scope.showQuiz = false;
			$scope.message = "Loading ...";

			console.log('stateParams: ',$stateParams.id);

			questionFactory.getQuestions($stateParams.id).success(function(data){
				$scope.questions = data.data;
				console.log('quizController: (number of questions): ', $scope.questions.length);
			});
			


			$scope.start = function() {
				$scope.qNum = 0;
				$scope.quizOver = false;
				$scope.inProgress = true;
				$scope.getQuestion($scope.qNum);
			};
			
			$scope.reset = function() {
				$scope.inProgress = false;
				$scope.score = 0;
			}
	
			$scope.showSpinner = function(){
				$ionicLoading.show({
					template:'<p>Loading...</p><ion-spinner icon="android"></ion-spinner>'
				});
			}

			$scope.hideSpinner = function(){
				$ionicLoading.hide();
			}

			$scope.getQuestion = function(qNum) {
				var allQuestions = [];
				allQuestions = $scope.questions;
				
			
				if (qNum < allQuestions.length){
					$scope.question = allQuestions[qNum].question;
					$scope.answer = allQuestions[qNum].answer;
					$scope.showSpinner();

					optionFactory.getOptions(allQuestions[qNum].id).success(function(data){
						$scope.optionsArray = data.data;
						var count;
						for(count=0; count<$scope.optionsArray.length; count++){
							$scope.options[count] = $scope.optionsArray[count].option;
						}
						console.log('Fetched options', $scope.optionsArray[0]);
						$scope.hideSpinner();

					})

					$scope.answerMode = true;
					console.log('Fetched questions', allQuestions[qNum]);
				} else {
					$scope.quizOver = true;
				}
				};
			
			
			$scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;
 
				var ans = $('input[name=answer]:checked').val();
 
				if(ans == $scope.options[$scope.answer]) {
					$scope.score++;
					$scope.correctAns = true;
				} else {
					$scope.correctAns = false;
				}
 
				$scope.answerMode = false;
			};
 
			
			$scope.nextQuestion = function() {
				$scope.qNum++;
				$scope.getQuestion($scope.qNum);
			}
 
			$scope.reset();
		
}])



;
