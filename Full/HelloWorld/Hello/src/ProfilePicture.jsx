function ProfilePicture() {
  const imgUrl =
    "https://imgs.search.brave.com/JOqNzdQFupSEPeTbN3xHjOXS-6EC9hMMoUFGoSZ5Cdg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUxMTQ2/MzEuanBn";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return <img src={imgUrl} onClick={(e) => handleClick(e)}></img>;
}

export default ProfilePicture;
