'use strict';

angular.module('myApp.services', ['ngResource','backand'])
        /*.constant("baseURL","http://192.168.0.108:3000/")*/
        .service('imageFactory', ['$resource', '$http', 'Backand', function($resource, $http, Backand){

        	var vm = this;

        	vm.getImages = function(id) {
      			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/images/' + id,
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: [],
          					sort: ''
        				}
				      });
    			}

        }])

        .service('courseFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getCourses = function() {
      			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/courses/',
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: null,
          					sort: ''
        				}
				      });
    			}


    		/*obj.getCourseById = function(id){
    			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/courses/' + id,
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: [],
          					sort: ''        				}
				      });
    			}*/
        	}])

        .service('hygieneFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

 	        obj.getHygieneVideos = function() {
            return $http({
              method: 'GET',
              url: Backand.getApiUrl() + '/1/objects/health/',
                params: {
                    pageSize: 20,
                    pageNumber: 1,
                    filter: null,
                    sort: ''
                }
              });
          }

        }])

        .service('faqFactory',['$resource', '$http', 'Backand', function($resource, $http, Backand){
          var obj = this;

          obj.getFAQs = function() {
            return $http ({
              method: 'GET',
              url: Backand.getApiUrl() + '/1/objects/faqs',
                params: {
                  pageSize: 20,
                  pageNumber: 1
                }
            });
          }

        }])


        .service('diseaseFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
          var obj = this;

          obj.getDiseases = function() {
            return $http({
              method: 'GET',
              url: Backand.getApiUrl() + '/1/objects/diseases/',
                params: {
                    pageSize: 20,
                    pageNumber: 1,
                    filter: null,
                    sort: ''
                }
              });
          }

          }])

        .service('lawFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getLaws = function() {
      			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/laws/',
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: [],
          					sort: ''
        				}
				      });
    			}

        	}])

        .service('lectureFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getLectures = function(id) {
      			return $http ({
					method: 'GET',
					url: Backand.getApiUrl() + '/1/objects/lectures',
					params: {
						pageSize: 20,
						pageNumber: 1,
						filter: [
							{
								fieldName: 'owner',
								operator: 'in',
								value: id
							}
						],
						sort: ''
					}
					});
    			}

        	}])

        .service('makerFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getMakers = function() {
      			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/makers/',
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: [],
          					sort: ''
        				}
				      });
    			}

        	}])


        .service('helplineFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getHelpline = function() {
      			return $http ({
              method: 'GET',
              url: Backand.getApiUrl() + '/1/objects/helplines',
                params: {
                  pageSize: 20,
                  pageNumber: 1,
                  filter: [],
                  sort: ''
                }
              });
          }

        	}])



        .service('rightFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getRights = function() {
      			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/rights/',
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: null,
          					sort: ''
        				}
				      });
    			}

        	}])

        .service('schemeFactory',['$resource','$http', 'Backand', function($resource, $http, Backand){
        	var obj = this;

        	obj.getSchemes = function() {
      			return $http({
        			method: 'GET',
        			url: Backand.getApiUrl() + '/1/objects/schemes/',
        				params: {
          					pageSize: 20,
          					pageNumber: 1,
          					filter: null,
          					sort: ''
        				}
				      });
    			}

        	}])

        //ToDO: Add questions and Quiz factory

        .service('quizFactory', ['$resource', '$http', 'Backand', function($resource, $http, Backand) {

        	var obj = this;
        	obj.getQuizzes = function(){
        		return $http ({
					method: 'GET',
					url: Backand.getApiUrl() + '/1/objects/quizzes',
					params: {
						pageSize: 20,
						pageNumber: 1,
						filter: null,
						sort: ''
					}
				});
        	}
		}])

		.service('questionFactory', ['$resource', '$http', 'Backand', function($resource, $http, Backand) {

        	var obj = this;
        	obj.getQuestions = function(id){
        		return $http ({
					method: 'GET',
					url: Backand.getApiUrl() + '/1/objects/questions',
					params: {
						pageSize: 20,
						pageNumber: 1,
						filter: [
									{
										fieldName: 'owner',
										operator: 'in',
										value: id
									}
								],
						sort: ''
					}
				});
        	}
		}])

		.service('optionFactory', ['$resource', '$http', 'Backand', function($resource, $http, Backand) {

        	var obj = this;
        	obj.getOptions = function(id){
        		return $http ({
					method: 'GET',
					url: Backand.getApiUrl() + '/1/objects/options',
					params: {
						pageSize: 20,
						pageNumber: 1,
						filter: [
									{
										fieldName: 'owner',
										operator: 'in',
										value: id
									}
								],
						sort: ''
					}
				});
        	}
		}])


;
