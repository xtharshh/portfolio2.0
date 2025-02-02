"use client"

import { useState } from "react"
import { Project } from "../../components/ui/project"
import { BackgroundAnimation } from "../../components/background-animation"
import { CustomScrollBar } from "../../components/custom-scroll-bar"

const projects = [
  {
    title: "Project 1",
    subtitle: "Innovation Redefined",
    description:
      "This innovative solution revolutionizes how we approach problem-solving in the digital age. Our team has developed cutting-edge technology that streamlines processes, enhances user experiences, and sets new industry standards. By leveraging advanced algorithms and intuitive design, Project 1 offers unparalleled efficiency and functionality.",
    image: "/placeholder.svg?height=1080&width=1920",
    link: "#",
  },
  {
    title: "Project 2",
    subtitle: "User-Centric Design",
    description:
      "Project 2 showcases our commitment to user-centric design and cutting-edge technology integration. We've created an immersive platform that adapts to individual user needs, providing personalized experiences at scale. With a focus on accessibility and intuitive navigation, this project sets a new benchmark for user engagement and satisfaction.",
    image: "/placeholder.svg?height=1080&width=1920",
    link: "#",
  },
  {
    title: "Project 3",
    subtitle: "Pushing Boundaries",
    description:
      "With Project 3, we've pushed the boundaries of what's possible, creating a seamless experience for our users. This groundbreaking initiative combines advanced AI capabilities with robust data analytics, offering insights and functionalities previously thought unattainable. The result is a powerful tool that transforms how businesses operate and make decisions.",
    image: "/placeholder.svg?height=1080&width=1920",
    link: "#",
  },
  {
    title: "Project 4",
    subtitle: "Expertise Culmination",
    description:
      "Project 4 represents the culmination of our team's expertise, delivering unparalleled value to our clients. This comprehensive solution integrates multiple technologies to create a unified ecosystem that enhances productivity, fosters collaboration, and drives innovation. It's a testament to our commitment to excellence and our ability to solve complex challenges.",
    image: "/placeholder.svg?height=1080&width=1920",
    link: "#",
  },
]

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-auto">
      <BackgroundAnimation />
      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <div key={index} className="w-full h-auto my-8">
            <Project {...project} imageOnLeft={index % 2 === 0} />
          </div>
        ))}
      </div>
      <CustomScrollBar
        totalSlides={projects.length}
        currentSlide={currentSlide}
        onScrollbarClick={handleSlideChange}
      />
    </div>
  )
}

