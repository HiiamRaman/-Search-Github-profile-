export default function User({ user }) {
  const { avatar_url, bio, followers, name, public_repos, html_url } = user;
  return (
    <div>
      <div>
        <img src={avatar_url} alt="" className="avtar" />
      </div>
      <div>
        <a href={`https://github.com/${html_url}`}>{html_url}</a>
      </div>

      
    </div>
  );
}
