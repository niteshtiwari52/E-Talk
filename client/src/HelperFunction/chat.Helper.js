// To get the sender
export const getSender = (loggedUser, users) => {
  // console.log(users);
  if (!users) {
    return;
  }
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

// To get the sender pic
export const getSenderPic = (loggedUser, users) => {
  // console.log(users);
  if (!users) {
    return;
  }
  return users[0]._id === loggedUser._id ? users[1].pic : users[0].pic;
};

// get sender profile details
export const getSenderProfileDetails = (loggedUser, sender) => {
  //   {
  //     "_id": "64085bcfd048ad12760f321f",
  //     "chatName": "sender",
  //     "isGroupChat": false,
  //     "users": [
  //         {
  //             "_id": "64085b44d048ad12760f31dc",
  //             "name": "Nitesh 1",
  //             "email": "niteshtiwari5222@gmail.com",
  //             "about": "Hey there! I am using E-Talk",
  //             "contact": 9354181823,
  //             "pic": "https://res.cloudinary.com/dwht5kew8/image/upload/v1678270561/ra7wqkd1n6ktc4x4cwyg.jpg",
  //             "is_verified": true,
  //             "createdAt": "2023-03-08T09:54:12.315Z",
  //             "updatedAt": "2023-03-08T10:15:59.308Z",
  //             "__v": 0,
  //             "cloudinary_id": "ra7wqkd1n6ktc4x4cwyg"
  //         },
  //         {
  //             "_id": "64085b98d048ad12760f3200",
  //             "name": "nitesh",
  //             "email": "niteshtiwari1720@gmail.com",
  //             "about": "Hey there! I am using E-Talk",
  //             "contact": 9354181823,
  //             "pic": "https://static.vecteezy.com/system/resources/thumbnails/002/002/341/small_2x/man-wearing-sunglasses-avatar-character-isolated-icon-free-vector.jpg",
  //             "is_verified": true,
  //             "createdAt": "2023-03-08T09:55:36.318Z",
  //             "updatedAt": "2023-03-08T09:56:01.848Z",
  //             "__v": 0
  //         }
  //     ],
  //     "createdAt": "2023-03-08T09:56:31.805Z",
  //     "updatedAt": "2023-03-08T10:33:55.672Z",
  //     "__v": 0,
  //     "latestMessage": {
  //         "_id": "64086493d048ad12760f32ed",
  //         "sender": {
  //             "_id": "64085b44d048ad12760f31dc",
  //             "name": "Nitesh 1",
  //             "email": "niteshtiwari5222@gmail.com",
  //             "pic": "https://res.cloudinary.com/dwht5kew8/image/upload/v1678270561/ra7wqkd1n6ktc4x4cwyg.jpg"
  //         },
  //         "content": "😀",
  //         "chat": "64085bcfd048ad12760f321f",
  //         "createdAt": "2023-03-08T10:33:55.189Z",
  //         "updatedAt": "2023-03-08T10:33:55.189Z",
  //         "__v": 0
  //     }
  // }
  const { users } = sender;
  const data = {
    senderName: "",
    senderAbout: "",
    senderEmail: "",
    senderContact: "",
    senderPic: "",
  };

  users.forEach((element) => {
    if (loggedUser._id !== element._id) {
      data.senderName = element.name;
      data.senderAbout = element.about;
      data.senderEmail = element.email;
      data.senderContact = element.contact;
      data.senderPic = element.pic;
    }
  });
  // console.log(data);
  return data;
};

// get group public details
export const getGroupProfileDetails = (loggedUser, sender) => {
  //   {
  //     "_id": "640867ecd048ad12760f3346",
  //     "chatName": "3 Developers",
  //     "isGroupChat": true,
  //     "users": [
  //         {
  //             "_id": "64085b98d048ad12760f3200",
  //             "name": "nitesh",
  //             "email": "niteshtiwari1720@gmail.com",
  //             "about": "Hey there! I am using E-Talk",
  //             "contact": 9354181823,
  //             "pic": "https://static.vecteezy.com/system/resources/thumbnails/002/002/341/small_2x/man-wearing-sunglasses-avatar-character-isolated-icon-free-vector.jpg",
  //             "is_verified": true,
  //             "createdAt": "2023-03-08T09:55:36.318Z",
  //             "updatedAt": "2023-03-08T09:56:01.848Z",
  //             "__v": 0
  //         },
  //         {
  //             "_id": "64085b98d048ad12760f3200",
  //             "name": "nitesh",
  //             "email": "niteshtiwari1720@gmail.com",
  //             "about": "Hey there! I am using E-Talk",
  //             "contact": 9354181823,
  //             "pic": "https://static.vecteezy.com/system/resources/thumbnails/002/002/341/small_2x/man-wearing-sunglasses-avatar-character-isolated-icon-free-vector.jpg",
  //             "is_verified": true,
  //             "createdAt": "2023-03-08T09:55:36.318Z",
  //             "updatedAt": "2023-03-08T09:56:01.848Z",
  //             "__v": 0
  //         },
  //         {
  //             "_id": "64085b44d048ad12760f31dc",
  //             "name": "Nitesh 1",
  //             "email": "niteshtiwari5222@gmail.com",
  //             "about": "Hey there! I am using E-Talk",
  //             "contact": 9354181823,
  //             "pic": "https://res.cloudinary.com/dwht5kew8/image/upload/v1678270561/ra7wqkd1n6ktc4x4cwyg.jpg",
  //             "is_verified": true,
  //             "createdAt": "2023-03-08T09:54:12.315Z",
  //             "updatedAt": "2023-03-08T10:15:59.308Z",
  //             "__v": 0,
  //             "cloudinary_id": "ra7wqkd1n6ktc4x4cwyg"
  //         }
  //     ],
  //     "groupAdmin": {
  //         "_id": "64085b44d048ad12760f31dc",
  //         "name": "Nitesh 1",
  //         "email": "niteshtiwari5222@gmail.com",
  //         "about": "Hey there! I am using E-Talk",
  //         "contact": 9354181823,
  //         "pic": "https://res.cloudinary.com/dwht5kew8/image/upload/v1678270561/ra7wqkd1n6ktc4x4cwyg.jpg",
  //         "is_verified": true,
  //         "createdAt": "2023-03-08T09:54:12.315Z",
  //         "updatedAt": "2023-03-08T10:15:59.308Z",
  //         "__v": 0,
  //         "cloudinary_id": "ra7wqkd1n6ktc4x4cwyg"
  //     },
  //     "createdAt": "2023-03-08T10:48:13.001Z",
  //     "updatedAt": "2023-03-08T10:48:13.001Z",
  //     "__v": 0
  // }
  const { chatName, isGroupChat, users, groupAdmin, createdAt } = sender;

  const data = {
    groupName: chatName,
    createdAt: createdAt,
    createdBy: groupAdmin.name,
    admin: {
      id: groupAdmin._id,
      name: groupAdmin.name,
    },
    users: [],
  };

  users.forEach((element) => {
    const obj = {
      id: element._id,
      name: element.name,
      pic: element.pic,
    };
    if (groupAdmin._id !== element._id) {
      data.users.push(obj);
    } else {
      data.users.unshift(obj);
    }
  });

  // console.log(data);
  return data;
};

export const isMyMessage = (loggedUser, message) => {
  if (!message.sender || !loggedUser) {
    return;
  }
  if (loggedUser._id === message.sender._id) {
    return true;
  }
  return false;
};

// getting time
export const getTime = (createdAt) => {
  const date = new Date(createdAt);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  // return `${timeString}`;
  return `${dateString} ${timeString}`;
};
