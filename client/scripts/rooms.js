// Rooms locally stores all currently available rooms, rooms which are both local and on the server
// It will query parse.js for the list of available Rooms (both local and remote)
// Parse will tell Rooms which rooms were deleted or added (since last query)
// Rooms will respond to queries from Parse for new rooms (since last query)
var Rooms = {
  // Hard-code for now.
  // Later, it will call Parse to query the server and retrieve this dynamically:

};
