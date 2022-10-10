import React, {
  useRef,
  useEffect
} from 'react';
import {
  useState
} from 'react';
import styles from '../../styles/EditReviewPage.module.css';
import {
  Alert,
  Button,
  Container,
  Form,
  Col,
  Row
} from 'react-bootstrap';
import {
  useHistory
} from 'react-router-dom';
import {
  useParams
} from 'react-router-dom/cjs/react-router-dom.min';
import {
  axiosReq
} from '../../api/axios';

/**Function for editing a review the handleimage will show the old image so that the user dont have to change
 * image everytime when user changes other information.
 */
function EditReview() {
  const [createReview, setCreateReview] = useState({
    title: "",
    content: "",
    pros: "",
    cons: "",
    image: "",
    price: "",
    category: "",
  });
  const imageInput = useRef(null);
  const {
    id
  } = useParams();
  const {
    title,
    content,
    image,
    price,
    category,
    pros,
    cons
  } = createReview;
  const [error, setError] = useState({});

  const [categorySub] = useState({
    electronics: 1,
    clothes: 2,
    other: 3,
    vehicles: 4,
    sports: 5,
    games: 6,

  });
  const {
    electronics,
    clothes,
    other,
    vehicles,
    sports,
    games
  } = categorySub;
  const history = useHistory();

  useEffect(() => {

    const handleRequestEdit = async () => {

      try {
        const {
          data
        } = await axiosReq.get(`/posts/${id}/`);
        const {
          title,
          content,
          pros,
          cons,
          image,
          price,
          category,
          is_owner
        } = data;

        is_owner ? setCreateReview({
          title,
          content,
          pros,
          cons,
          image,
          price,
          category
        }) : history.push("/");
      } catch (err) {
  
      }

    };
    handleRequestEdit();

  }, [history, id]);

  const handleReview = (event) => {
    setCreateReview({
      ...createReview,
      [event.target.name]: event.target.value,
    });

  };

  const handleImage = (event) => {
    URL.revokeObjectURL(image);
    if (event.target.files.length) {
      setCreateReview({
        ...createReview,
        import: URL.createObjectURL(event.target.files[0])

      });

    }

  };
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('pros', pros);
    formData.append('cons', cons);
    formData.append('price', price);
    formData.append('category', category);

    if (imageInput?.current?.files[0])
      formData.append('image', imageInput.current.files[0]);

    try {

      await axiosReq.put(`/posts/${id}/`, formData);
      setMessage("Your information have been updated");
      history.push(`/reviews/${id}/edit`);

    } catch (err) {
      if (err.response?.data !== 401) {
        setError(err.response?.data);

      }
    }

  };
/** Show element and hide ased on clicking */
  const showBlock = () => {
    let displaying = document.getElementById('display');
    displaying.style.display = 'block';
  };


  return (

    <Container>
      <h3> Edit </h3>
      <Row md={4}>
        <Col md={6} sm={6} className={`offset-md-3 ${styles.Container}`}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label> Title </Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={handleReview} />

            </Form.Group>
            {error?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label> Body content </Form.Label>
              <Form.Control as="textarea" name="content" value={content} onChange={handleReview}></Form.Control>
            </Form.Group>
            {error?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label> Pros </Form.Label>
              <Form.Control as="textarea" name="pros" value={pros} onChange={handleReview}></Form.Control>
            </Form.Group>
            {error?.pros?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label> Cons </Form.Label>
              <Form.Control as="textarea" name="cons" value={cons} onChange={handleReview}></Form.Control>
            </Form.Group>
            {error?.cons?.map((message, idx) => (
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
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" name="price" value={price} onChange={handleReview} min="0" max="1000000" />
            </Form.Group>
            {error?.price?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category" value={category} onChange={handleReview}>
                <option value={electronics}>Electronics </option>
                <option value={clothes}>Clothes</option>
                <option value={vehicles}>Vehicles</option>
                <option value={sports}>Sports</option>
                <option value={games}>Games</option>
                <option value={other}>Other</option>
              </Form.Control>
            </Form.Group>
            {error?.category?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Alert variant="success" id="display" className={styles.HideMessage}>
              {message}
            </Alert>
            <Button variant="primary" type="submit" onClick={showBlock}>
             Update review
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default EditReview