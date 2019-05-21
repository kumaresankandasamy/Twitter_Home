var promiseList=["https://fsd1.herokuapp.com/users/1/details",
                  "https://fsd1.herokuapp.com/users/1/following/tweets"];


let requests = promiseList.map(url=>fetch(url));
let store=[];
 
Promise.all(requests)
       .then(responses=>{
       	responses.forEach(response=>store.push(response.json()))

    })
       .catch(error=>console.log(error));
function PromiseCall(url){
	return fetch(url)
	.then(response=>response.json())
	.catch(error=>console.log(error));

}
let Tweetdate=((month)=>{
	let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; 	
		return `${monthNames[month]}`;
});
let list=0;
 PromiseCall(this.promiseList[list])
    .then(data=>updateDOM(data.data));
let updateDOM=((data)=>{
	let username=document.querySelector('div.username')
	username.innerHTML=data.full_name;
	/*var userid=document.querySelector('div.userid')
	userid.innerHTML=data.id; */
	let tweets=document.querySelector('p#tweets')
	tweets.innerHTML=data.stats.tweets;
	let following=document.querySelector('p#following')
	following.innerHTML=data.stats.following;
	let followers=document.querySelector('p#followers')
	followers.innerHTML=data.stats.followers;
	let sidebarusername=document.querySelectorAll('div.follow-body span.username')
	sidebarusername.forEach(d=>d.textContent=data.user_name);
	let sidebaruserid=document.querySelectorAll('div.follow-body span.userid')
	sidebaruserid.forEach(d=>d.textContent=data.user_email);
	let postusername=document.querySelectorAll('div.comment-header span#username')
	postusername.forEach(d=>d.textContent=data.user_name);
	let postuserid=document.querySelectorAll('div.comment-header span#userid')
	postuserid.forEach(d=>d.textContent=data.user_email);
});

PromiseCall(this.promiseList[++list])
 .then(d=>updateTweet(d.data))
 .catch(error=>console.log(error))

 let updateTweet=((data)=>{
	for(let i=0;i<=data.length;i++){
		[].forEach.call(data,()=>{
	let tweettext=document.querySelector('div.comment-body p')
		tweettext.textContent=data[i].text;
		document.querySelector('div span#comment').
		appendChild(document.createTextNode(data[i].stats.comments));
		document.querySelector('div span#heart').
		appendChild(document.createTextNode(data[i].stats.likes));
		document.querySelector('div span#refresh').
		appendChild(document.createTextNode(data[i].stats.retweets));

		}
	}
});
