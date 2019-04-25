var userDetails;
	var promise=fetch("https://fsd1.herokuapp.com/users/1/details");
	promise
	    .then((res)=> res.json())
	    .then(data=> updateDOM(d.data))
	    .catch(error=> console.log(error));
var udateDOM = function(data){
	var username = document.querySelector('div.right .username')
	username.innerHTML = data.full_name;
	var tweets = document.querySelector('.stats .box1 p')
	tweets.innerText = data.stats.tweets;
	var following = document.querySelector('.stats .box2 p')
	following.innerText = data.stats.following;
	var followers = document.querySelector('.stats box3 p')
	followers.innerText = data.stats.followers;
	var sidebarUserName = document.querySelectorAll('div .user-details span .username')
	sidebarUserName.forEach(d=>d.textContent=data.user_name);
	var userid = document.querySelectorAll('div .user-details span .userid')
    userid.forEach(d=>d.textContent=data.user_email);
	var username = document.querySelectorAll('div .comment-header span #username')
	username.forEach(d=>d.textContent=data.user_name+',');
	var eMail = document.querySelectorAll('div .comment-header span #userid')
	eMail.forEach(d=>d.textContent=data.user_email);
}
var promise = fetch("https://fsd1.herokuapp.com/users/1/following/tweets");
promise.then(res=> res.json())
	   .then(d=> updatetweet(d.data))
	   .catch(error=> console.log(error))
var updatetweet = function(data){
	for (i=0;i<=1;i++){
		document.querySelector('.comment-footer')
		.appendChild(document.createTextNode(data[i].text))
		document.querySelector('#heart')
		.appendChild(document.createTextNode(data[i].stats.heart))
		document.querySelector('#comments')
		.appendChild(document.createTextNode(data[i].stats.comments))
		document.querySelector('#refresh')
		.appendChild(document.createTextNode(data[i].stats.refresh))
	}
	
}