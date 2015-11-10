// var SOUND_CLOUD_KEY =  '8c1e7cf87ec98696fc9fb75efa0c4ec6';
var SC = require('soundcloud');
SC.initialize({
  client_id: '8c1e7cf87ec98696fc9fb75efa0c4ec6'
});
//Taken from https://developers.soundcloud.com/docs/api/sdks#javascript

// SC.connect().then(function(){
//   return SC.put('/me/followings/183');
// }).then(function(user){
//   alert('You are now following ' + user.username);
// }).catch(function(error){
//   alert('Error: ' + error.message);
// });
// SC stream for music playing SC.stream(trackPath)
// SC.resolve(url) JSon representation of resource
//https://developers.soundcloud.com/docs/api/reference#tracks
//Properties to use title, stream_url, artwork_url
//Find music
exports.search = function(searchTerm){
  SC.get('/tracks', {
  q: searchTerm, license: 'cc-by-sa'
  }).then(function(tracks){
    return tracks;
  })
}



//Add to their current playlist

//Play user's playlist
