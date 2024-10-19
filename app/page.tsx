import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import ProjectSection from "./components/projects/project";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
   <div>
       <Header></Header>
       <HeroSection></HeroSection>
       <ProjectSection></ProjectSection>
       <Footer></Footer>
   </div>
  );
}
