import Link from "next/link";
import Navbar from "../components/Navbar";
import { BiGitRepoForked } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const username = "riteshf";

function Home({ mydata, mydata1 }) {
  return (
    <div>
      <Navbar users={mydata} />
      <div style={{ display: "flex" }}>
        <div id="left_container">
          <div id="first_div">
            <Image src={mydata.avatar_url} alt="error"></Image>
            <h1>{mydata.login}</h1>
            <Link href={`github.com/${mydata.login}`}>
              <p>@{mydata.login}</p>
            </Link>
            <p>{mydata.bio}</p>
            <div
              id="follow_buttons"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link href={mydata.blog}>
                <button>Resume</button>
              </Link>
              <Link href={mydata.html_url}>
                <button>Follow</button>
              </Link>
            </div>
          </div>
          <div id="second_div">
            <h3>{mydata.bio}</h3>
          </div>
          <div id="third_div">
            <h3>Blog : {mydata.blog}</h3>
          </div>
        </div>
        <div id="right_container">
          <h1 style={{ textAlign: "center" }}>Projects</h1>
          <div id="all_projects">
            {mydata1.items.map((project) => {
              return (
                <Link href={project.html_url} key={project.id}>
                  <div id="iprojects">
                    <h3>{project.name}</h3>
                    <p>{project.full_name}</p>
                    <div id="icons">
                      <div id="main_icons">
                        <AiFillStar />
                        <p>{project.stargazers_count}</p>
                        <BiGitRepoForked />
                        <p>{project.forks_count}</p>
                      </div>
                      <div>
                        <p>{project.language}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  const res1 = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const data1 = await res1.json();
  return {
    props: {
      mydata: data,
      mydata1: data1,
    },
  };
}
