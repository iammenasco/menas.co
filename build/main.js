/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	const rerunButton = document.querySelector('.rerun');
	const i = document.querySelector('.i');
	const am = document.querySelector('.am');
	const menasco = document.querySelector('.menasco');
	
	const init = () => {
	  i.classList.remove('i-animate');
	  am.classList.remove('am-animate');
	  menasco.classList.remove('menasco-animate');
	  rerunButton.classList.remove('rerun-animate');
	
	  const trick = rerunButton.offsetWidth;
	
	  i.classList.add('i-animate');
	  am.classList.add('am-animate');
	  menasco.classList.add('menasco-animate');
	  rerunButton.classList.add('rerun-animate');
	
	  return trick;
	};
	
	rerunButton.addEventListener('click', init);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmZjZmNkMDdlZGY0YWRmMjMzMDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsicmVydW5CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpIiwiYW0iLCJtZW5hc2NvIiwiaW5pdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRyaWNrIiwib2Zmc2V0V2lkdGgiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxPQUFNQSxjQUFjQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0EsT0FBTUMsSUFBSUYsU0FBU0MsYUFBVCxDQUF1QixJQUF2QixDQUFWO0FBQ0EsT0FBTUUsS0FBS0gsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsT0FBTUcsVUFBVUosU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjs7QUFFQSxPQUFNSSxPQUFPLE1BQU07QUFDakJILEtBQUVJLFNBQUYsQ0FBWUMsTUFBWixDQUFtQixXQUFuQjtBQUNBSixNQUFHRyxTQUFILENBQWFDLE1BQWIsQ0FBb0IsWUFBcEI7QUFDQUgsV0FBUUUsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0FSLGVBQVlPLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGVBQTdCOztBQUVBLFNBQU1DLFFBQVFULFlBQVlVLFdBQTFCOztBQUVBUCxLQUFFSSxTQUFGLENBQVlJLEdBQVosQ0FBZ0IsV0FBaEI7QUFDQVAsTUFBR0csU0FBSCxDQUFhSSxHQUFiLENBQWlCLFlBQWpCO0FBQ0FOLFdBQVFFLFNBQVIsQ0FBa0JJLEdBQWxCLENBQXNCLGlCQUF0QjtBQUNBWCxlQUFZTyxTQUFaLENBQXNCSSxHQUF0QixDQUEwQixlQUExQjs7QUFFQSxVQUFPRixLQUFQO0FBQ0QsRUFkRDs7QUFnQkFULGFBQVlZLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDTixJQUF0QyxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZmNmY2QwN2VkZjRhZGYyMzMwMyIsImNvbnN0IHJlcnVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcnVuJyk7XG5jb25zdCBpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmknKTtcbmNvbnN0IGFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFtJyk7XG5jb25zdCBtZW5hc2NvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbmFzY28nKTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpLWFuaW1hdGUnKTtcbiAgYW0uY2xhc3NMaXN0LnJlbW92ZSgnYW0tYW5pbWF0ZScpO1xuICBtZW5hc2NvLmNsYXNzTGlzdC5yZW1vdmUoJ21lbmFzY28tYW5pbWF0ZScpO1xuICByZXJ1bkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZXJ1bi1hbmltYXRlJyk7XG5cbiAgY29uc3QgdHJpY2sgPSByZXJ1bkJ1dHRvbi5vZmZzZXRXaWR0aDtcblxuICBpLmNsYXNzTGlzdC5hZGQoJ2ktYW5pbWF0ZScpO1xuICBhbS5jbGFzc0xpc3QuYWRkKCdhbS1hbmltYXRlJyk7XG4gIG1lbmFzY28uY2xhc3NMaXN0LmFkZCgnbWVuYXNjby1hbmltYXRlJyk7XG4gIHJlcnVuQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlcnVuLWFuaW1hdGUnKTtcblxuICByZXR1cm4gdHJpY2s7XG59O1xuXG5yZXJ1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9