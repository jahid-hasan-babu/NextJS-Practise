// <---------union type---------->

let userId: string | number | boolean;

userId = "1101";
userId = 158748;
userId = true;

function displayUserInfo(userId: string | number) {
  console.log(userId);
}

displayUserInfo(100);
