function checkEmail(emali) {
  const regex = /\w@(gmail|hotmail|yahoo).com$/gi;
  if (regex.test(emali)) {
    console.log("your email is ok");
  }
}
