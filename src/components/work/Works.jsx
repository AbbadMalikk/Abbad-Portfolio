import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItem from './WorkItem'
import WorkModal from './WorkModal';
const Works = () => {

  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)



  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    }
    else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      })
      setProjects(newProjects)
    }


  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
    setActive(index);
  }


  const openModal = (project) => {
    setSelectedProject(project); // Set the selected project data
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProject(null); // Clear selected project data
  };




  return (
    <div>
      <div className="work_filters">
        {
          projectsNav.map((item, index) => {
            return (
              <span onClick={(e) => { handleClick(e, index); }} className={`${active === index ? 'active-work' : ''} work_item`} key={index}>{item.name}</span>
            )
          })
        }
      </div>
      <div className="work_container container grid">
        {projects.map((item) => {
          return <WorkItem item={item} key={item.id} openModal={() => openModal(item)} />
        })}
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <WorkModal project={selectedProject} closeModal={closeModal} />
      )}



    </div>
  )
}

export default Works