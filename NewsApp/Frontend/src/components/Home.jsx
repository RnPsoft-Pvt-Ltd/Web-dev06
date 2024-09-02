import Category from "./Category";
import Sections from "./Sections";
import Top from "./Top";
import TopAdds from "./TopAdds";
import Trending from "./Trending";

function Home({ data,changeOpenNews }) {
  return <>
    <TopAdds data={data.adds.topAdd} />
    <div className="container">
      <div className="top">
        <Top data={data.Heading.subNews} changeOpenNews={changeOpenNews}/>
        <div>
          <Trending data={data.Heading.trending} />
          <Trending data={data.Heading.trending} />
        </div>
      </div>
      <Sections data={data.Sections} />
      <Category data={data.category} />
    </div>
  </>
}
export default Home;