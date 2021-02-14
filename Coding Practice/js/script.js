// If the number is > 3 return the positive number. If the number is <= 3 return that number times -1

var numbers = [3,[3,4,2],[3,3,[[[[[[2]]]]]]],[3,6,1],[2,3]];

function sum_array(lst) {
    if (lst.isInteger()) {
        return lst;
    }   
    var sum = 0;
    var i;
    for (i = 0; i < lst.length; i++) {
        sum += sum_array(lst[i]);
    }
    return sum;
}


var sum = sum_array(numbers);

document.getElementById("change").innerHTML = sum;







// class User {
//     constructor(name, bio) {
//         this.name = name;
//         this.bio = bio;
//         this.tweets = [];
//     }

//     tweet(text) {
//         var tweet = new Tweet(text, this.name);
//         this.tweets.push(tweet);
//     }

//     like_tweet(tweet) {
//         tweet.likes++;
//     }  
// }

// class Tweet {
//     constructor(text, user) {
//       this.text = text;
//       this.user = user;
//       this.likes = 0;
//     }
//     to_string() {
//         var sentence;
//         sentence = "User: " + this.user + " || Tweet: " + this.text + " || Likes: " + this.likes;
//         return sentence;
//     }
// }

// var user = new User("Ryan", "Manager of Interns at RCEO");
// user.tweet("RCEO is cool");
// user.tweet("RCEO is amazing");
// user.tweet("RCEO is legit");
// user.like_tweet(user.tweets[1]);

// function like_from_web() {
//     user.like_tweet(user.tweets[1])
// }

// document.getElementById("change").innerHTML = user.tweets[0].to_string();
// document.getElementById("change1").innerHTML = user.tweets[1].to_string();
// document.getElementById("change2").innerHTML = user.tweets[2].to_string();
