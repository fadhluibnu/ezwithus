const ProjectCard = ({image}) => {
    return (
        <div className='group rounded-2xl border-4 overflow-hidden hover:border-[#640EF1] duration-300 relative flex flex-col items-center'>
          <img src={image} alt="portofolio" />
          <button className='px-4 py-3 bg-[#640EF1] text-white rounded-full absolute m-auto -bottom-14 group-hover:bottom-4 duration-300 shadow-xl shadow-[#650ef142]'>Lihat Detail</button>
        </div>
    )
}

export default ProjectCard