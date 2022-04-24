import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Made with 💚 for KIIT</span>
        <span className="headerTitleLg">MicroBlog</span>
      </div>
      <img
        className="headerImg"
        src="https://user-images.githubusercontent.com/60937304/164972114-d1477236-c2ee-4118-80cb-0e43c0b9fa23.jpg"
        alt=""
      />
    </div>
  );
}
