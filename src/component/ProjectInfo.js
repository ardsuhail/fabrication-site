import React from 'react'

const ProjectInfo = ({ project }) => {
  return (
    <div>
          <div className="max-w-4xl mx-auto py-16 px-4">

      <h1 className="text-3xl font-bold">
        {project.title}
      </h1>

      <p className="text-muted mt-2">
        {project.location}
      </p>

      <p className="mt-6 text-muted">
        {project.description}
      </p>

      {/* Images */}
      <div className="grid gap-4 mt-8 md:grid-cols-2">
        {project.media.map((img, i) => (
          <img key={i} src={img} className="rounded-xl" />
        ))}
      </div>

    </div>
    </div>
  )
}

export default ProjectInfo
