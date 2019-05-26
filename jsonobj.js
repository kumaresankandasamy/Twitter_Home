let promiselists=["https://fsd1.herokuapp.com/users/1/tweets",
          "https://fsd1.herokuapp.com/users/1/following/tweets",];

resolve(...promiselists);
async function resolve(){
	let promise=await resolve(...promiselists);
}
(...promiselists)=>{
	let data = promiselists.map(promiselist => fetch(promiselist).then(d => d.json()));
	let promise = Promise.all(data)
	             .then(res => resolvelists.call(res)); 
	promise.then(res => acceptlists.call(res));
}
resolvelists()=>{
	return this;
}
let acceptlists = ()=> {
	userdata(this[0].data);
	tweets.apply(this[1]);
}
let userdata = (promiselists)=>{
	var data = promiselists[i];
	let user = new User(data.id, data.profile_img, data.cover_img, data.full_name, data.user_bio, data.user_name, data.user_email, data.following, data.stats);
	let stats = new Stats(data.stats.tweets, data.stats.followers, data.stats.following);
	userdetails(user, stats);
}
class User{
	constructor( id, profile_img, cover_img, full_name, user_bio, user_name, user_email,following, stats){
		this.id=id;
		this.profile_img=profile_img;
		this.cover_img=cover_img;
		this.full_name=full_name;
		this.user_bio=user_bio;
		this.user_name=user_name;
		this.user_email=user_email;
		this.following=following;
		this.stats=stats;
	}
	get name(){
		return this.id+this.profile_img+this.cover_img+this.full_name+this.user_bio+this.user_name+this.user_email+this.following+this.stats;
	}
	
}
class Stats{
	constructor(tweets,followers, following){
		this.tweets=tweets;
		this.followers=followers;
		this.following=following;
	}
	get name(){
		return this.tweets+this.followers+this.following;
	}
}
let userdetails = function(user, stats) {
	querySelectorInnerHTML("div.userid",user.id);
	querySelectorImg("div.user-avatar",user.profile_img);
	querySelectorImg("div.headerblock", user.cover_img);
	querySelectorInnerHTML("div.username", user.full_name);
	querySelectorInnerHTML("div.follow-body span.username" + user.user_name);
	querySelectorInnerHTML("span.email",user.user_email);
	querySelectorInnerHTML("p#tweets", stats.tweets);
	querySelectorInnerHTML("p#following", stats.following);
	querySelectorInnerHTML("p#followers", stats.followers);
	querySelectorImg("div.profilepic img", user.profile_img);
}
let tweets =()=>{
	let data = this.data;
	let tweet = document.querySelector(".rightpart");
	for(var i in data) {
		let div += `<div class="main">
						<div class="user-avatar">
							<img src="${data[i].user.profile_img}"">
						</div>
						<div class="row1">
							<div class="comment-header">
								<span>${data[i].user.full_name}</span>
								<span>@${data[i].user.user_name}</span>
								<span>1day</span>
							</div>
							<div class="tweetbody">
								<span>
								${data[i].text}
								</span>
							</div>
							<div class="comment-body">
								<div class="comment-footer">
									<img src="img/Home page-06.png">
									<span>${data[i].stats.comments}</span>
								</div>
								<div class="likes">
									<img src="img/Home page-08.png">
									<span>${data[i].stats.likes}</span>
								</div>
								<div class="retweets">
									<img src="img/Home page-07.png">
									<span>${data[i].stats.retweets}</span>
								</div>
							</div>
						</div>
					</div>`;
	}
	rightpart.innerHTML = div;
}
function querySelectorImg(target, data){
	let container = document.querySelector(target);
	container.src = data;
}
function querySelectorInnerHTML(target, data){
	let container = document.querySelector(target);
	container.innerHTML = data;
}

