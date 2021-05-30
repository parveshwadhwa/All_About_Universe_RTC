import consumer from "./consumer"

let scroll_bottom = function()
{
  if ($('#scroll').length > 0) 
  {
    $('#scroll').scrollTop($('#scroll')[0].scrollHeight);
  }
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#mess").append(data.mod_message)
    scroll_bottom()
    // Called when there's incoming data on the websocket for this channel
  }
});
