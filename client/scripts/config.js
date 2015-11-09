var SOUND_CLOUD_KEY =  '8c1e7cf87ec98696fc9fb75efa0c4ec6';

SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://example.com/callback'
});
//Taken from https://developers.soundcloud.com/docs/api/sdks#javascript

SC.connect().then(function(){
  return SC.put('/me/followings/183');
}).then(function(user){
  alert('You are now following ' + user.username);
}).catch(function(error){
  alert('Error: ' + error.message);
});

//Find music

//Add to their current playlist

//Play user's playlist
