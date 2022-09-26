import React, { useState,useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios'

function PersonalProfilePage() {
const [profile, SetEditProfile]=useState({
    name:"",
    content:"",
    image:""
})  
const history=useHistory()
const imageInput= useRef(null)
const {id} = useParams()
const {name,content, image}=profile
const [error, setError] = useState({});

useEffect(()=>{
    const handleProfileEdit = async ()=>{

        try{
            const {data} = await axiosReq.get(`profiles/${id}`)
            const {name, content, image, is_owner} = data

            is_owner ? SetEditProfile({name,image,content,is_owner}): history.push("/")

        }
        catch(err){

        }
        handleProfileEdit()

    }


},[history,id])
  
return (
    
    <div>
    





    </div>





  )
}

export default PersonalProfilePage