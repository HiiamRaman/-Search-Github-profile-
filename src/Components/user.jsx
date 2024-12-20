export default function User({ user }) {
  const { avatar_url, bio, followers, name, public_repos, 
    starred_url } = user;
  return (
    <div>
      <div>
        <img src={avatar_url} alt="" className="avtar" />
      </div>
      <div>
        <a href={`https://api.github.com/users/{username}`}>{starred_url}</a>
      </div>
      <div>
        {name},{bio}
      </div>
      <div>
        <h1>Number of followers & Repos : {followers},{public_repos}</h1>
      </div>
    </div>
  );
}
