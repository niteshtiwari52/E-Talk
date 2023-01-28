// To get the sender
export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

// To get the sender pic
export const getSenderPic = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1].pic : users[0].pic;
};

export const isMyMessage = (loggedUser, message) => {
  if (loggedUser._id === message.sender._id) {
    return true;
  }
  return false;
};
