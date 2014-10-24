<div id="loginScreen"> 
 	<div id="loginForm"  >
 		{{view Ember.TextField valueBinding="userId" id="user_name" placeholder="Enter Username" autocomplete="false"}}
		{{view Ember.TextField valueBinding="password" type="password" id="password" placeholder="Enter Password" autocomplete="false"}}
		<button id="loginBtn" {{action "login"}}>Login</button>
 	</div>
</div>