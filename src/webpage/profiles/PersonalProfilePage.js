import React, { useState, useRef, useEffect } from 'react'
import { Alert, Container, Form, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios'

function PersonalProfilePage() {

    
    const [profile, SetEditProfile] = useState({
        name: "",
        content: "",
        image: ""
    })
    const history = useHistory()
    const imageInput = useRef(null)
    const {id} = useParams() 
    const { name, content, image } = profile
    const [error, setError] = useState({});

    useEffect(() => {
        const handleProfileEdit = async () => {

            try {
                const { data } = await axiosReq.get(`profiles/${id}`)
                const { name, content, image, is_owner} = data

                is_owner ? SetEditProfile({ name, image, content, is_owner }) : history.push("/")

            }
            catch (err) {

            }
         handleProfileEdit()

        }


    }, [history, id])

    const handleProfileEdit = (event) => {
        SetEditProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });

    }

    const handleImage = (event) => {
        URL.revokeObjectURL(image);
        if (event.target.files.length) {
            SetEditProfile({
                ...profile,
                import: URL.createObjectURL(event.target.files[0])

            })

        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', name)
        formData.append('content', content)
        formData.append('image', image)

        if (imageInput?.current?.files[0])
            formData.append('image', imageInput.current.files[0])

        try {
            await axiosReq.put(`/profiles/${id}/`, formData);
            history.push("/profilepage/");
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setError(err.response?.data);
            }
        }

    }




    return (

        <Container>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="text" name="name" value={name} placeholder="Enter name" onChange={handleProfileEdit} />
                </Form.Group>
                {error?.name?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}


                <Form.Group>
                    <Form.Label> Bio content </Form.Label>
                    <Form.Control as="textarea" name="content" placeholder="Biography" value={content} onChange={handleProfileEdit}></Form.Control>
                </Form.Group>

                {error?.content?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}


                <Form.Label> Image upload </Form.Label>
                <Form.File id="image-upload" onChange={handleImage} ref={imageInput} accept="image/*" />

                {error?.image?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </Container>
    )
}

export default PersonalProfilePage