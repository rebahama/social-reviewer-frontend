import React, {
    useEffect,
    useState
  } from 'react';
  import {
    useParams
  } from 'react-router-dom/cjs/react-router-dom.min';
  import {
    axiosReq
  } from '../../api/axios';
  import ReviewPage from '../review/ReviewPage';
  import Comments from '../comments/Comments';
  import CreateComment from '../comments/CreateComment';
  
  function Reviews() {
    /**Fetching both the comments and the reviews and 
     * displaying the result in a object with array inside.
     */
    const {
      id
    } = useParams();
    const [review, setReview] = useState({
      results: []
    });
    const [comments, setComment] = useState({
      results: []
    });
  
    useEffect(() => {
      const handleData = async () => {
        try {
          const [{
            data: review
          }, {
            data: comments
          }] = await Promise.all([
            axiosReq.get(`/posts/${id}`),
            axiosReq.get(`/comments/?post=${id}`),
  
          ]);
          setReview({
            results: [review]
          });
          setComment(comments);

        } catch (err) {

  
        }
  
      };
      handleData();
  
    }, [id]);

    return (

        <div>
            <ReviewPage {...review.results[0]} setReview={setReview} Reviews comments={comments} />
            {comments.results.map((comments) => {
                return <Comments key={comments.id} {...comments} />
            })}
            <CreateComment post={id} setReview={setReview} setComment={setComment} />
        </div>
    )
};

export default Reviews