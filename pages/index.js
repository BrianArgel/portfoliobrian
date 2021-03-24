import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";

console.log(experiences);
const Index = () => (
  <Layout dark={true}>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="BRIAN.jpg" alt="" className="img-fluid" width="250px" />
            </div>
            <div className="col-md-8">
              <h1>Brian Argel</h1>
              <h3> Full Stack Web Developer</h3>
              <p className="lead">
                Geek by nature I was always curiously interested in technology,
                music, and gaming. I still remember when I was a kid and my
                relatives used to ask me what I wanna do for the living which I
                used to answer "study computers". I guess that sometimes the
                dreams come true.{" "}
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second seccion */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1> SKills</h1>
            {skills.map(({ skill, percentage }) => (
              <div className="py-4" key={skill}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8 ">
        <div className="card bg-light">
          <div className="card-body my-3">
            <h1> Experience</h1>
            <ul>
              {experiences.map(({ title, from, to, description }, index) => (
                <li key={index} className="my-3">
                  <h4>{title}</h4>
                  <h5>
                    {from} - {!to ? "currency" : to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <Link href="/experience">
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12 text-center text-light">
              <h1>Portfolio</h1>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} className="img-fluid card-img-top" />
                  </div>
                  <div className="card card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="">Show More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
