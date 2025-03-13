function skillsMember() {
  return new Promise((resolve, reject) => {
    const skills = ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"];
    resolve(skills);
  });
}