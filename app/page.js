"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className='text-white text-center'>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div className="">

          <li key={i} className='flex items-center border-gray-300 border justify-between bg-zinc-900 text-white p-4 rounded-md mb-4'>
            <div className='flex items-center justify-between  w-2/3'>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h5 className='text-2xl'>{t.title}</h5>
              </div>
              <p className='text-xl'>{t.desc}</p>
            </div>
            <button
              onClick={() => deleteHandler(i)}
              className='bg-red-600 text-white py-2 px-5 rounded-md'>Delete</button>
          </li>
        </div>
      )
    })
  }

  return (
    <>
      <div className="w-full h-full bg-zinc-900">
        <h1
          className='text-white bg-black p-5 text-5xl text-center font-medium'>My To-do List✅</h1>
        <form onSubmit={submitHandler}
          className='flex items-center justify-center'>
          <input
            type="text"
            className='text-2xl text-white border-gray-600  bg-zinc-800 border-2 m-5 px-4 py-2 rounded-md'
            placeholder='Enter Task here'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <input
            type="text"
            placeholder='Enter Description here'
            className='text-2xl text-white border-gray-600  bg-zinc-800 border-2 m-5 px-4 py-2 rounded-md'
            value={desc}
            onChange={(e) => { setDesc(e.target.value) }}
          />
          <button
            className='py-2 px-6 bg-black text-white rounded-lg border-gray-50 border'>Add Task</button>
        </form>
        <hr className='ml-20 mr-20' />
        <div className=" w-full h-full flex justify-center p-5 ">
          <div
            className="p-8 bg-zinc-800 w-4/5 rounded-lg border-gray-200">
            <ul>{renderTask}</ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default page