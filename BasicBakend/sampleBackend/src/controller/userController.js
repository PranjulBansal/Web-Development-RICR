export const Update=(req, res) => {
  res.status(200).json({ message: "User Update Successfull" });
}

export const ChangePass=(req, res) => {
  res.status(200).json({ message: "User Password successfully changed " });
}

export const Delete=(req, res) => {
  res.status(200).json({ message: "user information delete successfully" });
}
