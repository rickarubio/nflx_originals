Cable.originals = Cable.cable.subscriptions.create({"channel": "OriginalsChannel"}, {
  connected: function(data) {
    console.log('connected to OriginalsChannel');
  },
  received: function(data) {
    console.log(data);
  }
});
