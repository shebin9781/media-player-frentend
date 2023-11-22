

import { commonAPI } from "./commonAPI.js"
import { serverURL } from "./serverURL.js"


// upload video

export const uploadVideo =async(reqBody)=>{
  return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get all uploaded videos
   
export const getAllVideos = async()=>{


  //return the response to view.jsx component
  

   return await commonAPI('GET',`${serverURL}/video`,"")
}


// to delete a video

export const deleteAVideos = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}


//api to add history

export const addToHistory = async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api to get history from json-server


export const getAllHistory = async()=>{
 return await commonAPI('GET',`${serverURL}/history`,"")
}
//api call to delete history
export const deleteVideoHistory =async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


//api to add category to json-server


export const addAllCategory = async (body)=>{
  return await commonAPI('POST',`${serverURL}/category`,body)
}

//api to get all category from json-server

export const getALLcategories = async()=>{
  return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete categories from json-server

export const deletecategory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get  a particular video from http://localhost:8000/video 

export const getAVideo = async (id)=>{
  return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}
//api to update the category with new videos

export const updateCategory = async (id,body)=>{
 return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}