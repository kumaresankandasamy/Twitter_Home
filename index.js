var promise=fetch("https://fsd1.herokuapp.com/users/1/details");
promise.then(res=>res.json())
       .then(d=>updateDOM(d.data))
       .catch(error=>console.log(error))

var updateDOM=function(data){
	var username=document.querySelector('div.username')
	username.innerHTML=data.full_name;
	/*var userid=document.querySelector('div.userid')
	userid.innerHTML=data.id; */
	var tweets=document.querySelector('p#tweets')
	tweets.innerHTML=data.stats.tweets;
	var following=document.querySelector('p#following')
	following.innerHTML=data.stats.following;
	var followers=document.querySelector('p#followers')
	followers.innerHTML=data.stats.followers;
	var sidebarusername=document.querySelectorAll('div.follow-body span.username')
	sidebarusername.forEach(d=>d.textContent=data.user_name);
	var sidebaruserid=document.querySelectorAll('div.follow-body span.userid')
	sidebaruserid.forEach(d=>d.textContent=data.user_email);
	var postusername=document.querySelectorAll('div.comment-header span#username')
	postusername.forEach(d=>d.textContent=data.user_name);
	var postuserid=document.querySelectorAll('div.comment-header span#userid')
	postuserid.forEach(d=>d.textContent=data.user_email);

	}
	var promise2=fetch("https://fsd1.herokuapp.com/users/1/following/tweets");
	promise2.then(res=>res.json())
       .then(d=> updateTweet(d.data))
       .catch(error=>console.log(error))
var updateTweet=function(data){
	for(var i=0;i<=data.length;i++){
	var tweettext=document.querySelector('div.comment-body p')
		tweettext.textContent=data[i].text;
		document.querySelector('div span#comment').
		appendChild(document.createTextNode(data[i].stats.comments));
		document.querySelector('div span#heart').
		appendChild(document.createTextNode(data[i].stats.likes));
		document.querySelector('div span#refresh').
		appendChild(document.createTextNode(data[i].stats.retweets));

		}
}

