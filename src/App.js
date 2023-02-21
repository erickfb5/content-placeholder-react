import { useEffect, useRef } from "react";

import "./App.css";

const App = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const excerptRef = useRef(null);
  const profileImgRef = useRef(null);
  const nameRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const getData = () => {
      headerRef.current.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />`;
      titleRef.current.textContent = "Lorem ipsum dolor sit amet";
      excerptRef.current.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
      profileImgRef.current.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
      nameRef.current.textContent = "John Doe";
      dateRef.current.textContent = "Oct 08, 2020";

      headerRef.current.classList.remove("animated-bg");
      titleRef.current.classList.remove("animated-bg-text");
      excerptRef.current
        .querySelectorAll(".animated-bg-text")
        .forEach((bg) => bg.classList.remove("animated-bg-text"));
      profileImgRef.current.classList.remove("animated-bg");
      nameRef.current.classList.remove("animated-bg-text");
      dateRef.current.classList.remove("animated-bg-text");
    };

    const timeoutId = setTimeout(getData, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="card">
      <div className="card-header animated-bg" ref={headerRef}>
        &nbsp;
      </div>

      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text" ref={titleRef}>
          &nbsp;
        </h3>
        <p className="card-excerpt" ref={excerptRef}>
          &nbsp;
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div className="author">
          <div className="profile-img animated-bg" ref={profileImgRef}>
            &nbsp;
          </div>
          <div className="author-info">
            <strong className="animated-bg animated-bg-text" ref={nameRef}>
              &nbsp;
            </strong>
            <small className="animated-bg animated-bg-text" ref={dateRef}>
              &nbsp;
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
